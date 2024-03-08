import React from "react";
import { Logo, LogoutBtn, Container, ThemeBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";


function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        // {
        //     name: "All Posts",
        //     slug: "/all-posts",
        //     active: authStatus,
        // },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];


    return (
        <header className="py-2 shadow-2xl duration-300 dark:bg-gray-900 dark:text-white bg-white/60 text-black ">
            <nav className="flex  flex-wrap md-flex-col justify-center">
                <div className="mr-4">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <ul className="flex ml-auto">
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name} className="ml-5">
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className="inline-block font-medium px-4  py-1 duration-300  dark:hover:bg-gray-600 hover:bg-white rounded-2xl "
                                >
                                    {item.name}
                                </button>
                            </li>
                        ) : null
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
                <div className=" mt-1 mx-4">
                    <ThemeBtn />
                </div>
            </nav>
        </header>
    );
}

export default Header;
