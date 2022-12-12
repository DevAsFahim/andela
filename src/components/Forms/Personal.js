import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

const Personal = () => {
    return (
        <div>
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
            <div className='checkbox'>
                <input type="checkbox" required /> <span>I agree to Andela's <a className='text-black' href='/'>Terms & Conditions</a></span>
            </div>
            <div className='checkbox'>
                <input type="checkbox" required /> <span> I understand that Andela will process my information in accordance with their <a className='text-black' href='/'>Privacy Policy</a>. I may withdraw my consent through unsubscribe links at any time.</span>
            </div>
        </div>
    );
};

export default Personal;