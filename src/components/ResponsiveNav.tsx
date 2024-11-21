"use client";

import React, { useState } from "react";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div>
            <Nav openNav={showNavHandler} />
            <MobileNav closeNav={closeNavHandler} showNav={showNav} />
        </div>
    );
};

export default ResponsiveNav;
