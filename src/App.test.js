import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm, {BirthdayInput} from './TeamSignUp';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpForm />, div);
});


// Email Address tests


// Name field test


// Birthday field tests
describe('<BirthdayInput /> component', () => {

  it('should have an invalid message for a birthday less than 13 years ago', () => {
    const wrapper = shallow(<BirthdayInput value="02/27/2016"/>);
    expect(wrapper.find('.error-not-old').length).toEqual(1);
  });

  it('should have an invalid message for a birthday that does not fit proper date syntax',() => {

  });

  it('should have an invalid message for a birthday that has no text',() => {

  });

  it('should not have a message if the birthday is valid',() => {

  });

});

// The password and password confirmation fields


// Form Reset Tests


// Form Submit tests