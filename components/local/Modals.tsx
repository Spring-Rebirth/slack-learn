"use client";
import { CreateWorkspaceModal } from "./createWorkspaceModal";
import { useState, useEffect } from "react";

const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
};

export { Modals };
