import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Edit2Icon } from "lucide-react";
import { useAtom } from "jotai";
import { formDataStore } from "@/store/formData.store";
import { IFormData } from "@/types/form";

const EditTextField = ({ index }: { index: number }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [formData, setFormData] = useAtom(formDataStore);

    const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...formData.fields];
        updatedFields[index].fieldLabel = e.target.value;
        setFormData({
            ...formData,
            fields: updatedFields,
        });
    };

    const handlePlaceholderChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const updatedFields = [...formData.fields];
        updatedFields[index].fieldPlaceholder = e.target.value;
        setFormData({
            ...formData,
            fields: updatedFields,
        });
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...formData.fields];
        updatedFields[index].fieldType = e.target.value;
        setFormData({
            ...formData,
            fields: updatedFields,
        });
    };

    const saveField = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogTrigger asChild>
                    <Button variant="outline" size={"icon"}>
                        <Edit2Icon size={20} />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Edit field</DialogTitle>
                        <DialogDescription>
                            Make changes in field schema content. Click save
                            when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="label" className="text-right">
                                Change label
                            </Label>
                            <Input
                                id="label"
                                value={formData?.fields[index].fieldLabel!}
                                onChange={handleLabelChange}
                                className="col-span-3 mr-2"
                            />
                            <Label htmlFor="placeholder" className="text-right">
                                Change hint
                            </Label>
                            <Input
                                id="placeholder"
                                value={
                                    formData?.fields[index].fieldPlaceholder!
                                }
                                onChange={handlePlaceholderChange}
                                placeholder="New Placeholder"
                                className="col-span-3 mr-2"
                            />
                            <Label htmlFor="type" className="text-right">
                                Change Type
                            </Label>
                            <Input
                                id="type"
                                value={formData?.fields[index].fieldType!}
                                onChange={handleTypeChange}
                                placeholder="New Type"
                                className="col-span-3 mr-2"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={saveField}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditTextField;
