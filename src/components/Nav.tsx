import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    return (
        <div className="navbar h-[15vh] bg-black z-[999]">
            <div className="flex flex-col items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">
                {/* Title */}
                <div className="text-center">
                    <h1
                        className="text-[30px] sm:text-[40px] font-bold text-[#F7D117] festive-font"
                        style={{ fontFamily: "Cursive, sans-serif" }}
                    >
                        Call: (505) 363-5509
                    </h1>
                </div>

                {/* Nav Links */}
                <ul className="lg:flex hidden text-white items-center space-x-6 xl:space-x-10 mt-4">
                    <li className="navlink">
                        <a href="/">Home</a>
                    </li>
                    <li className="navlink">
                        <a href="/about">About Us</a>
                    </li>
                    <li className="contactUs">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>

                {/* Burger menu */}
                <HiBars3BottomRight
                    onClick={openNav}
                    className="w-[2rem] text-white h-[2rem] lg:hidden mt-4"
                />
            </div>
        </div>
    );
};

export default Nav;
