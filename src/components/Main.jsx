import React from 'react';
import memesData from './memesData'
import { useState } from 'react';

const Main = () => {
    
    const [meme, setMeme] = useState({
        "topText":"", 
        "bottomText":"", 
        "memePic":"https://i.imgflip.com/30b1gx.jpg"
})
    

    const handleClick = () => {
        const arrayMeme = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * arrayMeme.length)
        const randomPic = arrayMeme[randomNumber].url
        setMeme(meme => memePic.randomPic)
    }
    
    return(
        <div className="main-container">
            <div className="form-container">
                <form className="form">
                    <input className="first-input" placeholder='First input' />
                    <input className="second-input" placeholder='Second input' />
                    <button onClick={handleClick} type="button" className="btn-submit"> Get a new meme image </button>
                    
                </form>
            </div>
          <div >

                <img  className="meme-container" src={picture} alt="" />
          </div>
          
        </div>
    )
}

export default Main;