import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckboxWithLabel from './CheckboxWithLabel';


configure({ adapter: new Adapter() });

test('CheckboxWithLabel changes the text after clicking', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="on" labelOff="off" />);
  expect(checkbox.text()).toEqual('off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('on');
});
