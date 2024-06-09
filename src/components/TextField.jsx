import React, { useState } from 'react';
import styles from "./FrameComponent2.module.css";
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/register', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='registration-form'>
          <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
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
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm your password</label>
        <input
          type={formData.showPassword ? 'text' : 'password'}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
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
                  <div className={styles.signUp}>Create an account</div>
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
                      <div className={styles.bage}>
                        <img
                          className={styles.arrowTopIcon}
                          alt=""
                          src="/arrow-top.svg"
                        />
                        <div className={styles.labelBody}>
                          <img
                            className={styles.arrowLeftIcon}
                            alt=""
                            src="/arrow-left.svg"
                          />
                          <div className={styles.labelTextIcon}>
                            <img
                              className={styles.warningIcon}
                              alt=""
                              src="/warning.svg"
                            />
                            <div className={styles.textspacer}>
                              <div className={styles.label1}>44</div>
                              <div className={styles.spacer2px} />
                            </div>
                          </div>
                          <img
                            className={styles.arrowRightIcon}
                            alt=""
                            src="/arrow-right.svg"
                          />
                        </div>
                        <img
                          className={styles.arrowBotIcon}
                          alt=""
                          src="/arrow-bot.svg"
                        />
                      </div>
                      <img
                        className={styles.warningIcon1}
                        alt=""
                        src="/warning1.svg"
                      />
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
                      <div className={styles.bage1}>
                        <img
                          className={styles.arrowTopIcon1}
                          alt=""
                          src="/arrow-top.svg"
                        />
                        <div className={styles.labelBody1}>
                          <img
                            className={styles.arrowLeftIcon1}
                            alt=""
                            src="/arrow-left.svg"
                          />
                          <div className={styles.labelTextIcon1}>
                            <img
                              className={styles.warningIcon2}
                              alt=""
                              src="/warning.svg"
                            />
                            <div className={styles.textspacer1}>
                              <div className={styles.label3}>44</div>
                              <div className={styles.spacer2px1} />
                            </div>
                          </div>
                          <img
                            className={styles.arrowRightIcon1}
                            alt=""
                            src="/arrow-right.svg"
                          />
                        </div>
                        <img
                          className={styles.arrowBotIcon1}
                          alt=""
                          src="/arrow-bot.svg"
                        />
                      </div>
                      <img
                        className={styles.warningIcon3}
                        alt=""
                        src="/warning1.svg"
                      />
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

export default RegistrationForm;
