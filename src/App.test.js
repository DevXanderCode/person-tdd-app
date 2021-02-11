// import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import PersonList from './PersonList';

// it('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('renders without crashing', () => {
    const appWrapper = shallow(<App />);
  });

  it('renders a person list', () => {
    const appWrapper = shallow(<App />);
    const personList = appWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });

  it('has State', () => {
    const appWrapper = shallow(<App />);
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  });
});
