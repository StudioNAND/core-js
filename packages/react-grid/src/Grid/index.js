import React, { Component, PropTypes } from 'react';

class Navigation extends Component { // eslint-disable-line
  static propTypes = {
    breakpoints: PropTypes.array,
  }
  static defaultProps = {
    breakpoints: [320, 440, 768, 1024, 1440],
  }
  state = {
    mqs: [],
    active: 0,
  }
  componentDidMount() {
    const mqs = this.props.breakpoints.map((bp) => {
      const mq = window.matchMedia(`(min-width: ${bp}px`);
      mq.addListener((mq) => {
        this.handleMQChange(bp, mq);
      })
      this.handleMQChange(bp, mq);
    });
  }
  handleMQChange = (bp, mq) => {
    this.setState({
      active: bp,
    });
  }
  render() {
    return (
      <div className={style.container}>
        asd
      </div>
    );
  }
}

export default Navigation;
