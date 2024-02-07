import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSlack, faLinkedin, faTwitter, faDribbble, faPinterest, faSkype, faInstagram, faFlickr, faDropbox, faApple } from '@fortawesome/free-brands-svg-icons';
import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar2 from '../../../assets/images/avatar2.jpg'


const Clients = () => {
    const cardsData = [
        {
            avatar: avatar1,
            name: 'Michelle Green',
            email: 'jason-porter@info.com',
            socialMedia: [
                { icon: faFacebook, link: '/#' },
                { icon: faSlack, link: '/#' },
                { icon: faLinkedin, link: '/#' }
            ],
            projects: 7,
            dealAmount: 2510,
            ribbonText: 'New',
            ribbonColor: 'green'
        },

        {
            avatar: avatar2,
            name: 'David Wallace',
            email: 'Michelle@info.com',
            socialMedia: [
                { icon: faTwitter, link: '/#' },
                { icon: faDribbble, link: '/#' },
                { icon: faSlack, link: '/#' },
                { icon: faLinkedin, link: '/#' }
            ],
            projects: 14,
            dealAmount: 7510,
            ribbonText: 'India',
            ribbonColor: 'orange'
        },
        
    ];

    const Card = ({ avatar, name, email, socialMedia, projects, dealAmount, ribbonText, ribbonColor }) => (
        <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
            <div className="card">
                <div className="card-body text-center ribbon">
                    <div className={`ribbon-box ${ribbonColor}`}>{ribbonText}</div>
                    <img className="rounded-circle img-thumbnail w100" src={avatar} alt="fake_url" />
                    <h6 className="mt-3 mb-0">{name}</h6>
                    <span>{email}</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        {socialMedia.map((item, index) => (
                            <li key={index}>
                                <a className="p-3" target="_blank" href={item.link}>
                                    <FontAwesomeIcon icon={item.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-default btn-sm">View Profile</button>
                    <button className="btn btn-default btn-sm">Message</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                            <label className="mb-0">Project</label>
                            <h4 className="font-18">{projects}</h4>
                        </div>
                        <div className="col-lg-6">
                            <label className="mb-0">Deal</label>
                            <h4 className="font-18">${dealAmount}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="row">
            {cardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default Clients;
