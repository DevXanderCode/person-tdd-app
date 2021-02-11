// import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

// it('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('renders without crashing', () => {
    const appWrapper = shallow(<App />);
  });
});
