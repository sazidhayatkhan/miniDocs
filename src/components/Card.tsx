import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import { motion } from "motion/react"
function Card({reference}) {
  return (
    <motion.div 
        drag 
        dragConstraints={reference} 
        whileDrag={{ scale: 1.1}} 
        dragElastic={0.2}
        dragTransition={{bounceStiffness:600,bounceDamping:10}}
        className='relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
    >
        <FaRegFileLines/>
        <p className='text-sm font-semibold mt-5 leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='px-8 flex justify-between items-center mb-5'>
                <h5>.4mb</h5>
                <span className='text-lg'>
                    <MdDownloadForOffline/>
                </span>
            </div>
            <div className='bg-green-600 w-full py-3'>
                <p className='text-center text-sm font-semibold'>Download Now</p>
            </div>

        </div>
    </motion.div>
  )
}

export default Card