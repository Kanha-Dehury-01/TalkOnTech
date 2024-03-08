import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () =>
        authService.logout().then(() => dispatch(logout()));
    return (
        <div className="">
            <button
                className="inline-block px-4 py-1 font-medium duration-300  dark:hover:bg-gray-600 hover:bg-white rounded-2xl"
                onClick={logoutHandler}
            >
                Logout
            </button>
        </div>
    );
}

export default LogoutBtn;
