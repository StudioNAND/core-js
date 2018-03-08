import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Info from '../Info';

class Grid extends Component { // eslint-disable-line
  static propTypes = {
    breakpoints: PropTypes.array,
    debug: PropTypes.bool,
    styles: PropTypes.array,
    properties: PropTypes.array,
    classNames: PropTypes.array,
  }

  static defaultProps = {
    breakpoints: [320, 440, 768, 1024, 1440],
    styles: [],
    properties: [],
    classNames: [],
    false:true,
  }

  state = {
    active: 0,
  }

  mediaqueries = [];

  componentDidMount() {
    this.createMediaqueries();
  }

  createMediaqueries = () => {
    if (!global.window) return;
    const breakpoints = this.props.breakpoints;
    this.mediaqueries = breakpoints.map((bp, i) => {
      const next = breakpoints[i + 1];
      const queryString = `(min-width: ${bp}px) ${next ? `and (max-width: ${next - 1}px)` : ''}`;
      const mq = window.matchMedia(queryString);
      mq.addListener((mq) => {
        this.handleMQChange(bp, mq);
      })
      this.handleMQChange(bp, mq);
    });
  }

  handleMQChange = (bp, mq) => {
    if(mq.matches) {
      this.setState({
        active: bp,
      });
    }
  }

  get index() {
    const {
      breakpoints,
    } = this.props;
    const index = breakpoints.indexOf(this.state.active);
    console.log(index);
    if (index === -1) return breakpoints.length - 1;
    return index;
  }

  get breakpointProps() {
    const index = this.index;
    const matchProps = [
      'styles',
      'classNames',
    ];
    return {
      ...matchProps.reduce((props, name) => {
        const prop = this.props[name];
        const propIndex = index > prop.length - 1 ? prop.length - 1 : index;
        props[name.substring(0, name.length - 1)] = prop[propIndex];
        return props;
      }, {}),
      ...this.props['properties'][index],
    };
  }

  render() {
    const {
      debug,
    } = this.props;
    console.log(this.breakpointProps);
    return (
      <div {...this.breakpointProps}>
        {this.props.children}
        {
          debug &&
          <Info>
            {`breakpoint-${this.index}:${this.state.active}`}
          </Info> 
        }
      </div>
    );
  }
}

export default Grid;
