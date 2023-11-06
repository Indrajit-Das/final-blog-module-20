import { DeleteCategoryBox } from "./DeleteCategoryBox";

export default function AllCategories(props) {
    return (
        <div className=" w-full border rounded p-5">
            <h1>Your Categories</h1>

            <table className="w-full text-left text-sm">
                <thead className=" uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            <span>Delete</span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            <span>Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item) => {
                        return (
                            <tr
                                key={item?.id}
                                className=" border-b hover:bg-gray-50 "
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap "
                                >
                                    {item?.id}
                                </th>
                                <td className="px-6 py-4">{item?.name}</td>
                                <td className="px-6 py-4">
                                    <DeleteCategoryBox
                                        categoryName={item?.name}
                                    />
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 hover:underline inline-block"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                            />
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
