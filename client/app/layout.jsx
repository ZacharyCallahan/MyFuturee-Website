"use client";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Link from "next/link";
import "./globals.css";
import { Rubik } from "next/font/google";
import pfp from "../public/future.jpg";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });

const theme = createTheme({});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <title>MyFuturee</title>
            </head>
            <body className={`${rubik.className} `}>
                <ThemeProvider theme={theme}>
                    <nav class="fixed top-0 w-full border-b-[1px] border-white border-opacity-30 backdrop-blur-sm py-2">
                        <div class="flex items-center justify-between w-5/6 m-auto text-white sm:text-2xl md:text-4xl">
                            <Link class="active" href="/">
                                Home
                            </Link>
                            <Link href="/about">About</Link>
                            <Image
                                src={pfp}
                                alt="profile_logo"
                                width={100}
                                height={100}
                                className="w-[5%] h-full hidden md:block rounded-md"
                            />
                            <Link href="/portfolio">Portfolio</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </nav>
                    {children}
                    <footer className="border-t-[1px] border-white border-opacity-30 bg-future-light">
                        <div className="w-5/6 m-auto text-center py-5 text-white font-medium">
                            <p>Copyright © 2022 All Rights Reserved.</p> <br />
                            <p>Published & Developed by Zachary Callahan.</p>
                        </div>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
