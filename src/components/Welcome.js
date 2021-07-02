import React from 'react';
import mFounder from '../assets/MobileVersionWebsiteFounders.png';
import host from '../assets/VC/the-colin-and-samir-podcast@2x (1) 1.png';
import calle from '../assets/VC/the-colin-and-samir-podcast@2x (1) 2.png';
import founders from '../assets/foiunders.png'
import one from '../assets/VC/sibling-rivalry@2x 2.png'
import two from '../assets/VC/sibling-rivalry@2x 3.png'
import four from '../assets/VC/sibling-rivalry@2x 5.png'


const Welcome = () => {
  return (
    <div className="flex flex-col items-center mt-[5rem] ">
    <h3 className="font-semibold text-[34px] lg:text-[#0075FF]"  style={{ fontSize: 'clamp(23px, 3vw, 35px)'}}>Welcome to</h3>
    <div>
    <h1 className="font-extrabold flex justify-center" style={{ fontSize: 'clamp(48px, 9vw, 180px)', fontFamily: "Bebas Neue"}}>FOUNDERS MAFIA</h1>
      <img className="w-full lg:hidden max-w-[400px]" src={mFounder}/> 
      <div className="hidden lg:flex justify-center mt-[-8rem] mx-auto w-full"> 
        <img src={founders} className="object-fill w-[60%]"/>  
      </div>
    </div>
    <div className="leading-relaxed lg:hidden font-semibold mt-[5rem] mb-[3.5rem] text-2xl">
      <p>Bringing you the stories</p>
      <p>of remarkable startups</p>
      <p>on your finger tips</p>
    </div>
    <div className="lg:flex w-full mt-[8rem] lg:w-[80%] justify-between ">
      <div className="w-full lg:w-[50%] mt-4">
        <span className="relative lg:w-[100%] flex items-end justify-end lg:justify-start ">
          <img className="w-[60%] max-w-[400px] lg:scale-x-[1] scale-x-[-1] " src={host} />
          <img className="absolute w-[40%] lg:scale-x-[1] max-w-[200px] bottom-[-20%] right-[35%] lg:left-[40%] scale-x-[-1]" src={calle} />
        </span>
      </div>
        <div className="hidden lg:flex  flex-col  mt-20 lg:justify-between lg:w-[40%] lg:mt-0 ">
          <div className="leading-relaxed font-semibold mt-4 text-2xl">
            <p>Bringing you the stories</p>
            <p>of remarkable startups</p>
            <p>on your finger tips</p>
          </div>
          <div className=""> 
            <div className="hidden lg:flex space-x-4">
              <img src={one} className="w-[5rem] h-[5rem]" />
              <img src={two} className="w-[5rem] h-[5rem]" />
              <img src={four} className="w-[5rem] h-[5rem]" />
              <img src={two} className="w-[5rem] h-[5rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
