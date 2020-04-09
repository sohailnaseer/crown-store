import React from 'react';
import FormInput from './../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from './../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = async (event) => {
    const { name, value } = event.target;

    const { email, password } = this.state;

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log('Some Error Occurred', error);
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I Already Have An Account</h2>
        <span>Sign In With Your Email And Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='Password'
          />
          <div className='buttons'>
            <CustomButton>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} signInWithGoogle>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
