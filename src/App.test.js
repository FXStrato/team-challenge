import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm, {RequiredInput} from './TeamSignUp';
import {shallow, render} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpForm />, div);
});


// Email Address tests


// Name field test

describe('name-field-input', () => {
  it('should check that error message for name is displayed', () => {
    const wrapper = shallow(<RequiredInput value="" errorMessage="we need to know your name" />);
    expect(wrapper.find('p').text ()).toEqual('we need to know your name');
  });
});

// Birthday field tests


// The password and password confirmation fields


// Form Reset Tests


// Form Submit tests

