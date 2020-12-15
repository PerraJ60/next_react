import TestRenderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import Spacex, { launchesQuery } from '../pages/Spacex';

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: launchesQuery,
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
      <Spacex launches={mocks} />
    </MockedProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
