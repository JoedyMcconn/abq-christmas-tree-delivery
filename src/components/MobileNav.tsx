import React from "react";
import { ImCross } from "react-icons/im";

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div>
            {/* Overlay */}
            <div
                className={`fixed ${navOpenStyle} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`}
            ></div>
            {/* Navlinks */}
            <ul
                className={`text-white ${navOpenStyle} fixed flex top-0 items-center justify-center flex-col h-[100vh] transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-[#F7D117] space-y-10 z-[10006]`}
            >
                <li className="mobilenav text-[25px] sm:text-[30px]">
                    <a href="/">Home</a>
                </li>
                <li className="mobilenav text-[25px] sm:text-[30px]">
                    <a href="/about">About Us</a>
                </li>
                <li className="mobilenav text-[25px] sm:text-[30px]">
                    <a href="/services">Our Services</a>
                </li>
                <li className="mobilenav text-[25px] sm:text-[30px]">
                    <a href="/contact">Contact</a>
                </li>
                {/* Cross Icon for closing navbar */}
                <ImCross
                    onClick={closeNav}
                    className="absolute top-[-1.4rem] right-[1.4rem] w-[1.4rem] h-[1.4rem] text-white"
                />
            </ul>
        </div>
    );
};

export default MobileNav;
