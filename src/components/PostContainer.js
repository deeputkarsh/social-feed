import React from 'react';
//import Post from "./post/PostCodeSplit";
import Post from "./post/Post";

export default function PostContainer ({postList = []}) {
    const postHtm = postList.map((item, index)=>{
        return <Post {...item} key={`post-${index}-id-${item.element_id}`} />;
    });
    return (
        <div className="social-posts-wrapper">
            <div className="post-list-container jd-font-roboto">
                {postHtm}
            </div>
        </div>
    );
}