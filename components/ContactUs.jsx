import React, { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("mqkvvjqr");
    const [showPara, setShowPara] = useState()
    useEffect(() => {
        if (state.succeeded) {
            setShowPara("Form submitted successfully, I will get back to you shortly.");
        }
    }, [state.succeeded]);
    return (
        <>
            <div>
                <section className="contact-me" id="contact-me">
                    <h2 className="mb-4">Contact with me</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-me-box mb-2">
                                <i className="fas fa-home" />
                                <span>Odisha, India</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-me-box mb-2">
                                <i className="fas fa-envelope" />
                                <span style={{ wordBreak: "break-all" }}>anil.mallick2002@gmail.com</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-me-box mb-2">
                                <i className="fas fa-phone fa-rotate-90" />
                                <span>7077825321</span>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-5">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder="First name" id='first_name' name="first_name" aria-label="First name" required="true" />
                                        <ValidationError
                                            prefix="first_name"
                                            field="first_name"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last name" id='last_name' name="last_name" aria-label="Last name" required="true"/>
                                        <ValidationError
                                            prefix="last_name"
                                            field="last_name"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Email" id='email' name="email" aria-label="First name" required="true" />
                                        <ValidationError
                                            prefix="email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Contact no</label>
                                        <input type="number" className="form-control" placeholder="Mobile no" id='contact_no' name="contact_no" aria-label="Last name" required="true" />
                                        <ValidationError
                                            prefix="first_name"
                                            field="first_name"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Message</label>
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} name="message" defaultValue={""} required />
                                            <label htmlFor="floatingTextarea2">Comments</label>
                                            <ValidationError
                                                prefix="message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary" type="submit" disabled={state.submitting}>SUBMIT</button>
                                    </div>
                                    {showPara &&
                                        (
                                            <div class="alert alert-success mt-3" role="alert">
                                                {showPara}
                                            </div>
                                        )}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="footer">
                    <div className="footer-data">
                        <div>
                            <h6>©copyright by Anil Mallick</h6>
                        </div>
                        <div className='social-footer-links'>
                            <a href="https://www.linkedin.com/in/anil-mallick-642a89259" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <span>|</span>
                            <a href="https://www.facebook.com/anil.mallick.39501" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <span>|</span>
                            <a href="#">Linkedin</a>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default ContactUs;