import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

class SignInForm extends Component {

  // static contextTypes= {
  //   router: PropTypes.object
  // };

  constructor(props, context){
    super(props);
    context.router // will work
  }

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
      // this.props.history.push('/');
      browserHistory.push('/');
    }

    //error
    //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
    //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
    // if(nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
    //   alert(nextProps.user.error.message);
    // }
  }

  render() {
    const {asyncValidating, fields: {email, password}, handleSubmit, submitting, user } = this.props;

    return (
      <div className="signin-area">
        <form onSubmit={handleSubmit(this.props.signInUser.bind(this))}>

          <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
            {/*<input  placeholder="email" type="text" className={`light-textbox ${email.error ? 'light-textbox-error': ''}`} {...email} />*/}
            <input  placeholder="email" type="text" className={`light-textbox`} {...email} />
          </div>


          <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
            <input type="password" placeholder="password" className={`light-textbox`} {...password} />
          </div>
          <button type="submit" className="button-primary-wide"  disabled={submitting} >Submit</button>
        </form>

      </div>

    );
  }
}

export default SignInForm;
