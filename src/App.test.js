import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './TeamSignUp';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpForm />, div);
});


// Email Address tests


// Name field test


// Birthday field tests


// The password and password confirmation fields


// Form Reset Tests


// Form Submit tests

describe('submit-button', () => {
  it('should enable button when all fields are valid', () => {

  });

  it('should check that a submit message is displayed', () => {
    const wrapper = shallow(<button />).simulate('click');
    expect(wrapper.find('button').text()).toEqual('Submitted!');
  });
});

