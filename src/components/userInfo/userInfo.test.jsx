import React from 'react';
import { shallow } from 'enzyme';
import userInfo from './userInfo';

describe('Form component', () => {
  it('renders UserInfo', () => {
    const wrapper = shallow(<userInfo user={{
      name: 'Jaime Sanders',
      followers: 5,
      following: 3,
      html_url: 'http://github.com/jaimekinsley'
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
});

