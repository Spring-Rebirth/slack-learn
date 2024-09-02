'use client'
import SignInCard from '@/components/local/SignInCard'
import SignUpCard from '@/components/local/SignUpCard';
import { useState } from 'react'

export default function Auth() {
  const [authCard, setAuthCard] = useState<'signIn' | 'signUp'>('signIn');
  const handleSetCard = (value: 'signIn' | 'signUp') => {
    setAuthCard(value);
  };

  return (
    <div className='bg-[#5b3a59] h-screen flex justify-center items-center'>
      
      <div className='min-w-[30rem] h-auto'>
        { (authCard === 'signIn') ?
         <SignInCard setCard={handleSetCard}/>    
         :
         <SignUpCard setCard={handleSetCard}/> }
      </div>

    </div>
  )
}
