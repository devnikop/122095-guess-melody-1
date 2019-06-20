import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {ArtistQuestionScreen} from './artist-question-screen';
import {Type} from '../../types';

const mock = {
  question: {
    type: Type.ARTIST,
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
      renderAnswer={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
