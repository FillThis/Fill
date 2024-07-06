import React, { useState } from "react";
import { useAtom } from "jotai";
import { formDataStore } from "@/store/formData.store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { IFormData } from "@/types/form";

const EditFormName: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [formData, setFormData] = useAtom(formDataStore);
    const [newName, setNewName] = useState(formData?.formName || "");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const saveName = () => {
        const updatedFormData: IFormData = {
            ...formData,
            formDescription: formData?.formDescription!,
            fields: formData?.fields!,
            formName: newName,
        };
        setFormData(updatedFormData);
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogTrigger asChild>
                    <Button variant={"outline"} className="border-muted">
                        Edit form name
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Edit Form Name</DialogTitle>
                        <DialogDescription>
                            Change the name of the form. Click save when you're
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="w-full py-4">
                        <Label htmlFor="formName">Form Name</Label>
                        <Input
                            id="formName"
                            value={newName}
                            onChange={handleNameChange}
                            className="mt-2"
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={saveName}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditFormName;
