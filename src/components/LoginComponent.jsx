import LoginTextField from "./LoginTextField";  
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";
import { useNavigate } from 'react-router-dom';

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();
  return (
    <form className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.Loginparent}>
          <div className={styles.createAnAccount}>Login To your Account</div>
          <div className={styles.haveAnAccountLogin}>
            <div className={styles.alreadyHaveAnContainer}>
              <span className={styles.alreadyHaveAn}>
                Dont have an account?
              </span>
              <span className={styles.gotoLogin}
              onClick={() => {
                
                navigate('/form-register');


              }
              }
              > &nbsp; register</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.emailInputContainerParent}>
        <LoginTextField/>
      </div>

    </form>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
