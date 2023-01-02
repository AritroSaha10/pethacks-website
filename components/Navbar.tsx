import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Logo from "@media/logo.png";

import { GoThreeBars } from "react-icons/go"

const links = [
    {
        name: "Home",
        link: "/",
        id: "home",
        priority: false
    },
    {
        name: "Team",
        link: "/team",
        id: "team",
        priority: false
    },
    /*
    {
        name: "Prizes",
        link: "/prizes",
        id: "prizes",
        priority: false
    },
    {
        name: "Schedule",
        link: "/schedule",
        id: "schedule",
        priority: false
    },
    {
        name: "Sign Up",
        link: "/sign-up",
        id: "sign-up",
        priority: true
    },
    */
];

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="bg-pet-teal py-2 lg:py-4 sticky">
            <div className="container px-4 mx-auto lg:flex lg:items-center">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <a className="flex justify-between items-center font-bold text-2xl text-white gap-2">
                            <Image src={Logo} alt="logo" width={50} height={50} />
                            <span>PetHacks</span>
                        </a>
                    </Link>

                    <button
                        className="border border-solid border-gray-600 px-3 py-1 rounded text-white opacity-50 hover:opacity-75 lg:hidden"
                        aria-label="Menu"
                        data-test-id="navbar-menu"
                        onClick={
                            () => {
                                setShowDropdown(!showDropdown);
                            }}
                        >
                        <GoThreeBars />
                    </button>
                </div>

                <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:ml-auto mt-3 lg:mt-0 text-xl`} data-test-id="navbar">
                    {
                        links.map(({ name, link, priority, id }) =>
                            <Link key={name} href={link}>
                                <a 
                                    className={`${priority ? "text-gray-100 bg-pet-turquoise hover:bg-pet-turquoise/50 hover:text-white text-center mt-1 lg:mt-0 lg:ml-1" : "text-gray-100 hover:bg-gray-400/20 hover:text-gray-100 "} p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors `}
                                    data-test-id={`navbar-${id}`}
                                >
                                    {name}
                                </a>
                            </Link>
                        )
                    }
                </div>
            </div>
        </header>
    )
}