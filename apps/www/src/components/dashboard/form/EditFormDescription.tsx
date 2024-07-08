/**
 * @license
 * Copyright 2024 ascen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from "react";
import { useAtom } from "jotai";
import { formDataStore } from "@/store/formData.store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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

const EditFormDescription: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [formData, setFormData] = useAtom(formDataStore);
    const [newDescription, setNewDescription] = useState(
        formData?.formDescription || "",
    );

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setNewDescription(e.target.value);
    };

    const saveDescription = () => {
        const updatedFormData: IFormData = {
            ...formData,
            formDescription: newDescription,
            fields: formData?.fields!,
            formName: formData?.formName!,
        };
        setFormData(updatedFormData);
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogTrigger asChild>
                    <Button variant={"outline"} className="border-muted">
                        Edit form description
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Edit Form Description</DialogTitle>
                        <DialogDescription>
                            Change the description of the form. Click save when
                            you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="w-full py-4">
                        <Label htmlFor="formDescription">
                            Form Description
                        </Label>
                        <Textarea
                            id="formDescription"
                            value={newDescription}
                            onChange={handleDescriptionChange}
                            className="mt-2"
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={saveDescription}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditFormDescription;
