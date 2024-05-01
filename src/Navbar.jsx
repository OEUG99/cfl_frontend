"use client";

import { Button, Navbar } from "flowbite-react";


const CFL_Navbar = () => {
    return (
        <div className="navbar">
            <Navbar fluid rounded className="shadow-2xl shadow-blue-600 bg-white">
                <Navbar.Brand href="https://flowbite-react.com" className="">
                    <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Creator Fight League</span>
                </Navbar.Brand>
                <div className="my-2">
                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>


        </div>
    );
};

export default CFL_Navbar;