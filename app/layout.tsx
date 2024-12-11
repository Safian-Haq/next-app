import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./Navbar";
import AuthProvider from "./auth/provider";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "My React App",
    description: "React app as part of tutorial",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' data-theme='winter' className='bg-slate-200 '>
            <body className={roboto.className}>
                <AuthProvider>
                    <NavBar></NavBar>
                    <main className='p-5 '>
                        <div className='p-5 rounded-lg bg-white'>
                            {children}
                        </div>
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
