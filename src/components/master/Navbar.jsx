"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Service", href: "/service", current: false },
    { name: "Blog", href: "/blog", current: false },
    { name: "Contact", href: "/contact", current: false },
];
const logState = [
    { name: "Register", href: "/user/register", current: false },
    { name: "Login", href: "/user/login", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
    const [isToggle, setToggle] = useState(false);
    const clickHandler = () => {
        setToggle(!isToggle);
    };
    return (
        <Disclosure as="nav" className="bg-cyan-900 fixed w-full">
            <>
                <div className=" container mx-auto">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button
                                onClick={clickHandler}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {isToggle ? (
                                    <XMarkIcon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <Bars3Icon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link href='/'><img
                                    className=" h-9 w-auto"
                                    src="/images/jhalmuri.png"
                                    alt="jhalmuri"
                                /></Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => {
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-cyan-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {props.token === false ? (
                                <div>
                                    {logState.map((item) => {
                                        return (
                                            <Link
                                                key={item.name}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-cyan-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                )}
                                                href={item.href}
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            ) : (
                                <DropdownMenu />
                            )}
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="Link"
                                href={item.href}
                                className={classNames(
                                    item.current
                                        ? "bg-cyan-900 text-white"
                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                    "block rounded-md px-3 py-2 text-base font-medium"
                                )}
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure.Panel>
            </>
        </Disclosure>
    );
}
