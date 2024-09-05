"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import UserMenu from "@/components/local/UserMenu";
import { useGetWorkSpaces } from "@/api/useGetWorkSpaces";
import { useEffect, useMemo } from "react";
import { useCreateWorkspaceModal } from "@/store/useCreateWorkspaceModal";

export default function Home() {
  const { signOut } = useAuthActions();
  const { workSpaces, isLoading } = useGetWorkSpaces();
  const [open, setOpen] = useCreateWorkspaceModal();

  const workSpaceID = useMemo<string | undefined>(() => {
    return workSpaces?.[0]?._id || undefined;
  }, [workSpaces]);

  useEffect(() => {
    if (workSpaceID) {
      console.log("Redirect to workspace");
    } else if (!open) {
      setOpen(true);
    }
  }, [workSpaceID, isLoading, open, setOpen]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserMenu />
    </main>
  );
}
