import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/dbconfig";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents);
        }
    });
    },[])
    
    return (
        <div className="w-full py-8">
            <Container>
                <h1 className="text-center text-2xl font-semibold dark:text-white">All Posts</h1>
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

export default AllPosts;
