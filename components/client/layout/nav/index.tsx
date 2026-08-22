import Link from "next/link";
import React from "react";

const navLinks: { label: string; link: string; id: string }[] = [
    {
        label: "Home",
        link: "/",
        id: "home",
    },
    {
        label: "Products",
        link: "/products",
        id: "products",
    },
    {
        label: "About Us",
        link: "/about-us",
        id: "about-us",
    },
    {
        label: "Contact Us",
        link: "/contact-us",
        id: "contact-us",
    },
];

const NavBar = () => {
    return (
        <nav className="h-16 border border-gray-300 flex items-center justify-between px-20">
            {/* icon */}
            <div>
                <p>Ecommerce</p>
            </div>

            {/* links */}
            <div className="flex items-center gap-2">
                {navLinks.map(({ link, label, id }) => {
                    return (
                        <Link key={id} href={link}>
                            <p>{label}</p>
                        </Link>
                    );
                })}
            </div>

            {/* auth sections */}
            <div className="flex gap-3">
                <Link href={"/login"}>
                    <p
                        className="bg-sky-500 text-white min-w-30 px-1 text-center font-bold  py-3  cursor-pointer rounded-sm hover:bg-sky-400
                    active:bg-sky-600 transition-all duration-300"
                    >
                        Login
                    </p>
                </Link>
                <Link href={"/login"}>
                    <p
                        className="border border-sky-500 text-sky-500 min-w-30 px-1 text-center font-bold  py-3  cursor-pointer rounded-sm hover:bg-sky-400 hover:text-white
                    active:bg-sky-600 transition-all duration-300"
                    >
                        Sign Up
                    </p>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
