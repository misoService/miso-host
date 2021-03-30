import React from 'react';
import { Helmet } from 'react-helmet';

const TopMeta = ({
  title,
  description,
}) => {
  return (
    <div className="application">
      <Helmet>
        <title>
          {title}
        </title>
        <meta name="description" content={description} />
      </Helmet>
    </div>
  );
};

 export default TopMeta;
