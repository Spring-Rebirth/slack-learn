'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button, buttonVariants } from '../ui/button'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { useAuthActions } from "@convex-dev/auth/react";
import { AuthCardProps } from '../../data/types/types'
// cSpell:ignore lucide
import { TriangleAlert } from "lucide-react"
import type { UserForm } from "@/data/model/user-form";

export default function SignInCard({ setCard }:AuthCardProps) {

    const { signIn } = useAuthActions();
    const [pending, setPending] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');
    const [ userForm, setUserForm ] = useState<UserForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    const onProviderSignIn = (value: 'github' | 'google') => {
        setPending(true);
        signIn(value).finally(()=>{
            setPending(false);
        })
    }

    const onPasswordSignIn =(event: React.FormEvent<HTMLFormElement>) => {
        setPending(true);
        event.preventDefault();
        signIn('password', { ...userForm, flow: 'signIn'})
        .catch(()=>{
            setErrorMsg('Invalid email or password')
        })
        .finally(()=>{
            setPending(false);
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Login to continue</CardTitle>
                <CardDescription>Use your Email or other service to continue</CardDescription>
            </CardHeader>

            {errorMsg && (
                <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 
                                text-sm text-destructive mb-6 mx-6">
                    <TriangleAlert className="size-4" />
                    <p>{errorMsg}</p>                    
                </div>
            )}
            <CardContent>
                <form 
                    onSubmit={onPasswordSignIn}
                    className='space-y-3 flex flex-col mb-4'>
                    <Input disabled={pending} type='email' placeholder='Email'
                        onChange={(e)=>{setUserForm( prevForm => ({
                            ...prevForm,
                            email: e.target.value
                    }) ) }} /> 
                    <Input disabled={pending} type='password' placeholder='Password'
                        onChange={(e)=>{setUserForm( prevForm => ({
                            ...prevForm,
                            password: e.target.value
                    }) ) }} />
                    <Button disabled={pending} className='w-full'>Continue</Button>
                </form>

                <Separator />

                <div className='flex flex-col gap-3 mt-4'>
                    <Button 
                        disabled={pending}
                        variant={'outline'} 
                        className='w-full relative'
                        onClick={() => { onProviderSignIn('google')
                        
                     }}
                    >
                        <FcGoogle className='absolute left-5 size-5'/>
                        Continue with Google
                    </Button>
                    <Button 
                        disabled={pending}
                        variant={'outline'} 
                        className='w-full relative'
                        onClick={() => { onProviderSignIn('github') }} >
                        <FaGithub className='absolute left-5 size-5' />
                        Continue with Github
                    </Button>
                </div>
            </CardContent>

            <CardFooter className=''>
                <p>Don&apos;t have an account ? &nbsp;
                <span 
                    className='text-sky-600 cursor-pointer hover:underline'
                    onClick={()=>{setCard('signUp')}}
                >Sign up</span></p>
            </CardFooter>
        </Card>

    )
}
