import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/dbconfig";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featureImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="flex justify-center duration-300 content-center ">
                    <div className="w-full m-1">
                        <div className="w-full">
                            <img
                                src={appwriteService.getFilePreview(
                                    post.featureImage
                                )}
                                alt={post.title}
                                className="w-4/5 m-auto rounded-md shadow-2xl object-cover"
                            />
                        </div>
                        <div className="w-full mb-6">
                            <h1 className="text-2xl duration-300 text-center text-wrap text-black dark:text-white p-5 font-bold">{post.title}</h1>
                        </div>
                        <div className="text-black duration-300 dark:text-white ">{parse(post.content)}</div>
                    </div>
                </div>
                    {isAuthor && (
                        <div className="w-[200px] m-auto mt-10">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
            </Container>
        </div>
    ) : null;
}
