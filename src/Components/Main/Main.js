import React from 'react'

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
            <div className = "title">{data.title}
            <p>{data.date}</p>
            </div>
            <div className = "superContainer">
            <div className = "container">
            <div className = "Photo-Container">
            <img src ={data.url} alt = {data.title}></img>
            </div>
            
            <div className = "Text-Container">
                <p>{data.explanation}</p>
            </div>
            </div>
        </div>
    </div>
        <Buttons data = {data} setDate = {setDate}/>
        <Footer data = {data}/>
        </>
    )
}

export default Main