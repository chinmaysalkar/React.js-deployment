import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import avatar1 from '../../assets/images/avatar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSlack, faLinkedin, faInstagram, faFlickr, faDropbox, faApple, faPinterest, faSkype, faDribbble, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function ProjectClients() {
  return (
    <div className='pagewidth px-3'>
        <Header/>

        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="row">
                                
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="input-group mx-2">
                                    <input type="text" className="form-control" placeholder="Client Name" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="input-group mx-2">
                                    <input type="text" className="form-control" placeholder="Project" />
                                    </div>
                                </div>
                            
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <Link to="fake_url" className="btn btn-sm btn-primary btn-block btn-top mx-2">
                                    Search
                                    </Link>

                                    <Link to="fake_url" className="btn btn-sm btn-primary btn-block  btn-top">
                                    Add New
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
                <div className="card">
                    <div className="card-body text-center ribbon">
                    <div className="ribbon-box green">New</div>
                    <img
                        className="rounded-circle img-thumbnail w100"
                        src={avatar1}
                        alt="fake_url"
                    />
                    <h6 className="mt-3 mb-0">Michelle Green</h6>
                    <span>jason-porter@info.com</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faFacebook} />
                            
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faSlack} />
                            <i className="fa fa-slack"></i>
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faLinkedin} />
                            <i className="fa fa-linkedin"></i>
                        </a>
                        </li>
                    </ul>
                    <button className="btn btn-default btn-sm">View Profile</button>
                    <button className="btn btn-default btn-sm">Message</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                        <label className="mb-0">Project</label>
                        <h4 className="font-18">07</h4>
                        </div>
                        <div className="col-lg-6">
                        <label className="mb-0">Deal</label>
                        <h4 className="font-18">$2,510</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
                <div className="card">
                    <div className="card-body text-center ribbon">
                    <div className="ribbon-box orange">India</div>
                    <img
                        className="rounded-circle img-thumbnail w100"
                        src={avatar1}
                        alt="fake_url"
                    />
                    <h6 className="mt-3 mb-0">David Wallace</h6>
                    <span>Michelle@info.com</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faDribbble} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faSlack} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        </li>
                    </ul>
                    <button className="btn btn-default btn-sm">View Profile</button>
                    <button className="btn btn-default btn-sm">Message</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                        <label className="mb-0">Project</label>
                        <h4 className="font-18">14</h4>
                        </div>
                        <div className="col-lg-6">
                        <label className="mb-0">Deal</label>
                        <h4 className="font-18">$7,510</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
                <div className="card">
                    <div className="card-body text-center ribbon">
                    {/* <div className="ribbon-box indigo">India</div> */}
                    <img
                        className="rounded-circle img-thumbnail w100"
                        src={avatar1}
                        alt="fake_url"
                    />
                    <h6 className="mt-3 mb-0">David Wallace</h6>
                    <span>Michelle@info.com</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faSlack} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        </li>
                        
                    </ul>
                    <button className="btn btn-default btn-sm">View Profile</button>
                    <button className="btn btn-default btn-sm">Message</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                        <label className="mb-0">Project</label>
                        <h4 className="font-18">14</h4>
                        </div>
                        <div className="col-lg-6">
                        <label className="mb-0">Deal</label>
                        <h4 className="font-18">$7,510</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
                <div className="card">
                    <div className="card-body text-center ribbon">
                    {/* <div className="ribbon-box indigo">India</div> */}
                    <img
                        className="rounded-circle img-thumbnail w100"
                        src={avatar1}
                        alt="fake_url"
                    />
                    <h6 className="mt-3 mb-0">David Wallace</h6>
                    <span>Michelle@info.com</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faPinterest} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        </li>
                        
                    </ul>
                    <button className="btn btn-default btn-sm">View Profile</button>
                    <button className="btn btn-default btn-sm">Message</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                        <label className="mb-0">Project</label>
                        <h4 className="font-18">14</h4>
                        </div>
                        <div className="col-lg-6">
                        <label className="mb-0">Deal</label>
                        <h4 className="font-18">$7,510</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
                <div className="card">
                    <div className="card-body text-center ribbon">
                    <div className="ribbon-box indigo">Gold</div>
                    <img
                        className="rounded-circle img-thumbnail w100"
                        src={avatar1}
                        alt="fake_url"
                    />
                    <h6 className="mt-3 mb-0">Michelle Green</h6>
                    <span>jason-porter@info.com</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faSlack} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        </li>
                       
                    </ul>
                    <button className="btn btn-default btn-sm">View Profile</button>
                    <button className="btn btn-default btn-sm">Message</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                        <label className="mb-0">Project</label>
                        <h4 className="font-18">31</h4>
                        </div>
                        <div className="col-lg-6">
                        <label className="mb-0">Deal</label>
                        <h4 className="font-18">$45,510</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
                <div className="card">
                    <div className="card-body text-center ribbon">
                    {/* <div className="ribbon-box indigo">Gold</div> */}
                    <img
                        className="rounded-circle img-thumbnail w100"
                        src={avatar1}
                        alt="fake_url"
                    />
                    <h6 className="mt-3 mb-0">Michelle Green</h6>
                    <span>jason-porter@info.com</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faSlack} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        </li>
                        
                    </ul>
                    <button className="btn btn-default btn-sm">View Profile</button>
                    <button className="btn btn-default btn-sm">Message</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                        <label className="mb-0">Project</label>
                        <h4 className="font-18">31</h4>
                        </div>
                        <div className="col-lg-6">
                        <label className="mb-0">Deal</label>
                        <h4 className="font-18">$45,510</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
                <div className="card">
                    <div className="card-body text-center ribbon">
                    <div className="ribbon-box pink">USA</div>
                    <img
                        className="rounded-circle img-thumbnail w100"
                        src={avatar1}
                        alt="fake_url"
                    />
                    <h6 className="mt-3 mb-0">Jason Porter</h6>
                    <span>Carol@info.com</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faSkype} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faDribbble} />
                        </a>
                        </li>
                        
                    </ul>
                    <button className="btn btn-default btn-sm">View Profile</button>
                    <button className="btn btn-default btn-sm">Message</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                        <label className="mb-0">Project</label>
                        <h4 className="font-18">22</h4>
                        </div>
                        <div className="col-lg-6">
                        <label className="mb-0">Deal</label>
                        <h4 className="font-18">$12,510</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
                <div className="card">
                    <div className="card-body text-center ribbon">
                    {/* <div className="ribbon-box indigo">India</div> */}
                    <img
                        className="rounded-circle img-thumbnail w100"
                        src={avatar1}
                        alt="fake_url"
                    />
                    <h6 className="mt-3 mb-0">David Wallace</h6>
                    <span>Michelle@info.com</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faFlickr} />
                            
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faDropbox} />
                            
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faApple} />
                            
                        </a>
                        </li>
                        <li>
                        <a className="p-3" target="_blank" href="/#">
                        <FontAwesomeIcon icon={faPinterest} />
                           
                        </a>
                        </li>
                    </ul>
                    <button className="btn btn-default btn-sm">View Profile</button>
                    <button className="btn btn-default btn-sm">Message</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                        <label className="mb-0">Project</label>
                        <h4 className="font-18">12</h4>
                        </div>
                        <div className="col-lg-6">
                        <label className="mb-0">Deal</label>
                        <h4 className="font-18">$1,810</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>           
        </div>

        <Footer/>
    </div>
  )
}
