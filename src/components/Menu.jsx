import { useEffect } from 'react'
export default function Menu() {

    useEffect(() => {
        Array.from(document.querySelector('.menu').childNodes)
    .forEach(el => el.addEventListener('click', () => close()))
    }, [])

    const close = () => gsap.to('.menu', { height: 0 })
    return (
        <div className="menu">
            <h2>Contact</h2>
            <h2>Back</h2>
        </div>
    )
}
