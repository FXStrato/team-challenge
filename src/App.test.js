import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm, {RequiredInput, PasswordConfirmationInput, BirthdayInput, EmailInput} from './TeamSignUp';
import {shallow, render, mount} from 'enzyme';
import sinon from 'sinon';

it('renders without crashing', () => {
  const div = document.createElement('div'); 
  ReactDOM.render(<SignUpForm />, div);
});


// Email Address tests
describe('should get a valid email address input', () =>{

  it('show error if user left input box blank', () =>{
    const wrapper = shallow(<EmailInput value={''}/>);
    expect(wrapper.find('.error-missing').text()).toEqual('We need to know your email address');
    expect(wrapper.find('.error-missing').length).toEqual(1);
  })

  it('there is no error message showing up', () => {
    const wrapper = shallow(<EmailInput value={'something'} />);
    expect(wrapper.find('.error-missing').length).toEqual(0);
  })

  it('show error if users give a invalid emaill address', () =>{
    const wrapper = shallow(<EmailInput value={'123@.com'}/>);
    expect(wrapper.find('.error-invalid').length).toEqual(1);
    expect(wrapper.find('.error-invalid').text()).toEqual('This is not a valid email address');
  })

  it('get a valid email address', () => {
    const wrapper = shallow(<EmailInput value={'123@123.com'}/>);
    expect(wrapper.find('.error-missing').length).toEqual(0);
    expect(wrapper.find('.error-invalid').length).toEqual(0);
  })
})


// Name field test
describe('name-field-input', () => {
  it('should check that error message for name is displayed', () => {
    const wrapper = shallow(<RequiredInput value="" errorMessage="we need to know your name" />);
    expect(wrapper.find('p').text ()).toEqual('we need to know your name');
  });
});

// Birthday field tests
describe('<BirthdayInput /> component', () => {
  it('should have an invalid message for a birthday less than 13 years ago', () => {
    const wrapper = shallow(<BirthdayInput value="02/27/2016"/>);
    expect(wrapper.find('.error-not-old').length).toEqual(1);
  });

  it('should have an invalid message for a birthday that does not fit proper date syntax',() => {
    const wrapper = shallow(<BirthdayInput value="not/right/syntax"/>);
    expect(wrapper.find('.error-invalid').length).toEqual(1);
  });

  it('should have an invalid message for a birthday that has no text',() => {
    const wrapper = shallow(<BirthdayInput value=""/>);
    expect(wrapper.find('.error-missing').length).toEqual(1);
  });

  it('should not have a message if the birthday is valid',() => {
    const wrapper = shallow(<BirthdayInput value="02/27/2016"/>);
    expect(wrapper.find('alert-danger').length).toEqual(0);
  });
});

// The password and password confirmation fields
describe('Password and Password Confirmation Check', () => {
  it('should render properly', () => {
    const passwordWrapper = shallow(<RequiredInput value="" errorMessage="password can't be blank" />);
    const passwordConfirmWrapper = shallow(<PasswordConfirmationInput/>);
    expect(passwordWrapper.find('p').text()).toEqual("password can't be blank");
    expect(passwordConfirmWrapper.find('p'));
  });

  it('should validate password creation and confirmation correctly', () => {
    const passwordSpy = sinon.spy(); //spy for validate method
    const passwordWrapper = shallow(<RequiredInput updateParent={passwordSpy}/>);
    const passwordConfirmWrapper = shallow(<PasswordConfirmationInput updateParent={passwordSpy}/>);
    passwordWrapper.find('input').simulate('change',{target:{value:'Mix'}});
    passwordConfirmWrapper.setProps({password: 'Mix'});
    passwordConfirmWrapper.find('input').simulate('change',{target:{value:'Max'}});
    expect(passwordSpy.getCall(0).args[0]).toEqual({"undefined": {"valid": true, "value": "Mix"}});
    expect(passwordSpy.getCall(1).args[0]).toEqual({"passwordConf": {"valid": false, "value": "Max"}});
    passwordWrapper.find('input').simulate('change',{target:{value:''}});
    passwordConfirmWrapper.find('input').simulate('change',{target:{value:'Mix'}});
    expect(passwordSpy.getCall(2).args[0]).toEqual({"undefined": {"valid": false, "value": ""}});
    expect(passwordSpy.getCall(3).args[0]).toEqual({"passwordConf": {"valid": true, "value": "Mix"}});
  })

});

// Form Reset Tests


// Form Submit tests
describe('submit-button', () => {
  it('enable button should be initally disabled', () => {
    const wrapper = mount(<SignUpForm/>);
    const button = wrapper.find('#submitButton');
    expect(button.props().disabled).toEqual(true);
  });

  it('should enable button when all fields are valid', () => {
    const wrapper = mount(<SignUpForm/>);
    const button = wrapper.find('#submitButton');
    wrapper.find('#email').simulate('change',{target:{value:"a@gmail.com"}});
    wrapper.find('#name').simulate('change',{target:{value:"aaaaaaaaa"}});
    wrapper.find('#dob').simulate('change',{target:{value:"12/12/2000"}});
    wrapper.find('#password').simulate('change',{target:{value:"a"}});
    wrapper.find('#passwordConf').simulate('change',{target:{value:"a"}});
    expect(button.props().disabled).toEqual(false);
  })

});

