import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='star' />
      <div className='flex-row-ccb'>
        <span className='hi-welcome'>Hi, Welcome!</span>
        <div className='image' />
      </div>
      <div className='input'>
        <span className='title'>Email address</span>
        <div className='input-field'>
          <input className='input-1' />
          <span className='email-input'>Your email</span>
        </div>
      </div>
      <div className='input-field-2'>
        <span className='password-title'>Password</span>
        <div className='password-input'>
          <input className='input-3' />
          <span className='password-text'>Password</span>
          <div className='icon'>
            <div className='eye' />
          </div>
        </div>
      </div>
      <div className='flex-row-e'>
        <div className='checkbox-on' />
        <span className='remember-me'>Remember me</span>
        <span className='forgot-password'>Forgot password?</span>
      </div>
      <button className='button-primary'>
        <span className='button'>Log in</span>
      </button>
      <div className='flex-row-fdc'>
        <span className='or-with'>Or with</span>
        <div className='line' />
        <div className='line-4' />
      </div>
      <div className='flex-row-bb'>
        <button className='button-centered-icon'>
          <div className='frame'>
            <div className='social-icon-facebook'>
              <div className='vector' />
            </div>
            <span className='google'>Facebook</span>
          </div>
        </button>
        <button className='button-centered-icon-5'>
          <div className='frame-6'>
            <div className='social-icon-google'>
              <div className='google-logo' />
            </div>
            <span className='google-7'>Google</span>
          </div>
        </button>
      </div>
      <div className='sign-up-section'>
        <span className='dont-have-account'>Don’t have an account?</span>
        <span className='empty-space'> </span>
        <span className='sign-up'>Sign up</span>
      </div>
    </div>
  );
}
