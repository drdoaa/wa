import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CARD extends Component {
    render() {
        return (<div>
            <div classNameName="feature-list section">
            <div classNameName="container">
                <div classNameName="row">
                    <div classNameName="col-md-12">
                        <div classNameName="heading">
                            <h2>Why Choose Apple Watch</h2>
                        </div>
                    </div>
    
                </div>
                <div classNameName="row mb-40">
                    <div classNameName="col-md-6 text-center mb-5 mb-lg-0">
                        <img classNameName="img-fluid" src="images/showcase-4.png" alt=""/>
                    </div>
                    <div classNameName="col-md-6 align-self-center text-center text-md-left">
                        <div classNameName="content">
                            <h4 classNameName="subheading">Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, sed, assumenda. Tenetur
                                sed esse, voluptas voluptate est veniam numquam, quis magni. Architecto minus suscipit
                                quas, quo harum deserunt consequatur cumque!</p>
                            <a to="" classNameName="btn btn-main btn-main-sm">Check Features</a>
                        </div>
                    </div>
                </div>
                <div classNameName="row">
                    <div classNameName="col-md-6 order-md-1 order-2 align-self-center text-center text-md-left">
                        <div classNameName="content">
                            <h4 classNameName="subheading">Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, sed, assumenda. Tenetur
                                sed esse, voluptas voluptate est veniam numquam, quis magni. Architecto minus suscipit
                                quas, quo harum deserunt consequatur cumque!</p>
                            <a to="/" classNameName="btn btn-main btn-main-sm">Check Features</a>
                        </div>
                    </div>
                    <div classNameName="col-md-6 order-md-2 order-1 text-center mb-5 mb-lg-0">
                        <img classNameName="img-fluid" src="images/showcase-3.png" alt=""/>
                    </div>
                </div>
            </div>
      
    
    
        <div classNameName="gallery">
            <div classNameName="container">
                <div classNameName="row">
                    <div classNameName="col-md-12">
                        <div classNameName="heading">
                            <h2>Checkout some amazing Shorts</h2>
                        </div>
    
                      
                        </div>
                    </div>
                </div>
            </div>
       



        
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images\showcase-1.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images\showcase-2.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images\showcase-3.png" className="d-block w-100" alt="..."/>
    </div>
  <div className="carousel-item">
      <img src="images\showcase-4.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images\showcase-5.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images\showcase-7.png" className="d-block w-100" alt="..."/>
    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
      </div>
      </div>
        )
    }
}

export default CARD
