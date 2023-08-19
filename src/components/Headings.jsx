import { useEffect } from 'react'
import Navbar from './Navbar'
export default function Headings() {
    useEffect(() => {
        setTimeout(() => {
            gsap.to('.headings', { width: '50%', onComplete: () =>
        gsap.to('.headings *', { opacity: 1  }) })
        }, 500);
    }, [ ])
    return (
        <div className="headings">
            <h1>We Develop.</h1>
            <h1>You Use.</h1>
            <i className="ri-arrow-down-line"></i>
            <p>Scroll down</p>
            <Navbar />
        </div>
    )
}