import React from 'react';
import propTypes from 'prop-types';

import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';

export const App = (props) => {
  const {gameTime, errorCount, onWelcomeButtonClick} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onWelcomeButtonClick={onWelcomeButtonClick}
  />;
};

App.propTypes = {
  gameTime: propTypes.number.isRequired,
  errorCount: propTypes.number.isRequired,
  onWelcomeButtonClick: propTypes.func.isRequired,
};
