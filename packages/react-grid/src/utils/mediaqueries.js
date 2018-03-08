import React, { Component } from 'react';
import alt from '../stores/alt';

function mediaqueries(Wrapped) {
  class Mediaqueries extends Component {
    static propTypes = {
      breakpoints: PropTypes.array,
    }
    
    static defaultProps = {
      breakpoints: [
        320,
        440,
        768,
        1024,
        1440
      ],
    }
    
    state = {
      active: null,
    }
    
    mediaqueries = [];

    componentDidMount() {
      this.mediaqueries = this.props.breakpoints.map((bp) => {
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
        <Wrapped
          {...this.props}
          {...this.state}
          mediaqueries={this.mediaqueries}
        />
      );
    }
  }

  Mediaqueries.displayName = `Mediaqueries(${Wrapped.displayName || Wrapped.name})`;

  return Mediaqueries;
}

export default mediaqueries;
