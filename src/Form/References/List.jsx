import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TruncateString from 'react-truncate-string';
import Dropzone from 'react-dropzone';
import { authRequest } from '../../../shared/apis/utils';
import withToast from '../../../shared/hoc/withToast';

import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import SimpleModal from '../../SimpleModal/SimpleModal';

import Styles from './Styles.module.scss';

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

class References extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attachments: props.attachments,
      links: props.links,
      list: [],
      server: props.server,
      attachmentName: props.attachmentName,
      attachmentField: props.attachmentField,
      attachmentLabel: props.attachmentLabel,
      linkName: props.linkName,
      linkField: props.linkField,
      linkLabel: props.linkLabel,
      toggleLink: false,
    };
  }

  componentDidMount = () => {
    const orderedList = this.state.links.concat(this.state.attachments).sort((a, b) => {
      if (a.created > b.created) {
        return 1;
      }
      if (b.created > a.created) {
        return -1;
      }
      return 0;
    });
    this.setState({ list: orderedList });
  };

  handleError = (error) => {
    this.props.addToast(error, {
      appearance: 'error',
      autoDismiss: true,
    });
  };

  handleLinkCancel = (event) => {
    this.setState({
      linkValue: '',
      toggleLink: false,
      toastShow: false,
    });
  };

  handleLinkChange = (event) => {
    event.target.value = this.ensureHttpPrefix(event.target.value);

    this.setState({
      linkValue: event.target.value,
      error: '',
    });
  };

  handleLinkCreate = (event) => {
    this.setState({ loading: true });
    const url = `${this.props.server}/${this.props.linkName}/`;

    const payload = {
      [this.props.linkField]: this.state.linkValue,
    };

    authRequest
      .post(url, payload)
      .then((response) => {
        const list = this.state.list;
        list.push(response.data);
        this.setState({ list, value: '', error: '' });

        this.setState({ loading: false, toggleLink: false });
      })
      .catch((error) => {
        try {
          this.handleError(error.response.data[this.props.linkField][0]);
          // this.setState({ error: error.response.data[this.props.field][0] });
        } catch (e) {
          console.error(error);
        }
        this.setState({ loading: false });
      });
  };

  handleDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const formData = new FormData();
      if (file) {
        formData.append(this.props.attachmentField, file, file.fileName || file.name);
      }

      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          var percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          if (percent >= 100) {
            this.setState({ percent: 100 });
          } else {
            this.setState({ percent });
          }
        },
      };

      const url = `${this.props.server}/${this.props.attachmentName}/`;

      authRequest
        .post(url, formData, config)
        .then((response) => {
          const list = this.state.list;
          list.push(response.data);
          this.setState({ list });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ percent: 0 });
        });
    });
  };

  handleDelete = (event, item) => {
    if (item.url) {
      this.handleDeleteLink(event, item);
    } else if (item.attachment) {
      this.handleDeleteAttachment(event, item);
    }
  };

  handleDeleteLink = (event, link) => {
    const url = `${this.props.server}/${this.props.linkName}/${link.id}/`;

    authRequest
      .delete(url)
      .then((response) => {
        const list = this.state.list;
        const index = list.indexOf(link);
        list.splice(index, 1);
        this.setState({ list: list });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleDeleteAttachment = (event, file, list) => {
    const url = `${this.props.server}/${this.props.attachmentName}/${file.id}/`;
    authRequest
      .delete(url)
      .then((response) => {
        const list = this.state.list;
        const index = list.indexOf(file);
        list.splice(index, 1);
        this.setState({ list: list });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getName = (url) => {
    if (url) {
      return url.substring(url.lastIndexOf('/') + 1);
    }
  };

  ensureHttpPrefix = (value, prefix = 'http://') => {
    // Very crude method, taken from application
    // TODO(tim) add additional prefixes, move to an array for the prefixes, and update
    const httpPrefix = 'http://';
    const httpsPrefix = 'https://';
    const re = /^(https?):\/\//i;
    if (
      value &&
      !re.test(value) &&
      prefix.indexOf(value) !== 0 &&
      httpPrefix.indexOf(value) !== 0 &&
      httpsPrefix.indexOf(value) !== 0
    ) {
      return prefix + value;
    }

    return value;
  };

  handleKeyPress = (event) => {
    // For passing up keypresses + autoselect
    if (event.which === 13) {
      this.handleLinkCreate();
    }
  };

  toggleLinkHandler = (event) => {
    this.setState({ toggleLink: !this.state.toggleLink });
  };

  openDeleteModal = (e, item) => {
    this.setState({ deleteObj: item, confirmDelete: true });
  };

  handleConfirmDeleteAction = (e, item) => {
    this.setState({ deleteObj: null, confirmDelete: false });
    this.handleDelete(e, item);
  };

  handleCancelDeleteAction = () => {
    this.setState({ deleteObj: null, confirmDelete: false });
  };

  render() {
    const renderedList = this.state.list.map((item, index) => {
      return (
        <div className={Styles.item} key={item.id}>
          <div className={Styles.left}>
            <a
              className={Styles.primary}
              name={item.attachment || item.url}
              href={item.attachment || item.url}
              target='_blank'
              rel='noopener noreferrer'>
              {/*<FileIcon className={Styles.icon} url={item.attachment || item.url}/>*/}
              <TruncateString text={this.getName(item.attachment) || item.title || item.url} />
            </a>
            <p className={Styles.secondary}>
              {(item.size && formatBytes(item.size)) || item.url || 'Link'}
            </p>
          </div>
          <div
            className={Styles.remove}
            onClick={(e) => {
              this.openDeleteModal(e, item);
            }}>
            <Icon.Close className={Styles.closeIcon} />
          </div>
        </div>
      );
    });

    // const fileList =
    //   this.props.attachments &&
    //   this.props.attachments.map((file, index) => {
    //     return (
    //       <div key={index} className={classNames(Styles.fileNew)}>
    //         <a
    //           href={file[this.props.field]}
    //           target="_blank"
    //           rel="noopener noreferrer">
    //           <TruncateString text={this.getName(file[this.props.field])} />
    //         </a>
    //         <div
    //           className={Styles.remove}
    //           onClick={(e) => {
    //             this.handleDeleteAttachment(e, file);
    //           }}>{`Remove`}</div>
    //       </div>
    //     );
    //   });

    return (
      <div
        className={classNames(
          Styles.newContainer,
          Styles.multi,
          this.props.attachments && this.props.attachments.length > 0 && Styles.hasFile
        )}>
        {renderedList.length ? <div className={Styles.list}>{renderedList}</div> : ''}

        <div className={Styles.row}>
          <Dropzone onDrop={this.handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className={Styles.addItem}>
                <input {...getInputProps()} />
                {`+ Add File`}
              </div>
            )}
          </Dropzone>
          {this.state.toggleLink ? (
            <div className={Styles.field}>
              <input
                className={Styles.fieldInput}
                id={this.state.linkName}
                name={this.state.linkName}
                type='text'
                value={this.state.linkValue}
                placeholder='Add link'
                onChange={this.handleLinkChange}
                onKeyPress={this.handleKeyPress}
              />
              <Button
                className={Styles.fieldButton}
                type={Button.Type.WHITE}
                onClick={this.handleLinkCancel}>
                {`Cancel`}
              </Button>
              <Button
                className={Styles.fieldButton}
                type={Button.Type.BLUE}
                onClick={this.handleLinkCreate}
                isLoading={this.state.loading}>
                {`Add`}
              </Button>
            </div>
          ) : (
            <div className={Styles.addItem} onClick={this.toggleLinkHandler}>
              {`+ Add Link`}
            </div>
          )}
        </div>
        <SimpleModal
          show={this.state.confirmDelete}
          message={
            <p>
              {`Confirm that you want to delete `}
              <strong>
                {this.state.deleteObj &&
                  (this.getName(this.state.deleteObj.attachment) ||
                    this.state.deleteObj.title ||
                    this.state.deleteObj.url)}
              </strong>
            </p>
          }
          title={`Confirm Delete`}
          actionLabel={`Delete`}
          onAction={(e) => this.handleConfirmDeleteAction(e, this.state.deleteObj)}
          onHide={this.handleCancelDeleteAction}
        />
      </div>
    );
  }
}

References.propTypes = {
  // Shared Props
  server: PropTypes.string,

  // Attachment Props
  attachments: PropTypes.array,
  attachmentName: PropTypes.string,
  attachmentField: PropTypes.string,
  attachmentLabel: PropTypes.string,
  // Link Props
  links: PropTypes.array,
  linkName: PropTypes.string,
  linkField: PropTypes.string,
  linkLabel: PropTypes.string,
};

References.defaultProps = {
  attachmentName: 'attachments',
  attachmentField: 'attachment',
  attachmentLabel: 'Add Attachment',
  linkName: 'links',
  linkField: 'url',
  linkLabel: 'Add Link',
};

export default withToast(References);
