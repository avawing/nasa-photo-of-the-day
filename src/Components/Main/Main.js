import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Buttons from '../Buttons/Buttons'
import './Main.css'

function Main(props){
const {data, setDate} = props

    return(
        <>
        <Header />
        <div>
      <Jumbotron>
        <img className="display-3" src = {data.url} alt = {data.title} width = '100%'height = '600vh'/>
        <p>{data.explanation}</p>
      </Jumbotron>
    </div>
        <Buttons data = {data} setDate = {setDate}/>
        <Footer data = {data}/>
        </>
    )
}

export default Main