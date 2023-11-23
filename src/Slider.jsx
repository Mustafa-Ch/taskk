import React from 'react'
import image1 from '../public/img-1.webp'
import { useState } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
function Slider() {
    const arr=[image1,image1,image1]
    const [currentSlide,setCurrentSlide]=useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };
const container={
    height:" calc(100vh - 70px)",
width:" 100%",
position: "relative",
overflow: "hidden"
}
// const slider={
//     width: '300vw',
//     display: 'flex',
//     height: '100%',
//    transition:" all 1s ease"
  
// }
  return (
    <div className='slider' style={container}>
    <div className='w-[300vw flex h-[100%] transition ease-in-out]' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
    <img src={arr[0]} className=' w- [100%]
    h-[ 100%]'/>      
    <img src={arr[1]}/>      
    <img src={arr[2]}/>     
    </div> 
    <div className=' w-[fit-content]
    absolute
    gap-10
    top-[75%]
    left-[45%]
    margin- [auto]
 flex
    bottom-[100px]'>
      <div className=' flex
    height-[ 50px]
    width-[50px]
   
    item-center
    justify-center
       cursor-pointer' onClick={prevSlide}>
        <AiOutlineArrowLeft/>
      </div>
      <div className=' flex
    height-[ 50px]
    width-[50px]
    item-center
    justify-center
       cursor-pointer' onClick={nextSlide}>
     <AiOutlineArrowRight/>
      </div>
    </div>
        </div>
  )
}

export default Slider
