import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './TeamSignUp';
import {RequiredInput, PasswordConfirmationInput, EmailInput} from './TeamSignUp';
import {shallow, render} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpForm />, div);
});


// Email Address tests
describe('should get a valid email address input', () =>{

  it('show error if user left input box blank', () =>{
    const wrapper = shallow(<EmailInput value={''}/>);
    expect(wrapper.find('.error-missing').text()).toEqual('we need to know your email address');
    expect(wrapper.find('.error-missing').length).toEqual(1);
  })

  it('there is no error message showing up', () => {
    const wrapper = shallow(<EmailInput value={'something'} />);
    expect(wrapper.find('.error-missing').length).toEqual(0);
  })

  it('show error if users give a invalid emaill address', () =>{
    const wrapper = shallow(<EmailInput value={'123@.com'}/>);
    expect(wrapper.find('.error-invalid').length).toEqual(1);
    expect(wrapper.find('.error-invalid').text()).toEqual('this is not a valid email address');
  })

  it('get a valid email address', () => {
    const wrapper = shallow(<EmailInput value={'123@123.com'}/>);
    expect(wrapper.find('.error-missing').length).toEqual(0);
    expect(wrapper.find('.error-invalid').length).toEqual(0);
  })
})


// Name field test


// Birthday field tests


// The password and password confirmation fields
describe('Password and Password Confirmation Check', () => {
  it('should render properly', () => {
    const passwordWrapper = render(<RequiredInput value="" errorMessage="password can't be blank" />);
    const passwordConfirmWrapper = shallow(<PasswordConfirmationInput/>);
    //console.log(passwordWrapper.find('p').text());
    expect(passwordWrapper.find('p').text()).toEqual("password can't be blank");
    expect(passwordConfirmWrapper.find('p'));
  })
})


// Form Reset Tests


// Form Submit tests