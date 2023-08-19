import { useEffect, useRef } from 'react'
import data from './animals.json'
export default function Loader() {
    const loading = useRef(null)
    useEffect(() => {
        let i = Math.round(Math.random() * data.animals.length / 1.5)
        const interval = setInterval(() => {
            i++; 
            gsap.to(loading.current, { 
                text: 
                `${loading.current.innerHTML} <br /> ${data.animals[i]}...`
            }
            )

            if(loading.current.innerText.length > 150 || i === data.animals.length){
                 clearInterval(interval)
                 gsap.to(loading.current, { text: 'ALMOST LOADED...', delay: .5 })
            }
        }, 300);
    }, [])
    return (
        <div className="loader">
            <pre><strong>USF Inc.</strong>                Released: 2/2090/22
                <br /><br /><br />
                USF 213 Special 2000-22000 UC1315 Go 88**
                <br /><br />
                HSP Showcase Model Nika: 2021 2222 ##
                <br />
                Checking Ram : 140000 OK
                <br /><br /><br /><br />
                <strong>LOADING RESOURCES  ------</strong>
                <br /> 
                <p ref={loading}><br/></p>
                <br />
                Press <strong>SPACE</strong> to enter Setup and press <strong>SPACE</strong> to Jump.
                <br /><br />
                10/10/10
            </pre>
        </div>
    )
}