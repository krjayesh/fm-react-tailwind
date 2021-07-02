import React from 'react';
import mic from '../assets/mic.png'; 
import pic1 from '../assets/newpodcasts/sibling-rivalry@2x 2.png'
import pic2 from '../assets/newpodcasts/sibling-rivalry@2x 3.png'
import pic3 from '../assets/newpodcasts/sibling-rivalry@2x 4.png'
import vector from '../assets/svgs/Vector.svg'
import vector1 from '../assets/svgs/Vector-1.svg'
//import podbox from '../assets/podbox.png';
//import {SiSpotify} from 'react-icons/si'


const LPodcasts = () => {
  const audience = ["Jeremy", "Bobby", "Shawn",  "Maria", "Charles", "Dennis", "Doris", "Carolyn"]
  const host = [
    {
      name: "Eric Zhu",
      bg: "#564A4A",
    },
    {
      name: "Kevin",
      bg: "#D9BFCD",
    },
    {
      name: "Edmund",
      bg: "#DEDEDE",
    }
  ]
  return (
    <div className="mt-[20rem] w-full">
      <h2 className="w-4/5 mx-auto font-normal text-[2rem] lg:hidden">Our Latest Episodes</h2>
      <h2 className="w-max mx-auto font-normal text-[2rem] hidden lg:block">Get inspired with our latest episodes out there</h2>
    <div className="whitespace-nowrap space-x-4 w-4/5 lg:w-[90%] mt-[2rem] lg:mt-[5rem] mx-auto">
        <img src={pic1} className="w-[45%] max-w-[171px] inline" />
        <img src={pic2} className="w-[45%] max-w-[171px] inline"/>
        <img src={pic3} className="w-[45%] max-w-[171px] inline"/>
        <img src={pic1} className="w-[45%] max-w-[171px] inline" />
        <img src={pic2} className="w-[45%] max-w-[171px] inline"/>
        <img src={pic3} className="w-[45%] max-w-[171px] inline"/>
        <img src={pic1} className="w-[45%] max-w-[171px] inline" />
        <img src={pic2} className="w-[45%] max-w-[171px] inline"/>
        <img src={pic3} className="w-[45%] max-w-[171px] inline"/>
      </div>
    {/*

<div className="mt-[20rem]">
      <h3 className="w-[90%] text-[1.8rem] mb-[1.7rem] mx-auto ">Listen us live on Discord</h3> 
      <img src={podbox} className="w-[90%] mx-auto h-[20rem] " />
    </div>
    <div className="text-4xl flex justify-around mt-[5rem]">
      <SiSpotify />
      <SiSpotify />
      <SiSpotify />
      <SiSpotify />
      <SiSpotify />
    </div>
    */}    
    <div className="lg:hidden mt-[5rem] flex justify-center">
      <img src={vector} className="w-full"/>
      <img src={vector1} className="w-full"/>
    </div>
    <div className="flex flex-col lg:flex-row w-4/5 mx-auto lg:justify-between lg:items-center lg:mt-[15rem]"> 
      <h3 className="w-[90%] lg:hidden mx-auto font-semibold text-[1.7rem]">Listen us live on Discord</h3>
      <div className="hidden lg:flex flex-col text-[2.5rem]">
          <p>Get the chance</p>
          <p>to listen us live</p>
          <p>only on <span className="text-[#0075FF] underline">discord</span></p>
      </div>
        <div className="lg:mt-0 mt-8 w-[90%] mx-auto lg:mx-[0rem] lg:max-w-[600px]  max-w-[451.8px]">
        <div className="bg-[#212121]   mx-auto rounded-md p-[0.5rem]"> {/*podbox*/}
          <h3 className="mb-2">Short talk with a great founder Kevin Ross</h3>
          <div className="flex justify-start w-[90%] mx-auto space-x-2">
              {host.map(({bg, name}) => {
                return (
                  <div className={` py-2 rounded-md w-full max-w-[139px]`} style={{ backgroundColor: `${bg}`}}>
                    <img className="w-[3rem] mx-auto h-[3rem] rounded-full border border-black" />
                    <div className=" w-[95%] mx-auto mt-4 text-center rounded-md bg-[#BD9FAF] p-2">{name}</div>
                  </div>
                )
              })}
          </div>
        <hr className="w-[90%] mx-auto my-4" />
          <p className="text-[#929292] text-[0.9rem] w-[90%] mx-auto">in audience - {audience.length}</p>         
          <div className="w-[90%] mx-auto justify-center flex flex-wrap">
            {audience.map((name) => {
              return (<div className="mr-4 p-2 mb-2">
                <img className="w-[3rem] mb-2 mx-auto h-[3rem]  rounded-full border " />
                <p>{name}</p>
              </div>)
            })}
          </div>
          <div className="lg:hidden flex justify-between bg-gray-200 bg-opacity-10 rounded-lg p-4 items-center ">
            <h3 className="text-[1.5rem]">🔥 Fireside</h3>
            <button className="bg-[#0075FF] text-[1.3rem] rounded-md py-1 px-[1.8rem]">Join</button>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex mt-[6rem]">
      <img src={mic} className="object-fit"/>
    </div>
    <div className="font-normal w-[90%] flex justify-between mx-auto my-[4rem]">
      <h3 className="cursor-pointer">2021 © Founders Mafia</h3>
      <h3 className="cursor-pointer hidden lg:inline-flex">helo@foundersmafia.org</h3>
      <h3 >Privacy Policy</h3>
    </div>
    </div>
  )
}

export default LPodcasts;
