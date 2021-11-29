import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CONTACT extends Component {
    render() {
        return (
            <div>
             

    <div class="call-to-action section bg-opacity bg-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-8 text-center mx-auto">
                    <h2 class="subheading text-white">Get Product Updates</h2>
                    <p class="text-white">Lorem ipsum dolor amet, consectetur adipisicing elit, sed do eiusmod</p>
                    <div class="input-group">
                        <form action="/" class="w-100">
                            <input type="email" id="email" class="form-control" name="email" placeholder="Your Email Address Here" required/>
                            <button class="btn btn-main btn-submit" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>   
            <section className="testimonials section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="heading">
                                <h2>Watch Review</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0 text-center">
                            <div className="testimonial-block">
                                <i className="tf-ion-quote"></i>
                                <p>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
                                    spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in
                                    this spot, which was created for the bliss of souls like mine. I am so happy, my dear
                                    friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
                                    talents.
                                </p>
                                <div className="author-details">
                                    <img src="images/avater.png"  alt=""/>
                                    <h4>Jonathon Andrew</h4>
                                    <span>CEO, Themefisher</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0 text-center">
                            <div className="testimonial-block">
                                <i className="tf-ion-quote"></i>
                                <p>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
                                    spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in
                                    this spot, which was created for the bliss of souls like mine. I am so happy, my dear
                                    friend. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, perferendis.
                                </p>
                                <div className="author-details">
                                    <img src="images/avater.png" alt=""/>
                                    <h4>Jonathon Andrew</h4>
                                    <span>CEO, Themefisher</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0 text-center">
                            <div className="testimonial-block">
                                <i className="tf-ion-quote"></i>
                                <p>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
                                    spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in
                                    this spot, which was created for the bliss of souls like mine. I am so happy, my dear
                                    friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
                                    talents.
                                </p>
                                <div className="author-details">
                                    <img src="images/avater.png" alt=""/>
                                    <h4>Jonathon Andrew</h4>
                                    <span>CEO, Themefisher</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-100">
                        <div className="col-md-12 text-center">
                            <a to="" className="btn btn-main">Grab You Product Now</a>
                        </div>
                    </div>
                </div>
            </section>
        
        
        
            <footer>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <Link to="/HOME" className="footer-logo mb-4">Vex</Link>
                                <ul className="list-inline footer-menu">
                                    <li className="list-inline-item">
                                        <Link to="/PRODUCT ">PRODUCT</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/ABOUT">ABOUT</Link>
                                    </li>  
                                    <li className="list-inline-item">
                                        <Link to="/CARD">CARD</Link>
                                            
                        
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/CONTACT">CONTACT</Link>
                                    </li>
                                </ul>
                                <p className="copyright-text">Copyright &copy; <a to="http://www.Themefisher.com">Themefisher</a>|
                                    All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
        
          
            <script src="plugins/jquery-2.1.1.min.js"></script>
            <script src="plugins/bootstrap/bootstrap.min.js"></script>
            <script src="plugins/owl-carousel/owl.carousel.min.js"></script>
            <script src="plugins/magnific-popup/jquery.magnific.popup.min.js"></script>
            <script src="js/main.js"></script>
        </div>
        </div>
        )
    }
}

export default CONTACT
