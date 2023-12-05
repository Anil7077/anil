import React from 'react'

const LatestWork = () => {
    return (
        <>
            <section className="my-work" id="latest-work">
                <h2 className="mb-1">My Latest Works</h2>
                <span className="text-primary">click on the images to know more*</span>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div type="button" className="btn work-image-div" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img className="latest-work-img" src="/images/wnrl2.webp" alt="aa" />
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div type="button" className="btn work-image-div" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <img className="latest-work-img" src="/images/dotcom1.jpg" alt="aa" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div type="button" className="btn work-image-div" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <img className="latest-work-img" src="/images/slider2.webp" alt="aa" />
                        </div>
                    </div>
                </div>
                {/* ------------modal starts---------- */}
                {/* 1st modal------- */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">WNRL</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body modal-inner-part">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6>Warehouse network resources ltd is the first peoject of my software
                                            career and I worked as a jr.Front-end developer in it under the
                                            guidence of my team leader</h6>
                                        <p><u>Technologies include</u> - Next js, React js, Redux Toolkit, React
                                            Hook Form, HTML, CSS, Bootstrap</p>
                                        <p><u>About the project</u></p>
                                        <span>In this project there are a lot of hardware goods available to buy
                                            and bid. You need to register first and the you can bid for the
                                            products you want , there are more than 30 pages implemented in this
                                            project.</span>
                                            <br />

                                            <a href="https://wnrl.vercel.app/" target="_blank" rel="noopener noreferrer">Website link</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="/images/wnrl1.jpeg" alt="aa" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd modal ------------- */}
                <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">DOTCOM</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body modal-inner-part">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6>During my internship time at Apptimates software private limited , I made this page from scratch under the guidance of our project co-ordinator</h6>
                                        <p><u>Technologies include</u> - HTML, CSS, JS, Bootstrap</p>
                                        
                                        <a href='https://github.com/Anil7077/DotCom' target="_blank" rel="noopener noreferrer">GitHub Link</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="/images/dotcom2.jpg" alt="aa" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">REFAB</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body modal-inner-part">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6>REFAB website, also did in my internship training period</h6>
                                        <p><u>Technologies include</u> - HTML, CSS, JS Bootstrap</p>
                                        <p><u>About the project</u></p>
                                        <a href='https://github.com/Anil7077/Refab' target="_blank" rel="noopener noreferrer">GitHub Link</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="/images/slider3.webp" alt="aaa" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------------========================-------------------- */}
            </section>

        </>

    )
}

export default LatestWork