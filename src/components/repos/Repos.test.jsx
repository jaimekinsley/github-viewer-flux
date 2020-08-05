import React from 'react';
import { mount } from 'enzyme';
import Repos from './Repos';
import AppProvider from '../../providers/AppProvider';

describe('Repos component', () => {
  it('renders Repos', () => {
    const wrapper = mount(<AppProvider><Repos /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
