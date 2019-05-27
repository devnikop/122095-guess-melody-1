import React from 'react';
import renderer from 'react-test-renderer';

import {ArtistQuestionScreen} from './artist-question-screen.jsx';

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `path.mp3`,
    },
    answers: [
      {
        picture: `path.jpg`,
        artist: `John Snow`,
      },
      {
        picture: `path.jpg`,
        artist: `Jack Daniels`,
      },
      {
        picture: `path.jpg`,
        artist: `Jim Beam`,
      },
    ],
  }
};

it(`ArtistQuestionScreen correctly renders`, () => {
  const {
    question,
  } = mock;

  const tree = renderer
    .create(<ArtistQuestionScreen
      question={question}
      onAnswer={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
