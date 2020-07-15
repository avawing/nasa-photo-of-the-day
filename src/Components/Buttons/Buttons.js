import React from 'react';
import DateGenerator from 'date-generator';

function Buttons(props){
    const setDate = props

    let randomDate = null; 
    function dateGenerator(){
 
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth()+1).padStart(2, '0');
        let yyyy = today.getFulllYear()
        today = `${yyyy}-${mm}-${dd}`
      
        let startDate = new Date(1995, 6, 16);
        let endDate = new Date(today);
        randomDate = DateGenerator.getRandomDateInRange(startDate, endDate);
      
        return setDate(randomDate)
      }


    return(

<div className = "buttons">
    <button> Previous </button>
    
    <button onClick = {dateGenerator}>Explore</button>
    
    <button> Next </button> 
        </div>
    )
}

export default Buttons