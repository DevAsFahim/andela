import logo from './logo.svg';
import './App.css';
import formLogo from './assets/image/formLogo.png'
import formImg from './assets/image/formImg.png'

function App() {
  return (
    <div>
      <div className="form_container">
        <div className="form_left py-10">
          <img className='form-logo' src={formLogo} alt="" />
          <img className='form-img' src={formImg} alt="" />
          <div className="form_left_content text-center">
            <h2>Reliable jobs</h2>
            <p>We only work with trusted, vetted companies. Our team works globally to eliminate fraud or illegal activity, ensuring the jobs you apply for are safe and secure.</p>
          </div>
        </div>
        <div className="form_right">
        </div>
      </div>
    </div>
  );
}

export default App;
