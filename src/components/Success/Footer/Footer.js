import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from '../../../assets/image/formLogo.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_inner">
                <div className="widget_block">
                    <div className="nav_logo mb-14">
                        <img src={logo} alt="" />
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <FaFacebook></FaFacebook>
                        </div>
                        <div className="icon">
                            <FaTwitter></FaTwitter>
                        </div>
                        <div className="icon">
                            <FaGithub></FaGithub>
                        </div>
                        <div className="icon">
                            <FaInstagram></FaInstagram>
                        </div>
                        <div className="icon">
                            <FaYoutube></FaYoutube>
                        </div>
                        <div className="icon">
                            <FaLinkedin></FaLinkedin>
                        </div>
                    </div>
                </div>
                <div className="widget_block">
                    <h5 className="widget_title font-bold">Discover Talent</h5>
                    <ul>
                        <li><Link>For Companies</Link></li>
                        <li><Link>Enterprise</Link></li>
                        <li><Link>Case studies</Link></li>
                    </ul>
                </div>
                <div className="widget_block">
                    <h5 className="widget_title font-bold">Find Work</h5>
                    <ul>
                        <li><Link>For Technologists</Link></li>
                        <li><Link>Learning Community</Link></li>
                        <li><Link>Leadership Program</Link></li>
                        <li><Link>Resources</Link></li>
                    </ul>
                </div>
                <div className="widget_block">
                    <h5 className="widget_title font-bold">Andela</h5>
                    <ul>
                        <li><Link>About us</Link></li>
                        <li><Link>Events</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Press Center</Link></li>
                        <li><Link>Careers</Link></li>
                    </ul>
                </div>
                <div className="widget_block">
                    <ul>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Terms and Conditions</Link></li>
                        <li><Link>Modern Slavery Statement</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;