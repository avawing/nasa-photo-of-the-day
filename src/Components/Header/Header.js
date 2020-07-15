import React from 'react';
import './Header.css'
import NavBar from '../NavBar/NavBar.js'
import Profile from '../Profile/Profile.js'

export function Header(){

    function openNav() {
        document.querySelector(".headerNav").style.width = "100%"
        document.querySelector(".headerNav").style.display = 'flex';
        document.querySelector('.headerNav').style.height = '1.5rem';
      }
 return(
     <>
     <div>
        
    </div>
     <header>
         <button onClick ={openNav}><img src="https://img.icons8.com/ios/50/000000/menu.png" alt = "Menu"/></button>
         
        
         <h1>NASA Photo of the Day</h1>
         <button><img src="https://img.icons8.com/ios/50/000000/person-female--v1.png" alt = "Creator Profile"/></button>
         
    </header>
    <NavBar />
    <Profile />

     

     </>
 )   
}

export default Header