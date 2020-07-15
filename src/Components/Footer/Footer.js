import React from 'react'

function Footer(props){
    const data = props;
    return (
        <div>
            <footer>
            <nav>
                <a href = "https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md">Home</a>
                <a href = "https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md">New Photo</a>
                <a href = "https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md">Contact</a>
                <a href = "https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md">About</a>
            </nav>
            <p>{data.copyright}</p>
            </footer>
        </div>
    )
}

export default Footer