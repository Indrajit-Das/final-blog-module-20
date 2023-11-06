import SideLayout from "@/components/master/SideLayout";
import { headers } from "next/headers";

export default function Dashboard() {
    // const headerlist = headers();
    // let firsName = headerlist.get("firstName");
    // let id = headerlist.get("id");
    // let email = headerlist.get("email");
    // console.log("id-->", id, ",Email-->", email, ",FirstName-->", firsName);
    return (
        <SideLayout>
            <h1>Dashboard</h1>
        </SideLayout>
    );
}
