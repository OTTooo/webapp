import React from 'react';
import { render } from 'react-dom';

// 引入公共样式
import './static/css/common.less';

import Hello from './containers/Hello';

render(
  <Hello />,
  document.getElementById('root')
)
