import React from 'react';
import './NavBar.css'


function NavBar(){

    return(
        <div className = "navContainer">
            <nav className = "headerNav">
                <a href = "https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md">Home</a>
                <a href = "https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md">New Photo</a>
                <a href = "https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md">Contact</a>
                <a href = "https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md">About</a>
            </nav>
        </div>
    )
}

export default NavBar