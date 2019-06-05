import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import {questions} from './mocks/questions';
import {reducer} from './reducer';

const gameSettings = {
  gameTime: 5,
  errorCount: 1,
};

const init = (gameQuestions) => {
  const {errorCount, gameTime} = gameSettings;
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  ReactDOM.render(
      <Provider store={store}>
        <App
          maxMistakes={errorCount}
          gameTime={gameTime}
          questions={gameQuestions}
        />
      </Provider>,
      document.querySelector(`.main`)
  );
};

init(questions);
