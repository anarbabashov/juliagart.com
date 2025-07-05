"use client";

import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/trpc/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { EditIcon } from "lucide-react";

interface CitySetDescriptionDialogProps {
  citySetId: string;
  currentDescription: string | null;
  cityName: string;
}

export function CitySetDescriptionDialog({
  citySetId,
  currentDescription,
  cityName,
}: CitySetDescriptionDialogProps) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState(currentDescription || "");

  const utils = trpc.useUtils();
  const updateDescription = trpc.travel.updateCitySetDescription.useMutation({
    onSuccess: () => {
      toast.success("Description updated successfully");
      setOpen(false);
      // Invalidate relevant queries to refresh the data
      utils.photos.getCitySets.invalidate();
      utils.photos.getCitySetByCity.invalidate();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateDescription.mutate({
      id: citySetId,
      description: description.trim(),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <EditIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit {cityName} Description</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a description for this city collection..."
            className="min-h-[150px]"
          />
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={updateDescription.isPending}
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 