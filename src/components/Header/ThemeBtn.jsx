import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/themeSlice";

export default function ThemeBtn() {
    const themeC = useSelector((state)=>state.theme.themeColor)
    const dispatch = useDispatch()
    
    const cTheme = (e)=>{
        const value = e.currentTarget.checked
        if(value){
            dispatch(changeTheme("dark"))
            
        }
        else {
            dispatch(changeTheme("light"))
            
        }
    }
    

    return (
        <label className="relative inline-flex flex-col items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={cTheme}
                checked={themeC === "dark"}
            />
            
            <div className="w-7 h-4  bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <p className="text-right text-xs">{themeC}</p>
        </label>
    );
}
