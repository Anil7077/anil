import React from 'react'

const Education = ({ darkMode }) => {
    return (
        <>
            <section className={darkMode ? "my-skills sections" : "my-skills"} id="my-education">
                <h2 className="mb-4">Education & Experience</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box-item">
                            <div className="flip-box">
                                <div className="flip-box-front" style={{ backgroundImage: 'url("/images/ed-1.png")' }}>
                                    <div className="inner color-white" style={{color: 'white'}}>
                                        <p className="flip-box-header">B.Tech in Electronics & telecommunication</p>
                                        <p>Trident Academy of Technology, Bbsr</p>
                                        <u>(2019-2023)</u>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="box-item">
                            <div className="flip-box">
                                <div className="flip-box-front" style={{ backgroundImage: 'url("/images/ed-2.png")' }}>
                                    <div className="inner color-white" style={{color: 'white'}}>
                                        <p className="flip-box-header">12th in Science</p>
                                        <p>Maharishi College of Natural Law, Bbsr</p>
                                        <u>(2017-2019)</u>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                    <div className="box-item">
                            <div className="flip-box">
                                <div className="flip-box-front" style={{ backgroundImage: 'url("/images/ed-3.png")' }}>
                                    <div className="inner color-white" style={{color: 'white'}}>
                                        <p className="flip-box-header">Internship in web development</p>
                                        <p>Apptimates software pvt ltd, Bbsr</p>
                                        <u>(Apr 2023 - Jun 2023)</u>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='shape'></div>
            </section>
        </>
    )
}

export default Education