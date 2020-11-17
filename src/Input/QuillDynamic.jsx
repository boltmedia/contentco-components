import React from 'react';
import dynamic from 'next/dynamic';
import { Loader } from 'contentco-components';
const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <Loader />,
});

export default QuillNoSSRWrapper;
