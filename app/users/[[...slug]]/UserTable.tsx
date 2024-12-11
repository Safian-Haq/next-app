import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserTableProps {
    sortOrder: string;
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-cache",
    });
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();
    // console.log(sort(users).asc((u) => u.name));

    const sortedUsers =
        sortOrder === "email"
            ? sort(users).asc("email")
            : sort(users).asc("name");

    return (
        <table className='table '>
            <thead>
                <tr>
                    <th>
                        <Link href='/users?sortOrder=name'>Name</Link>
                    </th>
                    <th>
                        <Link href='/users?sortOrder=email'>Email</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
