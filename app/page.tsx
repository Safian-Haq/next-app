// import Link from "next/link";
// import React from "react";
// import ProductCard from "./components/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

// async function HomePage() {
//     const session = await getServerSession(authOptions);

//     if (session)
//         return (
//             <main>
//                 <h1>Hello {session.user!.name}</h1>
//                 <Link href='/users'>Users</Link>
//                 <ProductCard />
//             </main>
//         );
//     return (
//         <main>
//             <h1>Please login to continue</h1>
//         </main>
//     );
// }

// export default HomePage;

// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import ProductCard from "./components/ProductCard";
// // import HeavyComponent from "./components/HeavyComponent";
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
// });

// function HomePage() {
//     const [isVisible, setVisible] = useState(false);

//     return (
//         <main>
//             {isVisible && <HeavyComponent></HeavyComponent>}
//             <button className='btn' onClick={() => setVisible(!isVisible)}>
//                 Show
//             </button>
//             <h1>Hello</h1>
//             <Link href='/users'>Users</Link>
//             <ProductCard />
//         </main>
//     );
// }

// export default HomePage;

"use client";

import Link from "next/link";
import React from "react";
import ProductCard from "./components/ProductCard";

function HomePage() {
    const fetchUsers = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        return await response.json();
    };

    return (
        <main>
            <button
                className='btn'
                onClick={async () => {
                    const _ = (await import("lodash")).default;
                    const users = await fetchUsers();
                    const sorted = _.orderBy(users, ["name"]);
                    console.log(users);

                    console.log(sorted);
                }}
            >
                Show
            </button>
            <h1>Hello</h1>
            <Link href='/users'>Users</Link>
            <ProductCard />
        </main>
    );
}

export default HomePage;
