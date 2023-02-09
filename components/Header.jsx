import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/Home.module.css'

const Header = () => {
    const [ref, inView] = useInView()
    return (
        <div ref={ref} className='header_container'>
            <div className='header_heading-container'><h1 className={`${styles.header_heading} ${inView ? styles.animateheader_heading : ''}`}>RYUZO SAKE<span className='header_kanji'>酒</span></h1></div>
            <div className='header_image'></div>
            <img src='/static/kanji.svg' className='kanji'></img>
        </div>
    )
}

export default Header