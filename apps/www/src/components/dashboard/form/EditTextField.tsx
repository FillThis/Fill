/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

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
import { Switch } from "@/components/ui/switch";
import FieldRadioGroup from "./FieldRadioGroup";

const EditTextField = ({ index }: { index: number }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [formData, setFormData] = useAtom(formDataStore);
    if (!formData) {
        return null;
    }

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

    const handleTypeChange = (value: string) => {
        const updatedFields = [...formData.fields];
        updatedFields[index].fieldType = value;
        setFormData({
            ...formData,
            fields: updatedFields,
        });
    };

    const handleRequiredChange = (checked: boolean) => {
        const updatedFields = [...formData.fields];
        updatedFields[index].required = checked;
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
                    <Button
                        variant="outline"
                        className="bg-transparent"
                        size={"icon"}
                    >
                        <Edit2Icon size={16} />
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
                    <div className="w-full py-4">
                        <div className="flex w-full flex-col gap-4">
                            <Label htmlFor="label">Change Label</Label>
                            <Input
                                id="label"
                                value={formData.fields[index].fieldLabel!}
                                onChange={handleLabelChange}
                                className="col-span-3 mr-2"
                            />
                            <Label htmlFor="placeholder" className="mt-4">
                                Change Hint
                            </Label>
                            <Input
                                id="placeholder"
                                value={formData.fields[index].fieldPlaceholder!}
                                onChange={handlePlaceholderChange}
                                placeholder="New Placeholder"
                                className="col-span-3 mr-2"
                            />
                            <FieldRadioGroup
                                name="fieldType"
                                label="Change Type"
                                value={formData.fields[
                                    index
                                ].fieldType!.toString()}
                                onChange={handleTypeChange}
                            />
                            <div className="flex items-center gap-4">
                                <Switch
                                    checked={formData.fields[index].required}
                                    onCheckedChange={handleRequiredChange}
                                />
                                <Label htmlFor="required" className="t">
                                    Required
                                </Label>
                            </div>
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
