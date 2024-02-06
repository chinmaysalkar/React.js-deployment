import React, {useState} from 'react'
import img1 from '../../assets/images/slider1.svg'
import img2 from '../../assets/images/slider2.svg'
import img3 from '../../assets/images/slider3.svg'
import logo from '../../assets/images/command-symbol-svgrepo-com.svg'
import { Link } from 'react-router-dom'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleAgreeTermsChange = () => setAgreeTerms(!agreeTerms);

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };
  return (
    <div className='pagewidth'>
        <div className="auth">
            <div className="auth_left">
                <div className="card p-4">
                <div className="text-center mb-5">
                    <a className="header-brand" href="/">
                    <img src={logo} alt="" className='avatar-sml logo-login'/>
                    </a>
                </div>
                <div className="card-body">
                    <div className="card-title">CREATE NEW ACCOUNT</div>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label className="form-label">Name</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        value={name}
                        onChange={handleNameChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Email address</label>
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Password</label>
                        <input
                        type="password"
                        className="form-control"
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
                            checked={agreeTerms}
                            onChange={handleAgreeTermsChange}
                        />
                        <span className="custom-control-label mx-2">
                            Agree the <a href="/#">terms and policy</a>
                        </span>
                        </label>
                    </div>
                    
                    <Link to="/verifyemail">
                    <div className="form-footer d-grid">
                        <button type="submit" className="btn btn-primary btn-block btn-top">
                        Click new account
                        </button>
                    </div>
                    </Link>
                    
                    </form>
                </div>
                <div className="text-center text-muted">
                    Already have an account? <Link to="/login">Sign In</Link>
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
  )
}
