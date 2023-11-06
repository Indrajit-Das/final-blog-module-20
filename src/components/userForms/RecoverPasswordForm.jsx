"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import SubmitBtn from "../submitBtn/SubmitBtn";
import { useRouter, useSearchParams } from "next/navigation";

export default function RecoverPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const userEmail = searchParams.get("email");

    const [submit, setSubmit] = useState(false);
    const [inputValues, setInputvalues] = useState({
        email: userEmail,
        password: "",
        confirmPassword: "",
    });
    const { password, confirmPassword } = inputValues;

    const onChangeHandler = (name, value) => {
        setInputvalues({ ...inputValues, [name]: value });
    };

    const onSubmitHandler = async (e) => {
        setSubmit(true);
        e.preventDefault();
        const config = {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputValues),
        };
        const res = await fetch("/api/user/recovery", config);
        const resBody = await res.json();
        setSubmit(false);
        if (
            resBody.status === "Password dosen't match!. Try again." ||
            resBody.status === "Fail"
        ) {
            toast.error(resBody.status);
        } else {
            toast.success(resBody.status);
            router.replace("/user/login");
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Reset Your Password
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={(e) => onSubmitHandler(e)}
                    method="PATCH"
                >
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                New Password
                            </label>
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
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) =>
                                    onChangeHandler(
                                        "confirmPassword",
                                        e.target.value
                                    )
                                }
                                value={confirmPassword}
                                id="confirmPassword"
                                name="confirmPassword"
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
                            text="Reset Password"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
