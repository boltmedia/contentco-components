import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '../Loader/Loader';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <Loader />,
});

export default QuillNoSSRWrapper;
