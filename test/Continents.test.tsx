import TestRenderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import Continents, { continentsQuery } from '../pages/Continents';

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: continentsQuery,
      variables: {},
    },
    result: {
      data: [],
    },
  },
];

it('renders without error', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Continents continents={mocks} />
    </MockedProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
