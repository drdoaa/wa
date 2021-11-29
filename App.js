import React, {Component } from 'react'
import { useState,useEffect} from 'react'
import { Switch } from 'react-router'
import './App.css'
import { BrowserRouter,Route,Link} from 'react-router-dom'
import ABOUT from './ABOUT/ABOUT'
import CARD from './CARD/CARD'
import { commerce } from '@chec/commerce.js'
import CONTACT from './CONTACT/CONTACT'

import HOME from './HOME/HOME'
import PRODUCT from './PRODUCT/PRODUCT'


export class App  extends Component{
  constructor(props){
    super(props);
  this.state={data:0};}

render(){
    return( <BrowserRouter>
   
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/HOME">HOME</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/ABOUT">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/PRODUCT">PRODUCT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/CARD">CARD</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/CONTACT">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<Switch>
<Route path='/HOME' component={HOME} exact/>
<Route path='/ABOUT' component={ABOUT}exact />
<Route path='/CARD' component={CARD}exact/>
<Route path='/PRODUCT' component={PRODUCT}exact />

<Route path='/CONTACT' component={CONTACT} exact/>

 
 </Switch>
{ <h2>{this.state.data}</h2>  }
{ <button onClick={()=>this.setState({data:this.state.data+1})}>Add</button> }
{/* <ABOUT data={this.state.data} />  */}
<PRODUCT data={this.state.data} />
</BrowserRouter>
     
    )
  
    }
  
}
export default App

