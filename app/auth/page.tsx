'use client'
import LoginCard from '@/components/local/LoginCard'
import SignUpCard from '@/components/local/SignUpCard';
import { useState } from 'react'

export default function Auth() {
  const [authCard, setAuthCard] = useState('login');

  return (
    <div className='bg-[#5b3a59] h-screen flex justify-center items-center'>
      
      <div className='min-w-[30rem] h-auto'>
        { (authCard === 'login') ?
         <LoginCard setCard={setAuthCard} />    
         :
         <SignUpCard setCard={setAuthCard}/> }
      </div>

    </div>
  )
}
