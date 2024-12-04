import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";


const NavBar = () => {
    const [open, SetOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" },
    ];

    return (
        <nav className=" flex 
        bg-purple-900  m-auto md:py-6 py-3">
            <div className="text-3xl md:hidden flex items-center justify-center ml-5"
                onClick={() => SetOpen(!open)}>
                {
                    open === true ? <IoCloseSharp></IoCloseSharp>
                        :
                        <AiOutlineMenu ></AiOutlineMenu>
                }
            </div>
            <ul className={`md:flex items-center 
              md:ml-8  
            
                 ${open ? '' : 'hidden'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;