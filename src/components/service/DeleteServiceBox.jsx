"use client";
import { FaceFrownIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";

export async function DeleteServiceBox({ serviceUtils }) {
    let { id, title } = serviceUtils;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const deleteServiceHandler = async () => {
        const config = {
            method: "DELETE",
        };
        const res = await fetch(`/api/dashboard/service/?id=${id}`, config);
        const resBody = await res.json();

        if (resBody.status === "Fail") {
            toast.error(resBody.status);
        } else {
            toast.success(resBody.status);
            window.location.reload();
        }
    };

    return (
        <>
            <TrashIcon
                onClick={handleOpen}
                className=" h-4 w-4 cursor-pointer hover:text-red-600"
            />

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>
                    <FaceFrownIcon className="h-8 w-8" /> Caution!
                </DialogHeader>
                <DialogBody>
                    You are trying to delete{" "}
                    <span className=" text-red-600">{title}</span> service. Are
                    you sure to continue the process?
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleOpen}
                    >
                        <span onClick={() => deleteServiceHandler()}>
                            Confirm
                        </span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
