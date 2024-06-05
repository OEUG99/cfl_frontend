"use client";

import { Navbar } from "flowbite-react";

const navbarStyle = {
    background: 'rgba(0, 0, 0, 0.2)', // White with 10% opacity
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Shadow with specified properties
    backdropFilter: 'blur(16.5px)', // Background blur effect
    WebkitBackdropFilter: 'blur(16.5px)', // Safari fallback for backdrop-filter
    border: '1px solid rgba(255, 255, 255, 0.18)', // Border with 18% opacity
};



const CFL_Navbar = () => {
    return (

        <div className="navbar w-full fixed z-10 ">
            <Navbar fluid  className="" style={navbarStyle}>
                <Navbar.Brand href="/" className="">
                    <img src="/CFL-logo.png" className="mr-3 h-24" alt="Creator Fight League Logo" />
                </Navbar.Brand>
                <div className="my-4">
                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About us</Navbar.Link>
                    <Navbar.Link href="#">Purchase</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>


        </div>
    );
};

export default CFL_Navbar;