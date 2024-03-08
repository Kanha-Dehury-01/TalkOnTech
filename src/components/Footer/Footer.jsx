import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";

function Footer() {
    const date = new Date();

    return (
        <section className="py-7 shadow duration-500 dark:bg-gray-900 dark:text-white bg-white/60 text-black ">
            <div className="flex flex-col justify-around align-middle sm:flex-row sm:justify-center sm:align-center gap-5  ">
                <div className="md:w-1/4 text-center px-5 py-1">
                    <Logo />
                </div>
                <div className="">
                    <ul className=" flex flex-wrap flex-col sm:flex-row  items-center">
                        <li className="px-5 py-1">
                            <a
                                className="font-medium duration-300  dark:hover:text-gray-300 hover:text-gray-800"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li className="px-5 py-1">
                            <a
                                className="font-medium duration-300 dark:hover:text-gray-300 hover:text-gray-800"
                                href="#"
                            >
                                Terms of Service
                            </a>
                        </li>

                        <Link to="/contact-us">
                            <li className="px-5 py-1">
                                <a
                                    className="font-medium duration-300 dark:hover:text-gray-300 hover:text-gray-800"
                                    href="#"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="md:w-1/4">
                    <ul className="flex flex-wrap justify-evenly ">
                        <li>
                            <a
                                className="1/3"
                                href="https://www.instagram.com/kanha.dehury.20/"
                            >
                                <svg
                                    className="h-6 w-6 dark:hover:text-gray-300 hover:text-gray-800 "
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    {" "}
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    />{" "}
                                    <rect
                                        x="4"
                                        y="4"
                                        width="16"
                                        height="16"
                                        rx="4"
                                    />{" "}
                                    <circle cx="12" cy="12" r="3" />{" "}
                                    <line
                                        x1="16.5"
                                        y1="7.5"
                                        x2="16.5"
                                        y2="7.501"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                className="1/3"
                                href="https://twitter.com/kanha_dehury"
                            >
                                <svg
                                    className="h-6 w-6 dark:hover:text-gray-300 hover:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    {" "}
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                className="1/3"
                                href="https://www.linkedin.com/in/kanha-dehury-a3b7301b5/"
                            >
                                <svg
                                    class="h-6 w-6 dark:hover:text-gray-300 hover:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    {" "}
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                                    <rect x="2" y="9" width="4" height="12" />{" "}
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
                ©Copyright {date.getFullYear()}. All Rights Reserved by
                TalkOnTech.
            </p>
        </section>
    );
}

export default Footer;
