import React from 'react'
import styles from '@/styles/Home.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState, useEffect } from "react";

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    useEffect(() => {
        function handleScroll() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);


        };
    }, []);



    return (

        <nav className="navbar">
            <button
                className="hamburger"

            >
                <AiOutlineMenu className='hamburger_icon' onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }} />
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="#home" className='link_home' onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>HOME</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>STORY</a>
                    </li>
                    <li>
                        <a href="#tailoring" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>PROCESS</a>
                    </li>
                    <li>
                        <a href="#products" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>MISSION</a>
                    </li>
                    <li>
                        <a href="#suits" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>RETAILERS</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>LEGAL</a>
                    </li>
                    <h1 className='header_kanjinav'>RYUZO<br /> SAKE<span >酒</span></h1>
                </ul>

            </div>
        </nav>
    );
}

