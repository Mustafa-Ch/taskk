import React from 'react'
import image from '../public/img-1.webp'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './SliceReducer'
function Card() {
const obj=[
    {
        id:1,
        img:image,
        name:"burgers"
    },
    {
        id:2,
        img:image,
        name:"burgers"
    },
    {
        id:3,
        img:image,
        name:"burgers"
    },
    {
        id:4,
        img:image,
        name:"burgers"
    },
    {
        id:5,
        img:image,
        name:"burgers"
    },
    {
        id:6,
        img:image,
        name:"burgers"
    },
]
const dispatch=useDispatch();
const handler=(product)=>{
dispatch(add(product))
}
  return (
    <div className='flex flex-wrap gap-10 justify-center'>
     {
        obj.map((item)=>{
           return(
            <div class="max-w-sm rounded overflow-hidden shadow-lg mt-20">
  <img class="w-full" src={item.img} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{item.name}</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 ">
   <button className='bg-yellow-400 h-[50px] w-[150px] ' onClick={()=>handler(item)}>Add To Cart</button>
  </div>
</div>
           )
        })
     }


    </div>
  )
}

export default Card
