import React from 'react';
import { setTitle } from '../../common';
import { DisconnectOutlined } from '@ant-design/icons';
import './css.scss';

export default class NotFound extends React.Component {
  static defaultProps = {};

  componentDidMount() {
    setTitle('页面不存在');
  }

  render() {
    return (
      <div className={'page-not-found'}>
        <div className={'not-found-box'}>
          <DisconnectOutlined />
          <div className={'not-found-notice'}>您访问的页面不存在</div>
          <div className={'not-found-notice'}>Page Not Found</div>
        </div>
      </div>
    );
  }
}
