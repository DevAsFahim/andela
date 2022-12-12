import React from 'react';
import formLogo from '../../assets/image/formLogo.png'
import formImg from '../../assets/image/formImg.png'
import formImg2 from '../../assets/image/formImg2.png'
import formImg3 from '../../assets/image/formImg3.png'
import { useState } from 'react';
import Personal from '../Forms/Personal';
import PrimarySkill from '../Forms/PrimarySkill';
import MoreAbout from '../Forms/MoreAbout';
import { useNavigate } from 'react-router-dom';
import Success from '../Success/Success';

const Signup = () => {
    const [page, setPage] = useState(0);
    const navigate = useNavigate()
    if(page > 2) {
        navigate('/success')
    }

    const pageDisplay = () => {
        if (page === 0) {
            return <Personal></Personal>
        }
        if (page === 1) {
            return <PrimarySkill></PrimarySkill>
        }
        if (page === 2) {
            return <MoreAbout></MoreAbout>
        }
    }
    const formTitle = ["Becoming a <span>part of our global community</span> has never been easier", "Select your <span>primary</span> skill", "More about you"];

    function createMarkup(c) {
        return { __html: c };
    }

    return (
        <div>
            <div className="form_container">
                <div className="form_left">
                    <img className='form-logo' src={formLogo} alt="" />
                    <img className='form-img' src={page === 0 ? formImg : page === 1 ? formImg2 : formImg3} alt="" />
                    <div className="form_left_content text-center">
                        <h2>
                            {
                                page === 0 ?
                                    "Reliable jobs" :
                                    page === 1 ?
                                        'Work from anywhere' :
                                        'Fully supported'
                            }

                        </h2>
                        <p>
                            {
                                page === 0 ?
                                    "We only work with trusted, vetted companies. Our team works globally to eliminate fraud or illegal activity, ensuring the jobs you apply for are safe and secure." :
                                    page === 1 ?
                                        'Fully remote, forever. With remote roles across multiple time zones, you choose where and when you work, creating a healthy, flexible work-life balance.' :
                                        'Wherever you are and whatever issues you may face, we’re here to help solve any challenges, fast!'
                            }

                        </p>
                        <div className="dots flex justify-center items-center mt-5">
                            <div className={`dot ${page === 0 && "dot_active"}`}></div>
                            <div className={`dot ${page === 1 && "dot_active"}`}></div>
                            <div className={`dot ${page === 2 && "dot_active"}`}></div>
                            <div className={`dot`}></div>
                        </div>
                    </div>
                </div>
                <div className="form_right">

                    <div className="steps">
                        <div className={`step ${page >= 0 && "step_active"} `}></div>
                        <div className={`step ${page >= 1 && "step_active"} `}></div>
                        <div className={`step ${page >= 2 && "step_active"} `}></div>
                        <div className={`step`}></div>
                    </div>

                    <div className="form_content">
                        <div className="step_text">
                            <h4 dangerouslySetInnerHTML={createMarkup(formTitle[page])}></h4>
                        </div>
                        <div className='form'>

                            {pageDisplay()}

                            <div className="form_btn_container text-center mt-[62px]">
                                <button
                                    hidden={page === 0}
                                    onClick={
                                        () => setPage(page - 1)
                                    }
                                >Back</button>
                                <button
                                    onClick={
                                        () => {setPage(page + 1)}
                                    }
                                >{page === 0 ? "Get started" : page === 2 ? "Submit" : "Next"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Signup;