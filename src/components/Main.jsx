import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';


const Main = () => {
    
    const [fetchMemes, setFetchMemes] = useState([])
    const [meme, setMeme] = useState({
        firstInput:"",
        secondInput:"",
        randomImage:"https://i.imgflip.com/261o3j.jpg"
    })
    
    useEffect(() => 
        {
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setFetchMemes(data.data.memes))
        }
    )

    const handleClick = () => {
        const arrayMeme = fetchMemes;
        const randomNumber = Math.floor(Math.random() * arrayMeme.length)
        const randomPic = arrayMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:randomPic
        }))
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }



    return(
        <div className="main-container">
            <div className="form-container">
                <form className="form">
                    <input className="first-input" 
                            placeholder='First input'
                            name="firstInput"
                            onChange={handleChange}
                            type="text"
                            value={meme.firstInput} />
                    <input className="second-input"
                           placeholder='Second input' 
                           name="secondInput"
                           onChange={handleChange}
                           type="text"
                           value={meme.secondInput}
                           />
                    <button onClick={handleClick} type="button" className="btn-submit"> Get a new meme image </button>
                    
                </form>
            </div>
          <div >

                <img  className="meme-container" src={meme.randomImage} alt="" />
                <h1 className="firstmeme">{meme.firstInput}</h1>
                <h1 className="secondmeme">{meme.secondInput}</h1>
          </div>
          
        </div>
    )
}

export default Main;