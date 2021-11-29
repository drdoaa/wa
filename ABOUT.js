import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ABOUT extends Component {
  
    render() {
        return (
           
        <div> <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center mb-5 mb-md-0">
                    <img src="images/watch.png" alt=""/>
                </div>
                <div className="col-md-6 align-self-center text-center text-md-left">
                    <div className="block">
                        <h1 className="font-weight-bold mb-4 font-size-60" >Belive in Technology, Make the change</h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptas, modi fugit in veritatis labore perferendis. Minima hic at, nostrum nihil!</p>
                        <Link className="btn btn-main" hreto="/about" role="button">Buy Now With $199</Link>
                    </div>
                </div>
            </div>
        </div>   </div>
       
 
</div>)
}
}
export default ABOUT
