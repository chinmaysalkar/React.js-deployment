import React,{useState} from 'react'
import img1 from '../../assets/images/slider1.svg';
import img2 from '../../assets/images/slider2.svg';
import img3 from '../../assets/images/slider3.svg';
import logo from '../../assets/images/command-symbol-svgrepo-com.svg'
import { Link } from 'react-router-dom'; 

export default function Login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className='pagewidth'>
        <div className="loginpage">
            <div className="auth row">
                <div className="auth_left">
                    <div className="card">
                        <div className="text-center mb-2">
                            <a className="header-brand" href="/">
                                <img src={logo} alt="" className='avatar-sml logo-login'/>
                            </a>
                        </div>
                        <div className="card-body">
                            <div className="card-title">LOGIN TO YOUR ACCOUNT</div>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3 mt-3">
                                <select className="form-select">
                                    <option>HR Dashboard</option>
                                    <option>Project Dashboard</option>
                                    <option>Job Portal</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmailChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label d-flex justify-content-between">
                                Password
                                <a className="float-right small text-secondary mx-2" href="/forgotpassword">
                                    I forgot password
                                </a>
                                </label>
                                <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                />
                                <span className="custom-control-label mx-2">Remember me</span>
                                </label>
                            </div>
                            <div className="form-footer d-grid">
                                <button type="submit" className="btn btn-primary btn-block btn-top">
                                Click to login
                                </button>
                            </div>
                            </form>
                        </div>
                        <div className="text-center text-muted">
                            Don't have an account yet? <Link to="/register">Sign Up</Link>
                        </div>
                    </div>
                </div>

                <div className="auth_right">
                    <div className="carousel slide" data-ride="carousel" data-interval="3000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={img1} className="img-fluid" alt="login page" />
                            <div className="px-4 mt-4">
                                <h4>Fully Responsive</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={img2} className="img-fluid" alt="login page" />
                            <div className="px-4 mt-4">
                                <h4>Quality Code and Easy Customizability</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={img3} className="img-fluid" alt="login page" />
                            <div className="px-4 mt-4">
                                <h4>Cross Browser Compatibility</h4>
                                <p>Overview We're a group of women who want to learn JavaScript.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
