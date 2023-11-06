"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import SubmitBtn from "../submitBtn/SubmitBtn";
import { useState } from "react";

export default function ContactDetails() {
    const [submit, setSubmit] = useState(false);

    const submitHandler = async (e) => {
        setSubmit(true);
        e.preventDefault();
    };
    return (
        <section className=" py-10">
            <div className=" flex gap-5 md:lg:gap-8">
                <div className=" w-3/12 py-6 border-r-2">
                    <div className=" py-3 text-center px-3">
                        <MapPinIcon className=" h-8 w-8 inline-block text-indigo-500" />
                        <h2 className=" text-xl font-semibold py-2">Address</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className=" py-3 text-center px-3">
                        <PhoneIcon className=" h-7 w-7 inline-block text-indigo-500" />
                        <h2 className=" text-xl font-semibold py-2">Phone</h2>
                        <p>+88 01700 000000</p>
                        <p>+88 01500 000000</p>
                    </div>
                    <div className=" py-3 text-center px-3">
                        <EnvelopeIcon className=" h-8 w-8 inline-block text-indigo-500" />
                        <h2 className=" text-xl font-semibold py-2">Email</h2>
                        <p>info.jhalmuri@gmail.com</p>
                    </div>
                </div>
                <div className=" w-9/12 px-6">
                    <div>
                        <h3 className=" text-xl text-indigo-500 font-bold">
                            Send us a massage.
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis iure repellendus iusto ea, ipsam
                            voluptates minima maxime inventore quos. Placeat?
                        </p>
                        <form
                            method="POST"
                            className=" py-6"
                            onSubmit={(e) => submitHandler(e)}
                        >
                            <input
                                type="text"
                                name="fullName"
                                autoComplete
                                required
                                placeholder="Submit your name."
                                className=" w-full border-none bg-gray-100 rounded mb-4"
                            />
                            <input
                                type="email"
                                name="email"
                                autoComplete
                                required
                                placeholder="Submit your valid email."
                                className=" w-full border-none bg-gray-100 rounded mb-4"
                            />
                            <textarea
                                name="massage"
                                rows="10"
                                className=" w-full bg-gray-100 border-none rounded"
                                placeholder="Write your massage here."
                            ></textarea>
                            <SubmitBtn
                                submit={submit}
                                text="Submit"
                                className=" bg-indigo-600 px-5 py-2 text-gray-200 rounded my-3"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
