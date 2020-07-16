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
        <Buttons data = {data} setDate = {setDate}/>
      <Jumbotron>
          <h2 fontColor = 'red'>{data.title}</h2>
        <img className="display-3" src = {data.url} alt = {data.title} width = '100%'height = '600vh'/>
        <p>{data.explanation}</p>
      </Jumbotron>
      <p>{data.date}</p>
      <p>{data.copyright}</p>
    </div>
        </>
    )
}

export default Main