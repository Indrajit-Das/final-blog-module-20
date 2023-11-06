import PlainLayout from "@/components/master/PlainLayout";
import React from "react";

export default function loading() {
    return (
        <PlainLayout>
            <div className="w-full min-h-full bg-white inset-0  flex items-center justify-center">
                <div className="loader w-16 md:lg:w-20 md:lg:h-20 h-16 border-t-4 border-indigo-600 border-solid rounded-full animate-spin"></div>
            </div>
        </PlainLayout>
    );
}
