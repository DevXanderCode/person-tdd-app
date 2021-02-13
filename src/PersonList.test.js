import React from 'react';
import { shallow } from 'enzyme';
import PersonList from './PersonList';

describe('PersonList', () => {
  it('', () => {
    const personListWrapper = shallow(<PersonList />);
    const peopleListUls = personListWrapper.find('ul');

    expect(peopleListUls).toHaveLength(1);
  });
});
