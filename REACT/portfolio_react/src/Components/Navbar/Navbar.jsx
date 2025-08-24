import React, { useState , useRef} from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_close from '../../assets/menu_close.svg'
import menu_open from '../../assets/menu_open.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("");
  

  const menuRef = useRef();

  const openMenu =()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu =()=>{
    menuRef.current.style.right="-100%";
  }

  return (
    <div className="navContainer">
      <div className="logo">
        <h1>NesH</h1>
        <img src={theme_pattern} alt="Logo" className="theme_img" />
      </div>

      {/* Mobile hamburger */}
      <img 
        src={menu_open} 
        alt="menu" 
        className="nav-mob-open" 
        onClick={openMenu} 
      />

      <ul ref={menuRef} className="navLinks">
        {/* Close button inside menu */}
        <img 
          src={menu_close} 
          alt="close" 
          className="nav-mob-close" 
          onClick={closeMenu} 
        />

        <li>
          <AnchorLink className="AnchorL-Link" offset={200} href="#About" onClick={() => { setMenu("About Me"); openMenu; }}>
            <p>About Me</p>
          </AnchorLink>
          {menu === "About Me" && <img src={underline} alt="underline" />}
        </li>
        
        <li>
          <AnchorLink className="AnchorL-Link" offset={150} href="#Skills" onClick={() => { setMenu("Skills"); openMenu; }}>
            <p>Skills</p>
          </AnchorLink>
          {menu === "Skills" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="AnchorL-Link" offset={150} href="#Projects" onClick={() => { setMenu("Projects"); openMenu; }}>
            <p>Projects</p>
          </AnchorLink>
          {menu === "Projects" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="AnchorL-Link" offset={150} href="#Contact" onClick={() => { setMenu("Contact"); openMenu; }}>
            <p>Contact</p>
          </AnchorLink>
          {menu === "Contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      {/* Desktop Button */}
      <div className="navButton">
        <AnchorLink className="AnchorL-Link" offset={150} href="#Contact">Connect With Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;
