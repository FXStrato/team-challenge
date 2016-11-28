import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './TeamSignUp';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpForm />, div);
});
