import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropzone, { useDropzone } from 'react-dropzone';

import { authRequest } from '../../../shared/apis/utils';
import { Button } from 'contentco-components';
import classNames from 'classnames';
import Styles from './File.module.scss';
import TruncateString from 'react-truncate-string';

class ImageDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label || '',
      error: props.error || '',
      progress: 0,
      progressLabel: null,
    };
  }

  handleDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const formData = new FormData();
      if (file) {
        formData.append(this.props.name, file, file.fileName || file.name);
      }

      let req = authRequest.put;
      if (this.props.method === 'post') {
        req = authRequest.post;
      }
      const config = {
        onUploadProgress: (progressEvent) => {
          const prog = parseInt((100.0 * progressEvent.loaded) / progressEvent.total, 10);
          this.setState({
            progress: prog,
            progressLabel: prog === 100 ? 'Loading...' : `${prog}%`,
          });
        },
      };
      req(
        this.props.server,
        this.props.onUploadRequestPayloadGenerate
          ? this.props.onUploadRequestPayloadGenerate(this.props.name, file)
          : formData,
        config
      ).then(
        (response) => {
          this.setState({ progress: 0, progressLabel: null });
          if (this.props.onResponse) {
            this.props.onResponse(response);
          }
        },
        (error) => {
          // pass
        }
      );
    });
  };

  handleRemove = (event) => {
    const data = JSON.stringify({
      [this.props.name]: null,
    });

    authRequest.put(`${this.props.server}reset-picture/`, data).then(
      (response) => {
        if (this.props.onResponse) {
          this.props.onResponse(response);
        }
      },
      (error) => {
        // pass
      }
    );
  };

  handleDropRejected = (event) => {
    if (this.props.onDropRejected) {
      this.props.onDropRejected(event);
    }
  };

  getName = (url) => {
    if (url) {
      return url.substring(url.lastIndexOf('/') + 1);
    }
  };

  render() {
    return (
      <Dropzone
        onDrop={this.handleDrop}
        accept={this.props.accept ? this.props.accept : ''}
        onDropRejected={this.handleDropRejected}
        multiple={false}>
        {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => (
          <div
            className={classNames(
              this.props.className,
              isDragActive && Styles.dropIsActive,
              isDragAccept && Styles.dragAccept,
              isDragReject && Styles.dragReject
            )}
            style={{ position: 'relative' }}
            {...getRootProps()}>
            <img src={this.props.value} />
            {/*<div
              className={classNames(Styles.progress)}
              style={{ width: `${this.state.progress}%` }}
            />*/}

            <input {...getInputProps()} />
            {/*<label
              htmlFor={name}
              className={classNames(
                Styles.label,
                this.state.error && Styles.error
              )}>
              {this.state.error || this.state.label}
            </label>
            <div className={classNames(Styles.drop)}>
              <div className={Styles.placeholder}>
                <span>{this.state.progressLabel || this.state.label}</span>
              </div>
            </div>
            <div className={classNames(Styles.file)}>
              <div className={Styles.fileName}>
                <TruncateString
                  text={
                    this.state.progressLabel || this.getName(this.props.value)
                  }
                />
                {!this.props.hideRemove && (
                  <div
                    className={Styles.fileRemove}
                    onClick={this.handleRemove}>
                    <div className={Styles.removeCross}>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z"
                          fill="currentColor"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>*/}

            <div
              className={Styles.imageRemoveButton}
              onClick={(e) => {
                e.stopPropagation();
                this.handleRemove();
              }}>
              <div className={Styles.removeCross}>
                <svg width='26' height='26' viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z'
                    fill='currentColor'
                    fillRule='nonzero'
                  />
                </svg>
              </div>
            </div>

            <div
              className={Styles.imageAddButton}
              onClick={(e) => {
                e.stopPropagation();
              }}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {`Browse`}
              </div>
            </div>
          </div>
        )}
      </Dropzone>
    );
  }
}

ImageDrop.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  idleLabel: PropTypes.string,
  required: PropTypes.bool,
  server: PropTypes.string,
  onInit: PropTypes.func,
  onFileUpdate: PropTypes.func,
  onResponse: PropTypes.func,
  hideRemove: PropTypes.bool,
  method: PropTypes.string,
  accept: PropTypes.array,
  onDropRejected: PropTypes.func,
  className: PropTypes.string,
  onUploadRequestPayloadGenerate: PropTypes.func,
};

ImageDrop.defaultProps = {
  hideRemove: false,
  method: 'put',
};

export default ImageDrop;
