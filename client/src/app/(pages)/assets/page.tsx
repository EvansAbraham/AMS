"use client"
import React, { useEffect, useState } from 'react'
import AssetsLeft from './_components/AssetsLeft'
import AssetsRight from './_components/AssetsRight'

const Assets = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex justify-between'>
        <AssetsLeft/>
        {!isSmallScreen && <AssetsRight />}
    </div>
  )
}

export default Assets