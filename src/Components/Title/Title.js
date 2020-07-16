import React from 'react'

function Title(props){
    const data = props.data;
    console.log(data)
    return (
        <div className = "title">{data.title}
        <p>{data.date}</p>
        </div>
    )
}

export default Title