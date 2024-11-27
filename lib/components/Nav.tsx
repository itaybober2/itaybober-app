import Navbar from "@/lib/components/Navbar";
import {useState} from "react";

const Nav = () => {
    const [showNav, setShowNav] = useState(true);
    if (showNav) return <Navbar/>
    return null;
}

export default Nav;