"use client";
import Link from "next/link";
import SubmitBtn from "../submitBtn/SubmitBtn";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function VerifyEmailForm() {
    const route = useRouter();
    const [submit, setSubmit] = useState(false);
    const [inputValues, setInputValues] = useState({
        email: "",
    });
    const { email } = inputValues;

    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };
    const submitHandler = async (e) => {
        setSubmit(true);
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputValues),
        };
        const res = await fetch("/api/user/recovery", config);
        const resBody = await res.json();
        if (resBody.status === "Invalid User" || resBody.status === "Fail") {
            toast.error(resBody.status);
        } else {
            toast.success(resBody.status);
            route.replace(`/user/verify-otp/?email=${email}`);
        }
    };
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Submit your user email here!
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    method="POST"
                    onSubmit={submitHandler}
                >
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

                    <div>
                        <SubmitBtn
                            submit={submit}
                            text="Submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Remember your password?
                    <Link
                        href="/user/login"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Login here!
                    </Link>
                </p>
            </div>
        </div>
    );
}
