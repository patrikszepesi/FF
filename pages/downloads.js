import React from 'react';
import DownloadsView from '../src/views/DownloadsView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const Downloads = () => {
  return (
    <WithLayout
      component={DownloadsView}
      layout={Main}
    />
  )
};

export default Downloads;
