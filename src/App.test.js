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
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it('renders a person list', () => {
    const personList = appWrapper.find(PersonList);

    expect(personList).toHaveLength(1);
  });

  it('has State', () => {
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  });

  it('has a people property on app state', () => {
    const appState = appWrapper.state();

    expect(appState.people).toBeDefined();
  });

  it('passes people property of state to the personList compnnenent as prop', () => {
    const personList = appWrapper.find(PersonList);

    expect(personList.props().people).toEqual(appWrapper.state().people);
  });
});
