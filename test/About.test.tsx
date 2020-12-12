import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
//import About from 'pages/About';
import About, { ResumeQuery } from '../pages/About';

const mocks = [];

it('renders without error', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <About />
    </MockedProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
