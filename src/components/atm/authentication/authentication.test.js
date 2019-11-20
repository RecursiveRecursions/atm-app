import React from 'react';
import { shallow } from 'enzyme';
import Authentication from './authentication';

describe('<Authentication />', () => {
  test('renders', () => {
    const wrapper = shallow(<Authentication />);
    expect(wrapper).toMatchSnapshot();
  });
});
