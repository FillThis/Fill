import React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateForm = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusIcon className="mr-2"></PlusIcon>Create new
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>Generate a form</DialogTitle>
                    <DialogDescription>
                        Write a specific subject for generate a customized form.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="name" className="text-left">
                            Subject
                        </Label>
                        <Textarea
                            id="name"
                            placeholder="e.g. Generate a form for student trip in Gujarat."
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CreateForm;
