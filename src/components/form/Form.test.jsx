import React from 'react';
import { mount } from 'enzyme';
import Form from './Form';
import AppProvider from '../../providers/AppProvider';

describe('Form component', () => {
  it('renders Form', () => {
    const wrapper = mount(<AppProvider><Form /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
