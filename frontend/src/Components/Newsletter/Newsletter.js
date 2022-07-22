import React from 'react'
import "./Newsletter.css"
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Newsletter</h1>
        <p>Get timely updates from your favorite products</p>
        <div className='newsletter_input'>
            <input placeholder='your email'/>
            <button>
                <SendIcon/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter