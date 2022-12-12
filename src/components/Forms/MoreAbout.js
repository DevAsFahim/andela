import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";


const MoreAbout = () => {
    return (
        <div>
            <div className='input_field'>
                <label className="label">English proficiency</label>
                <div className="input">
                    <FaMapMarkerAlt className='icon'></FaMapMarkerAlt>
                    <select>
                        <option value="Select...">Select...</option>
                        <option value="Native">Native</option>
                        <option value="Advanced C1/C2">Advanced C1/C2</option>
                        <option value="Intermediate B1/B2">Intermediate B1/B2</option>
                        <option value="Beginner A1/A2">Beginner A1/A2</option>
                    </select>
                </div>
            </div>
            <div className='input_field'>
                <label className="label">Total years of work experience</label>
                <div className="input">
                    <FaMapMarkerAlt className='icon'></FaMapMarkerAlt>
                    <select>
                        <option value="Select...">Select...</option>
                        <option value="Associate (0-3 yrs professional experience)">0-3 yrs professional experience</option>
                        <option value="Mid Level (3-8 yrs professional experience)">3-8 yrs professional experience</option>
                        <option value="Senior (8-12 yrs professional experience)">8-12 yrs professional experience</option>
                        <option value="Principal (12+ yrs professional experience)">12+ yrs professional experience</option>
                    </select>
                </div>
            </div>
            <div className='input_field'>
                <label className="label">How did you hear about us? (optional)</label>
                <div className="input">
                    <FaMapMarkerAlt className='icon'></FaMapMarkerAlt>
                    <select>
                        <option value="Select...">Select...</option>
                        <option value="Job Posts">Job Posts</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Advertising">Advertising</option>
                        <option value="News">News</option>
                        <option value="Email">Email</option>
                        <option value="In-Person Event">In-Person Event</option>
                        <option value="Word of mouth">Word of mouth</option>
                        <option value="Referral by Andelan">Referral by Andelan</option>
                        <option value="Referral by Others">Referral by Others</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div className='input_field'>
                <label className="label">Upload your resume</label>
                <small className="ml-3 block" style={{fontSize: "10px", color: "rgb(247, 178, 79)"}}>Only PDF files are accepted</small> 
                <div className="input">
                    <input type="file" id='addResume' hidden/>
                    <label htmlFor="addResume" style={{width: "100%", color: "#000", textAlign: "center", height: "100%", cursor: "pointer"}}>Click to add file</label>
                </div>
            </div>
        </div>
    );
};

export default MoreAbout;