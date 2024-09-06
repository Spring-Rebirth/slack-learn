"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateWorkspaceModal } from "@/store/useCreateWorkspaceModal";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  const handleClose = () => {
    setOpen(false);
    // TODO : clear form
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <Input
          type="text"
          placeholder="Enter a name for your workspace"
          disabled={false}
        />
        <div className="flex justify-end">
          <Button>Create</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
