import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar'

export function Header(){
 return(
     <>
     <header>
         <h1>NASA Photo of the Day</h1>
         <NavBar />
     </header>
     </>
 )   
}