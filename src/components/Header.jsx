import React, { useEffect, useState } from 'react'
import video from '../img/video.mp4'

const Header = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Cristiano Ronaldo', 'El Bicho', 'The GOAT']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
        tick()
    }, delta);

    return () => {clearInterval(ticker)}
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    
    setText(updatedText)

    if(isDeleting) {
        setDelta(prevDelta => prevDelta / 1.5)
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true)
        setDelta(period)
    } else if(isDeleting && updatedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setDelta(500)
    }
  }

  return (
    <div className="header">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted className="video" />
      <h1 className="title">{text}</h1>
    </div>
  )
}

export default Header
