"use client";

import { useState } from "react";
import SubmitBtn from "../submitBtn/SubmitBtn";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UsersProfile(props) {
    const route = useRouter();
    const userData = props.userData;
    const [submit, setSubmit] = useState(false);
    const [inputValues, setInputvalues] = useState({
        userId: parseInt(userData.id),
        firstName: userData.firstName,
        lastName: userData.lastName,
        avater: userData.avater,
        email: userData.email,
        password: userData.password,
    });
    let { firstName, lastName, avater, email, password } = inputValues;

    // onChange Handler setup
    const onChangeHandler = (name, value) => {
        setInputvalues({ ...inputValues, [name]: value });
    };

    //onSubmit handler setup
    const onSubmitHandler = async (e) => {
        setSubmit(true);
        e.preventDefault();
        try {
            const config = {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputValues),
            };
            const res = await fetch("/api/dashboard/profile", config);
            const resBody = await res.json();
            if (resBody.status === "Fail") {
                toast.error(resBody.status);
            } else {
                setSubmit(false);
                toast.success(resBody.status);
                route.push("/dashboard");
            }
        } catch (error) {
            console.log(error.toString());
        } finally {
            setSubmit(false);
        }
    };
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Update Your Profile Information
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={(e) => onSubmitHandler(e)}
                    method="PATCH"
                >
                    <div className="flex gap-5">
                        <div>
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) =>
                                        onChangeHandler(
                                            "firstName",
                                            e.target.value
                                        )
                                    }
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={firstName}
                                    autoComplete="firstName"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) =>
                                        onChangeHandler(
                                            "lastName",
                                            e.target.value
                                        )
                                    }
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={lastName}
                                    autoComplete="lastName"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Profile Image Link
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e) =>
                                    onChangeHandler("avater", e.target.value)
                                }
                                id="avater"
                                name="avater"
                                type="text"
                                value={avater}
                                autoComplete="avater"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e) =>
                                    onChangeHandler("email", e.target.value)
                                }
                                id="email"
                                name="email"
                                type="email"
                                value={email}
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
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e) =>
                                    onChangeHandler("password", e.target.value)
                                }
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <SubmitBtn
                            submit={submit}
                            text="Update Profile"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
