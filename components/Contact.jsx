import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className='contact_container'>
            <h1>RYUZO SAKE<span className='header_kanji'>酒</span></h1>
            <div className='contact_links-container'>
                <div className='contact_links'>
                    <a>HOME</a>
                    <a>STORY</a>
                    <a>PROCESS</a>
                    <a>MISSION</a>
                    <a>RETAILERS</a>
                    <a>LEGAL</a>
                </div>
                <div className='contact_icons'>
                    <a><AiOutlineInstagram /></a>
                    <form>
                        <input type={'text'} placeholder='email'></input>
                        <button type='button'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact