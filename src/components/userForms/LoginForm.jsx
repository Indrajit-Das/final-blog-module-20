"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import SubmitBtn from "../submitBtn/SubmitBtn";

export default function LoginForm() {
    const [submit, setSubmit] = useState(false);
    const [inputValues, setInputvalues] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValues;

    const onChangeHandler = (name, value) => {
        setInputvalues({ ...inputValues, [name]: value });
    };

    const onSubmitHandler = async (e) => {
        setSubmit(true);
        e.preventDefault();
        try {
            const config = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputValues),
            };
            const res = await fetch("/api/user/login", config);
            const resBody = await res.json();
            if (
                resBody.status === "Login Fail" ||
                resBody.status === "Invalid username or password."
            ) {
                toast.error(resBody.status);
            } else {
                toast.success(resBody.status);
                window.location.href = "/";
            }
        } catch (error) {
            toast.error("Login Fail");
            console.log(error.toString());
        } finally {
            setSubmit(false);
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-20 w-auto"
                    src="/images/jhalmuri.png"
                    alt="jhalmuri"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={(e) => onSubmitHandler(e)}
                    method="POST"
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) =>
                                    onChangeHandler("email", e.target.value)
                                }
                                value={email}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <Link
                                    href="/user/send-otp"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e) =>
                                    onChangeHandler("password", e.target.value)
                                }
                                value={password}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <SubmitBtn
                            submit={submit}
                            text="Login"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not registered yet?
                    <Link
                        href="/user/register"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Register Now!
                    </Link>
                </p>
            </div>
        </div>
    );
}
