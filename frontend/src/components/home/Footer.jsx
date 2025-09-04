import React from 'react'
import { FaGithub } from "react-icons/fa"
import { SiNotion } from "react-icons/si"
import "./styles/Footer.scss"
import footer from "../../utils/footer"
const Footer = () => {
  const item = footer.brand
  return (
    <div className='inner foot-inner'>
      <div className="left">
        <img src={item.logo} className="logo" alt={item.name} />
        <div className="text-box">
          <h4 className="name">{item.name}</h4>
          <p className="copy">{item.copy}</p>
        </div>
      </div>

      <div className="right">
        <a href="">
          <FaGithub size={28} />
        </a>
        <a href="">
          <SiNotion size={28} />
        </a>
      </div>
    </div>
  )
}

export default Footer