import React,{useState} from 'react'
import img1 from '../../assets/images/slider1.svg'
import img2 from '../../assets/images/slider2.svg'
import img3 from '../../assets/images/slider3.svg'
// import logo from '../../assets/images/command-symbol-svgrepo-com.svg'
import logo from '../../assets/images/logo1.png'
import { Link } from 'react-router-dom'



export default function VerifyEmail() {


  return (
    <div className=''>
        <div className="auth">
            <div className="auth_left">
            <div className="card">
                <div className="text-center mb-2">
                    <div className="header-brand">
                    <img src={logo} alt="" className='avatar-sml logo-login'/>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-title mb-2">VERIFY EMAIL</div>
                    <p className="text-muted">
                    Enter your email address.
                    </p>
                    <div className="form-group mb-3">
                    <label className="form-label" htmlFor="exampleInputEmail1">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
            
                    />
                    </div>
                    

                    <Link to="/verify">
                        <div className="form-footer d-grid mt-3">
                        <button className="btn btn-top btn-primary btn-block">
                        Submit
                        </button>
                        </div>
                    </Link>
                    
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
