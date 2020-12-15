import TestRenderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import Products, { prodQuery } from '../pages/Products';

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: prodQuery,
      variables: {},
    },
    result: {
      data: {
        products: [],
      },
    },
  },
];

it('renders without error', async () => {
  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Products />
    </MockedProvider>
  );

  expect(getByText('loading...')).toBeInTheDocument();
});
