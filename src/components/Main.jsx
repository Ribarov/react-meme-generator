import React from 'react';
import memesData from './memesData'


const Main = () => {
    const handleClick = () => {

        const arrayOfMemes = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * arrayOfMemes.length)
        const randomPic =  arrayOfMemes[randomNumber].url
        
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
                <img  className="meme-container" src={require('../images/meme-example.jpg')} alt="" />
          </div>
            
        </div>
    )
}

export default Main;