import React from 'react'
import twitterIcon from "../assets/twitter.png";
import linkedInIcon from "../assets/linkedIn.png";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import { useTheme } from './theme/ThemeProvider';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <>
    <footer className='flex flex-col gap-8 items-center mt-8'>
      <div className="grid grid-cols-4 grid-rows-1 ml-[8vw] w-[80vw] p-2
      min-tablet:max-laptop:ml-[6vw]
      min-start:max-tablet:ml-[4vw]">
        <NavLink to='/how-it-works' className=' leading-4 cursor-pointer min-start:max-tablet:w-[60px] text-sm font-semibold'>How it works?</NavLink>
        <NavLink to='/contact' className=' leading-4 cursor-pointer min-start:max-tablet:w-[60px] text-sm font-semibold'>Contacts</NavLink>
        <NavLink to='/' className=' resp-title-2 leading-4 cursor-pointer min-start:max-tablet:w-[60px] text-sm font-semibold'>Privacy Policy</NavLink>
        <NavLink to='/' className=' resp-title-2 leading-4 cursor-pointer min-start:max-tablet:w-[60px] text-sm font-semibold'>Terms of Services</NavLink>
      </div>
      <div className='flex gap-4'>
        <NavLink to="/" className='cursor-pointer'>
          <img src={instagramIcon} className={`min-tablet:w-8 min-start:max-tablet:w-6 ${
            theme=="dark" && "invert"
          }`} alt="instagram-image" />
        </NavLink>

        <NavLink to="/" className='cursor-pointer'>
          <img src={linkedInIcon} className={`min-tablet:w-8 min-start:max-tablet:w-6 ${
            theme=="dark" && "invert"
          }`} alt="instagram-image" />
        </NavLink>

        <NavLink to="/" className='cursor-pointer'>
          <img src={facebookIcon} className={`min-tablet:w-8 min-start:max-tablet:w-6 ${
            theme=="dark" && "invert"
          }`} alt="instagram-image" />
        </NavLink>

        <NavLink to="/" className='cursor-pointer'>
          <img src={twitterIcon} className={`min-tablet:w-8 min-start:max-tablet:w-6 ${
            theme=="dark" && "invert"
          }`} alt="instagram-image" />
        </NavLink>
      </div>
      <p className='resp-text-2 mb-8'>&copy;2025 Healix. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer
