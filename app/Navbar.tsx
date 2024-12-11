"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
    const { status, data: session } = useSession();

    return (
        <div className='flex bg-slate-900 p-5 space-x-5 rounded-md m-5'>
            <Link
                href='/'
                className='hover:bg-slate-700 hover:rounded-md p-2 hover:shadow-md text-white'
            >
                <h3>Home</h3>
            </Link>
            <Link
                href='/users'
                className='hover:bg-slate-700 hover:rounded-md p-2 hover:shadow-md text-white'
            >
                <h3>Users</h3>
            </Link>

            {status === "authenticated" && (
                <div className='flex container space-x-4'>
                    <div className='text-white ml-auto content-center'>
                        {session.user!.name}
                    </div>
                    <Link
                        href='/api/auth/signout'
                        className='hover:bg-slate-700 hover:rounded-md p-2 hover:shadow-md text-white'
                    >
                        <h3>Log Out</h3>
                    </Link>
                </div>
            )}
            {status === "unauthenticated" && (
                <Link
                    href={"/api/auth/signin"}
                    className='hover:bg-slate-700 hover:rounded-md p-2 hover:shadow-md text-white'
                >
                    <h3>Log In</h3>
                </Link>
            )}
        </div>
    );
};

export default NavBar;
