import Background from "./components/Background";
import Headings from "./components/Headings";
import Loader from "./components/Loader"
import Start from "./components/Start"
import Menu from "./components/Menu";
import { useState } from 'react'
function App() {
  const [ loaded, setLoaded ] = useState(false)
  const [ videoComplete, setComplete ] = useState(false)
  const [ width, setWidth ] = useState(window.innerWidth)

  setTimeout(() => setLoaded(true), 2500);

  window.addEventListener('resize',  () => setWidth(window.innerWidth))


  function handleStart() {
    gsap.timeline()
    .to('.start', { scale: 0 })
    .to('body', { backgroundColor: '#FBFAFB', 
    
    onComplete: () => {
      const video = document.querySelector('.background')
      video.style.opacity = 1
      video.play()
      video.addEventListener('ended', () => setComplete(true) )
    } 
  })
  }
  return (
    <>

      {width > 700 ? 
      loaded ? 
      <>
        <Start handleStart={handleStart}/>
        <Background />
        {videoComplete && 
        <>
          <Headings/>
          <Menu />
        </>
        }
      </> : 
      <Loader />
      : <p>Mobile design under development.</p>}
    </>
  )
}

export default App
