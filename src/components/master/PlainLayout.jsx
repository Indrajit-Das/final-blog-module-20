import React from "react";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import { cookies } from "next/headers";

export default function PlainLayout(props) {
    const cookieStore = cookies();
    const token = !!cookieStore.get("token");

    return (
        <main>
            <Navbar token={token} />
            <Toaster position="top-center" />
            <div className=" pt-20">{props.children}</div>
            <Footer />
        </main>
    );
}
