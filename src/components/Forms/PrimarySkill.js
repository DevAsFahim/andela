import React, { useState } from 'react';

const PrimarySkill = () => {
    const [xp, setXp] = useState('')

    return (
        <div>
            <div className='input_field' style={{ marginTop: "-35px" }}>
                <div className="input">
                    <select>
                        <option value="Select ...">Select ...</option>
                        <option value="[Javascript] React">[Javascript] React</option>
                        <option value="[Javascript] Angular">[Javascript] Angular</option>
                        <option value="[Javascript] Vue">[Javascript] Vue</option>
                        <option value="[Javascript] Node.js">[Javascript] Node.js</option>
                        <option value="[Cross-Platform] React Native">[Cross-Platform] React Native</option>
                        <option value="Python">Python</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Golang">Golang</option>
                        <option value="DevOps">DevOps</option>
                        <option value="DevOps (AWS)">DevOps (AWS)</option>
                        <option value="DevSecOps">DevSecOps</option>
                        <option value="Cloud Engineering">Cloud Engineering</option>
                        <option value="Cloud Engineering (AWS)">Cloud Engineering (AWS)</option>
                        <option value="SRE">SRE</option>
                        <option value="Java">Java</option>
                        <option value="C/Embedded">C/Embedded</option>
                        <option value="QA">QA</option>
                        <option value="Elixir">Elixir</option>
                        <option value="Scala">Scala</option>
                        <option value="PHP">PHP</option>
                        <option value=".NET">.NET</option>
                        <option value="iOS">iOs</option>
                        <option value="Android">Android</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Unity">Unity</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Data Engineering">Data Engineering</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Salesforce - Admin">Salesforce - Admin</option>
                        <option value="Salesforce - Architect">Salesforce - Architect</option>
                        <option value="Salesforce - BA/PM/PO">Salesforce - BA/PM/PO</option>
                        <option value="Salesforce - Commerce Cloud">Salesforce - Commerce Cloud</option>
                        <option value="Salesforce - Developer">Salesforce - Developer</option>
                        <option value="Salesforce - Marketer">Salesforce - Marketer</option>
                        <option value="Mulesoft">Mulesoft</option>
                        <option value="UX Writer">UX Writer</option>
                        <option value="UX Researcher">UX Researcher</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="UI(Visual) Designer">UI(Visual) Designer</option>
                        <option value="Interaction Designer">Interaction Designer</option>
                        <option value="Digital Project Manager">Digital Project Manager</option>
                        <option value="Technical Product Manager">Technical Product Manager</option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Product Owner">Product Owner</option>
                        <option value="Scrum Master">Scrum Master</option>
                    </select>
                </div>
            </div>
            <div className="experience">
                <div className="step_text">
                    <h4 style={{paddingTop: "13px"}}>Years of experience with this skill</h4>
                </div>
                <div className="experience_year flex flex-wrap justify-center items-center">
                    <div className="year">
                        <button className={`${xp === '<1 year' && "xp_border"}`} onClick={() => setXp('<1 year')}>&lt;1 year</button>
                    </div>
                    <div className="year">
                        <button className={`${xp === '1-2 years' && "xp_border"}`} onClick={() => setXp('1-2 years')}>1-2 years</button>
                    </div>
                    <div className="year">
                        <button className={`${xp === '3-5 years' && "xp_border"}`} onClick={() => setXp('3-5 years')}>3-5 years</button>
                    </div>
                    <div className="year">
                        <button className={`${xp === '6-10 years' && "xp_border"}`} onClick={() => setXp('6-10 years')}>6-10 years</button>
                    </div>
                    <div  className="year">
                        <button className={`${xp === '>10 years' && "xp_border"}`} onClick={() => setXp('>10 years')}>&gt;10 years</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrimarySkill;