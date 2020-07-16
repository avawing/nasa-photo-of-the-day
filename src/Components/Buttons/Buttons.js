import React from 'react';
import Button from '@material-ui/core/Button'

function Buttons(props){

    let DateGenerator = require('random-date-generator')
    let randomDate = null;

    

    function dateGenerator(props){
        const {setDate} = props
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth()+1).padStart(2, '0');
        let yyyy = today.getFullYear()
        today = `${yyyy}-${mm}-${dd}`
      
        let startDate = new Date(1995, 6, 16);
        let endDate = new Date(today);
        randomDate = DateGenerator.getRandomDateInRange(startDate, endDate);

        let nd = String(randomDate.getDate()).padStart(2, '0');
        let nm = String(randomDate.getMonth()+1).padStart(2, '0');
        let nyyy = randomDate.getFullYear()

        randomDate = `${nyyy}-${nm}-${nd}`

        return setDate(randomDate)
      
    
    
    }
    


    return(
    <div className = "buttons">
    
    <Button onClick = {()=>{dateGenerator(props)}}>Explore</Button>
    
    </div>
    )
}

export default Buttons