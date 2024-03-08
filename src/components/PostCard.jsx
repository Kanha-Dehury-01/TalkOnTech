import React from "react";
import dbServices from "../appwrite/dbconfig";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featureImage }) {
    console.log(featureImage);
    return (
        <Link to={`/post/${$id}`}>
            {/* <div className="w-full shadow-2xl bg-white/10  rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img
                        src={dbServices.getFilePreview(featureImage)}
                        alt={title}
                        className="rounded-xl border-2 border-solid  border-white"
                    />
                </div>
                <h2 className="text-xl text-black duration-300 dark:text-white   font-bold">
                    {title}
                </h2>
            </div> */}
            <div className="w-full rounded-md  shadow-2xl bg-white/10">
                <div className="w-full justify-center mb-4">
                    <img
                        src={dbServices.getFilePreview(featureImage)}
                        alt={title}
                        className="h-[300px] w-full rounded-md object-cover"
                    />
                </div>  
                <div className="p-4">
                    <h2 className="text-lg font-semibold  text-black duration-300 dark:text-white ">
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
