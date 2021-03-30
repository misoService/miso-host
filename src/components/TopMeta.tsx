import React from 'react';
import { Helmet } from 'react-helmet';

const TopMeta = props => {
  return (
    <div className="application">
      <Helmet>
        <title>
          MisoHost - １時間から使えるゲームサーバー
        </title>
        <meta name="description" content="MisoHostは身内サーバーに最適！１時間から利用可能。サーバーの利用、操作も全てブラウザで完結！困った時のQ&Aやお問い合わせフォームも利用できます。" />
      </Helmet>
    </div>
  );
};

 export default TopMeta;
