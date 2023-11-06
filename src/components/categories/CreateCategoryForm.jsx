"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import SubmitBtn from "../submitBtn/SubmitBtn";

export default function CreateCategoryForm() {
    const [submit, setSubmit] = useState(false);
    const [inputValues, setInputvalues] = useState({
        name: "",
    });
    const { name } = inputValues;

    const onChangeHandler = (name, value) => {
        setInputvalues({ ...inputValues, [name]: value });
    };

    const onSubmitHandler = async (e) => {
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
        const res = await fetch("/api/dashboard/categories", config);
        const resBody = await res.json();
        setSubmit(false);
        if (resBody.status === "Fail") {
            toast.error(resBody.status);
        } else {
            console.log(resBody);
            toast.success(resBody.status);
            inputValues.name = "";
        }
    };

    return (
        <div className="flex flex-1 flex-col justify-center px-5 py-5 md:lg:py-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create Category
                </h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    onSubmit={(e) => onSubmitHandler(e)}
                    method="POST"
                >
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Category Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) =>
                                    onChangeHandler("name", e.target.value)
                                }
                                value={name}
                                id="category"
                                name="category"
                                type="text"
                                autoComplete="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <SubmitBtn
                            submit={submit}
                            text="Create Category"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
