import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/Home.module.css'


const Process = () => {
    const [ref, inView] = useInView()
    const [ref2, inView2] = useInView()
    const [ref3, inView3] = useInView()
    const [ref4, inView4] = useInView()
    return (
        <div className='process_container'>

            <div className={`${styles.process_circle} ${inView ? styles.animateprocess_circle : ''}`}></div>

            <div className='process_card-container'>
                <div ref={ref} className={`${styles.process_card1} ${inView ? styles.animateprocess_card1 : ''}`}>
                    <h1>RICE</h1>
                    <p>High-quality sake rice is washed and soaked to remove surface starch and impurities.</p>
                    <button>LEARN MORE</button>
                </div>
                <div ref={ref2} className={`${styles.process_card2} ${inView2 ? styles.animateprocess_card2 : ''}`}>
                    <h1>KOJI</h1>
                    <p>Koji fragments are sprinkled over steamed rice to develop enzymes, and the mixture is incubated for 2-3 days.</p>
                    <button>LEARN MORE</button>
                </div>
                <div ref={ref3} className={`${styles.process_card3} ${inView3 ? styles.animateprocess_card3 : ''}`}>
                    <h1>FERMENT</h1>
                    <p>The koji rice is mixed with water to form a mash called "moromi," which is then fermented for 1-2 weeks.</p>
                    <button>LEARN MORE</button>
                </div>
                <div ref={ref4} className={`${styles.process_card4} ${inView4 ? styles.animateprocess_card4 : ''}`}>
                    <h1>AGING</h1>
                    <p>The sake is filtered, bottled, and aged for several months to a year to develop a deeper, smoother flavor.</p>
                    <button>LEARN MORE</button>

                </div>

            </div>
        </div>
    )
}

export default Process