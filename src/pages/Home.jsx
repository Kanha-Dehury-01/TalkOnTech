import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/dbconfig";
import authService from "../appwrite/auth";
import { Container, PostCard } from "../components";

function Home() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState("");

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    useEffect(() => {
        authService.getCurrentUser().then((user) => {
            if (user) {
                setUser(user.name);
            }
        });
    }, []);

    console.log(user);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full h-80 ">
                            <h1 className="text-2xl duration-300 font-bold dark:text-white hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <div className="w-full py-8">
            <Container>
                <div className="text-center -m-4 mb-6 dark:text-white">
                    <p className="  text-xl">
                        Hi, <span className="font-bold text-2xl">{user}</span>
                    </p>
                    <p className="mt-3 text-md">Enjoy reading our blogs. Add your blog and reachout more people.</p>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 my-3 w-[400px]">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
