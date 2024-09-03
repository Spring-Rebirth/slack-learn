'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// cSpell:word lucide
import { Loader, LogOut } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useCurrentUser } from "@/api/useCurrentUser";

export default function UserMenu() {
  const { signOut } = useAuthActions();
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader className="size-4 animate-spin text-muted-foreground"/>
  }

  if (!user) {
    return null;
  }

  const {image, name, email} = user;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="hover:opacity-75 size-16">
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent side="right" className="w-60">
          
          <DropdownMenuLabel className="flex flex-col">
            <span>{name}</span>
            <span>{email}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>

          <DropdownMenuItem onClick={signOut}>
            <LogOut size={16} className="mr-3"/>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}
