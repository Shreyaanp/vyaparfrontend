import TextField from "./TextField";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";
import { useNavigate } from 'react-router-dom';

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();
  return (
    <form className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.createAnAccountParent}>
          <div className={styles.createAnAccount}>Create an account</div>
          <div className={styles.haveAnAccountLogin}>
            <div className={styles.alreadyHaveAnContainer}>
              <span className={styles.alreadyHaveAn}>
                Already have an account?
              </span>
              <span 
              onClick={
                () => {
                  navigate('/login');
                }
              }
              
              className={styles.gotoLogin}> &nbsp; Login</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.emailInputContainerParent}>
        <TextField/>
      </div>

    </form>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
