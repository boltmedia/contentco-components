import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Dropzone, { useDropzone } from 'react-dropzone';

import { authRequest, baseAuthRequest } from '../../../shared/apis/utils';
import { Button } from 'contentco-components';
import classNames from 'classnames';
import Styles from './File.module.scss';
import TruncateString from 'react-truncate-string';
import axios from 'axios';

const NewSingle = ({ name, label, error, accept, value, hideRemove, onDropRejected, ...props }) => {
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState(null);
  const handleDrop = (acceptedFiles) => {
    const { disableRequestTransformer, server, method, apiFileUpload, onResponse } = props;

    acceptedFiles.forEach((file) => {
      const formData = new FormData();
      if (file) {
        formData.append(name, file, file.fileName || file.name);
      }

      const httpRequest = disableRequestTransformer ? baseAuthRequest : authRequest;
      const req = httpRequest[method];
      // if (this.props.method === 'post') {
      //   req = authRequest.post;
      // }
      // if (this.props.method) {
      //   req = httpRequest[this.props.method];
      // }
      const config = {
        onUploadProgress: (progressEvent) => {
          const prog = parseInt((100.0 * progressEvent.loaded) / progressEvent.total, 10);
          setProgress(prog);
          setProgressLabel(prog === 100 ? 'Loading...' : `${prog}%`);
        },
      };

      const url = apiFileUpload || server;
      req(url, formData, config).then(
        (response) => {
          setProgress(0);
          setProgressLabel(null);
          if (onResponse) {
            onResponse(response);
          }
        },
        (error) => {
          // pass
        }
      );
    });
  };

  const handleRemove = (event) => {
    event.stopPropagation();
    const {
      disableRequestTransformer,
      server,
      method,
      apiFileRemove,
      apiFileUpload,
      onResponse,
      onFileRemovePayloadGenerate,
    } = props;

    const data = onFileRemovePayloadGenerate
      ? onFileRemovePayloadGenerate(name)
      : {
          [name]: null,
        };

    const httpRequest = disableRequestTransformer ? baseAuthRequest : authRequest;
    const req = httpRequest[method];

    // added apiFileUpload and server as api url fallback when apiFileRemove is not supplied
    const url = apiFileRemove || apiFileUpload || `${server}reset-picture/`;
    req(url, data).then(
      (response) => {
        if (onResponse) {
          onResponse(response);
        }
      },
      (error) => {
        // pass
      }
    );
  };

  const getName = (url) => {
    if (url) {
      const fileName = url.substring(url.lastIndexOf('/') + 1);
      const urlParts = fileName.split('?');
      return urlParts.shift();
    }
  };

  return (
    <Dropzone
      onDrop={handleDrop}
      accept={accept ? accept : ''}
      onDropRejected={onDropRejected}
      multiple={false}>
      {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => (
        <div
          className={classNames(
            Styles.newContainer,
            value && Styles.hasFile,
            isDragActive && Styles.dropIsActive,
            isDragAccept && Styles.dragAccept,
            isDragReject && Styles.dragReject
          )}
          {...getRootProps()}>
          <div className={classNames(Styles.progress)} style={{ width: `${progress}%` }} />

          <input {...getInputProps()} />
          <label htmlFor={name} className={classNames(Styles.label, error && Styles.error)}>
            {error || label}
          </label>
          {/*<div className={classNames(Styles.drop)}>
            <div className={Styles.placeholder}>
              <span>{progressLabel || label}</span>
            </div>
          </div>*/}
          <div className={classNames(Styles.file)}>
            <div className={Styles.fileName}>
              <TruncateString text={progressLabel || getName(value)} />
              {!hideRemove && (
                <div className={Styles.fileRemove} onClick={handleRemove}>
                  <div className={Styles.removeCross}>
                    <svg
                      width='26'
                      height='26'
                      viewBox='0 0 26 26'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z'
                        fill='currentColor'
                        fillRule='nonzero'
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={Styles.newAddButton} onClick={(e) => e.stopPropagation()}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Button type={Button.Type.LIGHT_GRAY}>{`Browse`}</Button>
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

NewSingle.propTypes = {
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
  disableRequestTransformer: PropTypes.bool,
  apiFileUpload: PropTypes.string,
  apiFileRemove: PropTypes.string,
  onFileRemovePayloadGenerate: PropTypes.func,
};

NewSingle.defaultProps = {
  hideRemove: false,
  method: 'put',
  disableRequestTransformer: false,
};

export default NewSingle;
