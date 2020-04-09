import React, { Component } from 'react';
import './App.styles.scss';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfile } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: '',
    };
  }

  unsubsribedAuthChange = null;

  componentDidMount() {
    this.unsubsribedAuthChange = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth, {});

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: '' });
      }
    });
  }

  componentWillUnmount() {
    this.unsubsribedAuthChange();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
