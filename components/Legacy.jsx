import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/Home.module.css'

const Legacy = () => {
    const [ref, inView] = useInView()
    return (
        <div ref={ref} className='legacy_container'>
            <div className='legacy_kanji'><h1>伝統精神</h1></div>
            <div className={`${styles.legacy_text} ${inView ? styles.animatelegacy_text : ''}`}>
                <p>At Ryuzo Sake, we are proud to continue the legacy of sake brewing and bring this unique and timeless beverage to people all over the world. Whether you're enjoying a glass with a meal, or toasting to good company, Ryuzo Sake is the perfect choice for any occasion.</p>
            </div>
        </div>
    )
}

export default Legacy