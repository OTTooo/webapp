import React from 'react';

import Header from '../../components/Header';
import Carousel from './subpage/Carousel';
import Recommend from './subpage/Recommend';
import List from './subpage/List';

class Hello extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      now: Date.now()
    };
  }
  render() {
    return (
      <div>
        <Header title="hello 页面" />
        <p onClick={this.clickHandler.bind(this)}>hello world {Date.now()}</p>
        <Carousel />
        <Recommend />
        <List />
      </div>
    )
  }
  clickHandler() {
    this.setState({
      now: Date.now()
    })
  }
}

export default Hello;
