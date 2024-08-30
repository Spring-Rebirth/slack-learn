import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button, buttonVariants } from '../ui/button'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

export default function LoginCard() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Login to continue</CardTitle>
            <CardDescription>Use your Email or other service to continue</CardDescription>
        </CardHeader>

        <CardContent>
            <form className='space-y-3 flex flex-col mb-4'>
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Button className='w-full'>Continue</Button>
            </form>

            <Separator />

            <div className='flex flex-col gap-3 mt-4'>
                <Button variant={'outline'} className='w-full relative'>
                    <FcGoogle className='absolute left-5 size-5'/>
                    Continue with Google
                </Button>
                <Button variant={'outline'} className='w-full relative'>
                    <FaGithub className='absolute left-5 size-5' />
                    Continue with Github
                </Button>
            </div>


        </CardContent>


        <CardFooter className=''>

        </CardFooter>
    </Card>

  )
}
