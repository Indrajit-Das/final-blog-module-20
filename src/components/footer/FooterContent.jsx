"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import SubmitBtn from "../submitBtn/SubmitBtn";
import { Input, Button } from "@material-tailwind/react";

export default function FooterContent() {
    const [submit, setSubmit] = useState(false);
    const [inputValues, setInputValues] = useState({
        email: "",
    });
    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };
    const onSubmitHandler = async () => {
        setSubmit(true);
        try {
            const config = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputValues),
            };
            const res = await fetch("/api/footer", config);
            let resBody = await res.json();

            if (
                resBody.status === "Server Error!" ||
                resBody.status ===
                "Email already exists. Try again with another email!"
            ) {
                toast.error(resBody.status);
            } else {
                toast.success(resBody.status);
                setInputValues({ email: "" });
            }
        } catch (e) {
            console.log(e.toString());
        } finally {
            setSubmit(false);
        }
    };

    return (
        <footer className="w-full bg-cyan-900 py-5">
            <div className=" container mx-auto grid grid-flow-row md:lg:grid-flow-col md:lg:grid-cols-3 px-5 gap-6">
                <div className=" text-center md:lg:text-left ">
                    <h2 className=" text-gray-300 text-lg font-semibold mb-3 ">
                        Jhalmuri Digital Media
                    </h2>
                    <p className=" text-gray-300 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae, laborum.
                    </p>
                    <div className=" mt-5">
                        <h3 className=" text-gray-300 pb-2">Social Links:</h3>
                        <div className="flex gap-5 justify-center md:lg:justify-start">
                            <Link href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className=" fill-gray-200 hover:fill-sky-600"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className=" fill-gray-200 hover:fill-red-600"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className=" fill-gray-200 hover:fill-blue-700"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className=" text-gray-300 text-lg font-semibold mb-2 md:lg:text-center">
                        Quick Search
                    </h2>
                    <div className=" flex flex-col w-20 mx-auto">
                        <Link
                            href="#"
                            className="  text-gray-300 hover:text-indigo-500"
                        >
                            About us
                        </Link>
                        <Link
                            href="#"
                            className="  text-gray-300 hover:text-indigo-500"
                        >
                            Contact
                        </Link>
                        <Link
                            href="#"
                            className="  text-gray-300 hover:text-indigo-500"
                        >
                            Jobs
                        </Link>
                        <Link
                            href="#"
                            className="  text-gray-300 hover:text-indigo-500"
                        >
                            Press kit
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-col">
                    <h2 className=" text-gray-300 text-lg font-semibold mb-3 ">
                        Ready For Jhalmuri Blog?
                    </h2>
                    <p className=" text-gray-400 ">
                        Join our online community for free. No spam ever.
                    </p>
                    <div className="relative flex w-full mt-3">
                        <Input
                            type="email"
                            label="Email Address"
                            value={inputValues.email}
                            onChange={(e) =>
                                onChangeHandler("email", e.target.value)
                            }
                            className="pr-20"
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                        <Button
                            onClick={() => {
                                onSubmitHandler();
                            }}
                            size="sm"
                            color={inputValues.email ? "indigo" : "gray"}
                            disabled={!inputValues.email}
                            className="!absolute right-1 top-1 rounded"
                        >
                            Subcribe
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
