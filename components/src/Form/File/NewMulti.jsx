import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropzone from 'react-dropzone';
// import convert from 'htmr';

import { authRequest } from '../../../shared/apis/utils';

import Button from '../../Button/Button';

import classNames from 'classnames';
import Styles from './File.module.scss';
import TruncateString from 'react-truncate-string';

class NewMulti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active || false,
      label: props.label || '',
      error: props.error || '',
      files: props.files
    };
  }

  static getDerivedStateFromProps(props, state) {
    // This really shouldnt be used but I'm not aware of a better technique to update state from props
    if (props.error !== state.error) {
      state.error = props.error || '';
    }
    if (props.files !== state.files) {
      state.files = props.files;
    }
    return state;
  }

  handleDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const formData = new FormData();
      if (file) {
        formData.append(this.props.field, file, file.fileName || file.name);
      }

      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          var percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          if (percent >= 100) {
            this.setState({ percent: 100 });
          } else {
            this.setState({ percent });
          }
        }
      };

      const url = `${this.props.server}/${this.props.name}/`;

      authRequest
        .post(url, formData, config)
        .then((response) => {
          const files = this.state.files;
          this.setState({ files: files.push(response.data) });
          if (this.props.onResponse) {
            this.props.onResponse(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({ percent: 0 });
        });
    });
  };

  handleRemove = (event, file) => {
    const url = `${this.props.server}/${this.props.name}/${file.id}/`;
    authRequest
      .delete(url)
      .then((response) => {
        const files = this.state.files;
        const index = files.indexOf(file);
        this.setState({ files: files.splice(index, 1) });

        if (this.props.onRemoveResponse) {
          this.props.onRemoveResponse(response.data);
        }
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

  render() {
    const { active } = this.state;
    const fileList =
      this.props.files &&
      this.props.files.map((file, index) => {
        return (
          <div key={index} className={classNames(Styles.fileNew)}>
            <a
              href={file[this.props.field]}
              target='_blank'
              rel='noopener noreferrer'
            >
              <TruncateString text={this.getName(file[this.props.field])} />
            </a>
            <div
              className={Styles.remove}
              onClick={(e) => {
                this.handleRemove(e, file);
              }}
            >{`Remove`}</div>
          </div>
        );
      });

    return (
      <div
        className={classNames(
          Styles.newContainer,
          Styles.multi,
          this.props.files && this.props.files.length > 0 && Styles.hasFile
        )}
      >
        {/*<label
          htmlFor={name}
          className={classNames(
            Styles.label,
            this.state.error && Styles.error
          )}>
          {this.state.error || this.state.label}
        </label>*/}
        <div className={classNames(Styles.drop)}>
          <Dropzone onDrop={this.handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()} style={{ outline: 'none' }}>
                  <input {...getInputProps()} />
                  <div className={Styles.placeholder}>
                    <span>{this.state.label}</span>
                    {/* <div className={Styles.browse}>Browse</div> */}
                    <Button
                      className={Styles.addButton}
                      type={Button.Type.BLUE}
                    >
                      {`Browse`}
                    </Button>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        {fileList.length ? (
          <div className={Styles.fileList}>{fileList}</div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

NewMulti.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  files: PropTypes.array,
  label: PropTypes.string,
  idleLabel: PropTypes.string,
  required: PropTypes.bool,
  server: PropTypes.string,
  onInit: PropTypes.func,
  onFileUpdate: PropTypes.func,
  onResponse: PropTypes.func,
  onRemoveResponse: PropTypes.func
};

export default NewMulti;
