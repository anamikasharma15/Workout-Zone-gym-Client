import React from 'react';
import faqImg from '../images/faq-people.png'

const FAQ = () => {
    return (
        <div>
            <section className="container my-5">
            <h1 className="text-center font-margin heading">Frequently Asked <span className="orange-color">Questions</span></h1>
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <img src={faqImg} className="img-fluid p-4" alt=""/>
                </div>
                <div className="col-lg-6">
                    <div className="row gy-2">

                        {/* <!-- accordian 1 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingZero">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseZero" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseZero">
                                            <h5 className="text-dark">Booking Classes</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseZero" className="accordion-collapse collapse show"
                                        aria-labelledby="panelsStayOpen-headingZero">
                                        <div className="accordion-body">
                                            As a multi-faceted fitness and health company which is encompassed by the talents of many diversely skilled professionals, we have sought to establish a set of mutually agreed core values to help underpin the success of our overall mission and ensuing philosophy.
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 1 --> */}


                        {/* <!-- accordian 2 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            <h5 className="text-dark">Towels</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            <p>In mind of these recognised outcomes we (SB Fitness) are continually driven to keep providing a personalised service which successfully unlocks every affiliated person’s full potential.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 2 --> */}


                        {/* <!-- accordian 3 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            <h5 className="text-dark">Membership</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>we have sought to establish a set of mutually agreed core values to help underpin the success of our overall mission and ensuing philosophy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 3 --> */}


                        {/* <!-- accordian 4 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                            <h5 className="text-dark">Personal Training</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <p>This is why as coaches foremost creating confidence and trust in our focused strategy amongst those that we work with is imperative as it underpins success for all on varying levels.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 4 --> */}

                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default FAQ;