import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/Home.module.css'

const About = () => {
    const [ref, inView] = useInView()
    return (
        <div className='about_container'>
            <div className='about_button-container'>
                <button ref={ref} type='button' className={`${styles.about_button} ${inView ? styles.animateabout_button : ''}`}>FIND A RETAILER</button>
            </div>
            <div className='about_text-container'>
                <h1>Our Story</h1>
                <p>Ryuzo Sake is a premium Japanese sake brand dedicated to preserving the ancient traditions of sake brewing while also embracing modern innovations. Founded in the heart of Japan's sake-brewing region, our passion for sake is reflected in every bottle we produce.
                    <br />
                    Using only the finest rice and water sourced from local mountain springs, our master brewers meticulously craft each batch of Ryuzo Sake to ensure a delicate balance of flavor, aroma, and body. From the first pour to the last drop, our sake is designed to elevate any occasion and be savored by sake enthusiasts and new drinkers alike.</p>
            </div>
        </div>
    )
}

export default About
