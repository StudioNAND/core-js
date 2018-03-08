import React from 'react';
import PropTypes from 'prop-types';
const Info = (props) => {
  return (
    <div
      style={{
        position:'fixed',
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(239,239,239)',
        padding: '5px 10px',
        fontFamily: 'monospace',
        fontSize: '14px',
        border: '1px solid rgb(157,157,157)',
        borderBottomColor: 'rgb(239,239,239)',
        pointerEvents: 'none',
      }}
    >
      {props.children}
    </div>
  );
}

Info.propTypes = {
  children: PropTypes.any.isRequired,
};


export default Info;
