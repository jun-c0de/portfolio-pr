import React, { useEffect, useState } from 'react'
import Nav from "./Nav"
import "./styles/Header.scss"
import { useTheme } from '../../context/ThemeContext'
import FixedTop from './FixedTop'
const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setmenuOpen]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)

  }, [])

  useEffect(()=>{
    const onkey =(e)=>e.key=='Excape' && setmenuOpen(false)

    document,addEventListener('keydown',onkey)
    return()=>document.removeEventListener('keydown',onkey)
  },[])

  return (
    <header className={`${scrolled ? "scroll" : ""}  ${menuOpen? "is-open" : ""}` }>
      <div className="inner">
        <h4>LOGO</h4>
        <div className="right-wrap">
          <button 
          onClick={()=>setmenuOpen(v=>!v)}
          className='mob-nav-btn'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </button>
          <Nav />
          <button className='btn' onClick={toggleTheme}>{theme}</button>

        </div>
      </div>
      <FixedTop />
    </header>
  )
}

export default Header