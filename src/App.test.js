import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './TeamSignUp';
import {RequiredInput, PasswordConfirmationInput} from './TeamSignUp';
import {shallow, render} from 'enzyme';
import sinon from 'sinon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpForm />, div);
});


// Email Address tests


// Name field test


// Birthday field tests


// The password and password confirmation fields
describe('Password and Password Confirmation Check', () => {
  it('should render properly', () => {
    const passwordWrapper = render(<RequiredInput value="" errorMessage="password can't be blank" />);
    const passwordConfirmWrapper = shallow(<PasswordConfirmationInput/>);
    expect(passwordWrapper.find('p').text()).toEqual("password can't be blank");
    expect(passwordConfirmWrapper.find('p'));
  })

  it('should validate password creation and confirmation correctly', () => {
    const passwordSpy = sinon.spy(); //spy for validate method
    const passwordConfirmSpy = sinon.spy();
    const passwordWrapper = shallow(<RequiredInput updateParent={passwordSpy}/>);
    const passwordConfirmWrapper = shallow(<PasswordConfirmationInput updateParent={passwordConfirmSpy}/>);
    passwordWrapper.find('input').simulate('change',{target:{value:'Mix'}});
    passwordConfirmWrapper.setProps({password: 'Mix'});
    passwordConfirmWrapper.find('input').simulate('change',{target:{value:'Max'}});
    expect(passwordSpy.getCall(0).args[0]).toEqual({"undefined": {"valid": true, "value": "Mix"}});
    expect(passwordConfirmSpy.getCall(0).args[0]).toEqual({"passwordConf": {"valid": false, "value": "Max"}});
    passwordConfirmWrapper.find('input').simulate('change',{target:{value:'Mix'}});
    passwordWrapper.find('input').simulate('change',{target:{value:''}});
    expect(passwordSpy.getCall(1).args[0]).toEqual({"undefined": {"valid": false, "value": ""}});
    expect(passwordConfirmSpy.getCall(1).args[0]).toEqual({"passwordConf": {"valid": true, "value": "Mix"}});
  })

})

// Form Reset Tests


// Form Submit tests

describe('submit-button', () => {
  it('should enable button when all fields are valid', () => {
    const wrapper = shallow(<button />).simulate('click');
    expect(wrapper.find('button').props().disabled).toEqual(false);
  });

  it('should check that a submit message is displayed', () => {
    const wrapper = shallow(<button />).simulate('click');
    expect(wrapper.find('button').text()).toEqual('Submitted!');


  });
});

