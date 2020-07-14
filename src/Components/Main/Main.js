import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Main(){
    return(
        <>
        <Header />
        <div>
            <div className = "Photo-Container">
            <img src ="https://picsum.photos/200/300" alt = "Space"></img>
            This will contain a photo - that will update onClick!
            </div>
            
            <div className = "Text-Container">
                <p>Oh, I have slipped the surly bonds of earth,<br />
                    And danced the skies on laughter-silvered wings;<br />
                    Sunward I've climbed and joined the tumbling mirth of sun-split clouds -<br />
                    and done a hundred things You have not dreamed of -<br />
                    wheeled and soared and swung high in the sunlit silence.<br />
                    Hovering there I've chased the shouting wind along<br />
                    and flung my eager craft through footless halls of air.</p>
                   <p> "Up, up the long delirious burning blue<br />
                    I've topped the wind-swept heights with easy grace,<br />
                    where never lark, or even eagle, flew;<br />
                    and, while with silent, lifting mind I've trod<br />
                    the high untrespassed sanctity of space,<br />
                    put out my hand and touched the face of God.</p>
                <p>This will contain words - that will update onClick!</p>
            </div>
        </div>
        <div className = "buttons">
            <button>Generate New Photo</button>
        </div>
        <Footer />
        </>
    )
}

export default Main