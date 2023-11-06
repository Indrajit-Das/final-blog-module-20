"use client";
import { ErrorToast, SuccessToast } from "@/utils/formHealper";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import SubmitBtn from "../submitBtn/SubmitBtn";

export default function DropdownMenu() {
    const [submit, setSubmit] = useState(false);
    const onLogout = async () => {
        setSubmit(true);
        const res = await fetch("http://localhost:3000/api/user/login", {
            method: "GET",
        });
        const resBody = await res.json();

        if (resBody.status === "Logout Success") {
            SuccessToast(resBody.status);
            window.location.href = "/";
        } else {
            ErrorToast("Request Fail");
        }
    };
    return (
        <div className=" flex">
            <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                <span className="absolute -inset-1.5" />
                <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Menu as="div" className="relative ml-3">
                <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <img
                            className="h-8 w-8 rounded-full"
                            src="data:image/jpeg;base64,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"
                            alt=""
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            <Link
                                href="/dashboard"
                                className="block px-4 py-2 text-sm text-gray-700"
                            >
                                Dashboard
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                href="/dashboard/profile"
                                onTouchStartCapture="#"
                                className="block px-4 py-2 text-sm text-gray-700"
                            >
                                Update Profile
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <SubmitBtn
                                onClick={onLogout}
                                submit={submit}
                                text="Logout"
                                className=" w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            />
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
