import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Header.css'
import Logo from '../../assets/logo2.jpeg'
import Bars from '../../assets/bars.png'

const Header = () => {
  const mobile = window.innerWidth<= 768? true: false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
        <img src={Logo} alt="img" className='logo' />
        {menuOpened === false && mobile === true ? (
          <div 
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={()=> setMenuOpened(true)}
          >
            <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/>
            </div>
        ):(
          <ul className='header-menu'>
          <li>
            <Link
            to='home'
            activeClass='active'
            spy={true}
            smooth={true}
            onClick={()=>setMenuOpened(false)}
            >Accueil</Link>
          </li>
          <li >
          <Link
            to='programs'
            spy={true}
            smooth={true}
            onClick={()=>setMenuOpened(false)}
            >Services</Link>
            </li>
          <li >
          <Link
            to='reasons'
            spy={true}
            smooth={true}
            onClick={()=>setMenuOpened(false)}
            >Pourquoi-nous</Link>
          </li>
          <li>
          <Link
            to='plans'
            spy={true}
            smooth={true}
            onClick={()=>setMenuOpened(false)}
            >Contact</Link>
            </li>
          <li>
            <Link
            to='testimonials'
            spy={true}
            smooth={true}
            onClick={()=>setMenuOpened(false)}
            >Testimonials</Link>
          </li>
          </ul>
        )
        }
      
    </div>
  )
}

export default Header