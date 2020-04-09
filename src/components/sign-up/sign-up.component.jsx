import React from 'react';
import FormInput from '../form-input/form-input.component';

import { auth, createUserProfile } from './../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confPassword: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    const { displayName, email, password, confPassword } = this.state;

    event.preventDefault();

    if (password != confPassword) {
      alert('Password Do Not Match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confPassword: '',
      });
    } catch (error) {
      console.log('Some Error Occurred', error);
    }
  };

  render() {
    const { displayName, email, password, confPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I Do Not Have An Account</h2>
        <span>Sign Up With Your Email And Password</span>

        <form onSubmit={this.handleSubmit} className='sign-up-form'>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
          />

          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
          />

          <FormInput
            type='password'
            name='confPassword'
            value={confPassword}
            onChange={this.handleChange}
            label='Confirm Password'
          />
          <CustomButton>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
