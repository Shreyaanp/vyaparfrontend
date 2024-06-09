import React, { useState } from 'react';
import styles from './FrameComponent2.module.css';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='login-form'>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={formData.showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="showPassword"
            name="showPassword"
            checked={formData.showPassword}
            onChange={handleChange}
          />
          <label htmlFor="showPassword">Show password</label>
        </div>
        <div className={styles.submitButtonWrapper}>
          <button type='submit' className={styles.button}>
            <div className={styles.iconsParent}>
              <img className={styles.icons1} alt="" src="/icons1.svg" />
              <div className={styles.signUp}>Log in</div>
            </div>
          </button>
        </div>
      </form>
      <div className={styles.submitButtonContainerWrapper}>
        <div className={styles.submitButtonContainer}>
          <div className={styles.socialOptionsContainerParent}>
            <div className={styles.socialOptionsContainer}>
              <div className={styles.socialDivider}>
                <div className={styles.socialDividerInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.or}> Or</div>
                <div className={styles.socialDividerChild}>
                  <div className={styles.frameItem} />
                </div>
              </div>
            </div>
            <div className={styles.socialButtons}>
              <button className={styles.button1}>
                <div className={styles.button2}>
                  <div className={styles.content}>
                    <img
                      className={styles.googleIcon}
                      alt=""
                      src="/google.svg"
                    />
                    <div className={styles.label}>Google</div>
                  </div>
                </div>
              </button>
              <div className={styles.button3}>
                <div className={styles.button4}>
                  <div className={styles.content1}>
                    <img
                      className={styles.biappleIcon}
                      loading="lazy"
                      alt=""
                      src="/biapple.svg"
                    />
                    <div className={styles.label2}>Apple ID</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
