'use client';

import { Circles } from 'react-loader-spinner';

const Loading = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#6c717b"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loading;
