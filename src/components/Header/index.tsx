import React, { useEffect, useState } from 'react';

import WhiteLogo from '../../assets/logo_pm_white.png'

export function Header() {

  const [fullSize, setFullSize] = useState(true);

  const handleScroll = ()=>{
    setFullSize(false);
  }

  const initialize = ()=>{
    window.addEventListener('scroll', handleScroll);
  }

  const setUpScrollTimeout = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 120,
        behavior: 'smooth'
      })
    }, 3500)
  }

  useEffect(() => {
    initialize();
    setUpScrollTimeout()
  }, []);


  return (
    <header className={`App-header ${fullSize ? '' : 'minsize' }`}>
      <div className="logo-image-container">
        <img src={WhiteLogo} className="logo-header-img fadeIn"/>
        <h4 className="header-title">PROYECTO MIGALA</h4>
      </div>

      <div className="circles-container">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
      </div>
    </header>
  )

}