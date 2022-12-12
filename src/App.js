import logo from './logo.svg';
import './App.css';
import formLogo from './assets/image/formLogo.png'
import formImg from './assets/image/formImg.png'
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="form_container">
        <div className="form_left">
          <img className='form-logo' src={formLogo} alt="" />
          <img className='form-img' src={formImg} alt="" />
          <div className="form_left_content text-center">
            <h2>Reliable jobs</h2>
            <p>We only work with trusted, vetted companies. Our team works globally to eliminate fraud or illegal activity, ensuring the jobs you apply for are safe and secure.</p>
          </div>
        </div>
        <div className="form_right">

          <div className="form_content">
            <div className="step_text">
              <h4>Becoming a <span>part of our global community</span> has never been easier</h4>
            </div>
            <form>
              <div className='input_field'>
                <label className="label">First name</label>
                <div className="input">
                  <FaUserAlt className='icon'></FaUserAlt>
                  <input type="text" />
                </div>
              </div>
              <div className='input_field'>
                <label className="label">Last name</label>
                <div className="input">
                  <FaUserAlt className='icon'></FaUserAlt>
                  <input type="text" />
                </div>
              </div>
              <div className='input_field'>
                <label className="label">Email</label>
                <div className="input">
                  <FaEnvelope className='icon'></FaEnvelope>
                  <input type="email" />
                </div>
              </div>
              <div className='input_field'>
                <label className="label">Country</label>
                <div className="input">
                  <FaMapMarkerAlt className='icon'></FaMapMarkerAlt>
                  <select>
                    <option value="1">Bangladesh</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
