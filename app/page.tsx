'use client'
import {useAuthActions} from '@convex-dev/auth/react'
import { Button } from "@/components/ui/button";
export default function Home() {
  const {signOut} = useAuthActions();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page
      <Button 
        type="button"
        onClick={()=>signOut()}
        >
        sign out
      </Button>
    </main>
  );
}
