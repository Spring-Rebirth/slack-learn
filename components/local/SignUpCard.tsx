'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthCardProps } from "../../data/types/types";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import type { UserForm } from "@/data/model/user-form";

export default function SignUpCard({ setCard }: AuthCardProps) {
  const { signIn } = useAuthActions();
  const [ pending, setPending ] = useState(false);
  const [ errorMsg, setErrorMsg ] = useState("");
  const [ userForm, setUserForm ] = useState<UserForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onPasswordSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {password, confirmPassword} = userForm;
    if (password !== confirmPassword) {
        setErrorMsg('The twice password do not match');
        return;
    }
    setPending(true);
    signIn('password',{...userForm, flow: 'signUp'})
    .catch(()=>{
        setErrorMsg('Something went wrong');
    })
    .finally(()=>{
        setPending(false);
    })
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Use your Email to create an account</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={onPasswordSignUp} className="space-y-3 flex flex-col mb-4">
            <Input name="userName" type="text" placeholder="User Name" disabled={pending}
                onChange={(e)=>{setUserForm( prevForm => ({
                    ...prevForm,
                    name: e.target.value
                }) ) }} />
            <Input name="email" type="email" placeholder="Email" disabled={pending}
                onChange={(e)=>{setUserForm( prevForm => ({
                    ...prevForm,
                    email: e.target.value
                }) ) }} />
            <Input name="password" type="password" placeholder="Password" disabled={pending}
                onChange={(e)=>{setUserForm( prevForm => ({
                    ...prevForm,
                    password: e.target.value
                }) ) }} />
            <Input name="confirmPassword" type="password" placeholder="Confirm Password" disabled={pending}
                onChange={(e)=>{setUserForm( prevForm => ({
                    ...prevForm,
                    confirmPassword: e.target.value
                }) ) }} />

            <Button className="w-full">Continue</Button>
        </form>

        <Separator />

        <div className="flex flex-col gap-3 mt-4">
          <Button variant={"outline"} className="w-full relative" disabled={pending}>
            <FcGoogle className="absolute left-5 size-5" />
            Sign up with Google
          </Button>
          <Button variant={"outline"} className="w-full relative" disabled={pending}>
            <FaGithub className="absolute left-5 size-5" />
            Sign up with Github
          </Button>
        </div>
      </CardContent>

      <CardFooter className="">
        <p>
          Already have an account ? &nbsp;
          <span
            className="text-sky-600 cursor-pointer hover:underline"
            onClick={() => {
              setCard("signIn");
            }}
          >
            Login
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}
