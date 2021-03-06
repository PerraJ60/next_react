import TestRenderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
//import About from 'pages/About';
import About, { ResumeQuery } from '../pages/About';

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: ResumeQuery,
      variables: {},
    },
    result: {
      data: {
        products: [],
      },
    },
  },
];

it('renders without error', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <About />
    </MockedProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
