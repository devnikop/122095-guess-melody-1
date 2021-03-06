import React from 'react';
import PropTypes from 'prop-types';

const MistakeScreen = (props) => {
  const {mistakes} = props;

  return (<div className="game__mistakes">
    {[...Array(mistakes)].map((it, i) =>
      <div className="wrong" key={`mistake${i}`}></div>
    )}
  </div>);
};

MistakeScreen.propTypes = {
  mistakes: PropTypes.number.isRequired
};

export default MistakeScreen;
