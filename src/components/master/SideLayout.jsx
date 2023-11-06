import React from "react";
import { SidebarMenu } from "./menuUtils/SidebarMenu";

export default function SideLayout({ children }) {
    return (
        <main>
            <div className="h-screen flex flex-wrap">
                <div className="p-2 bg-white w-1/5  flex-col justify-between md:flex hidden border-r-2">
                    <SidebarMenu />
                </div>
                <div className="flex-1 p-4 w-4/5 ">{children}</div>
            </div>
        </main>
    );
}
