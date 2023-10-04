import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
    return (
        <>
            <UserHeader />
            <UserPost
                likes={400}
                replies={231}
                postImg="/post1.png"
                postTitle="Kim and Kanye broke up!"
            />
            <UserPost
                likes={345}
                replies={453}
                postImg="/post2.png"
                postTitle="Dua Lipa concert coming to LA"
            />
            <UserPost
                likes={733}
                replies={236}
                postImg="/post3.png"
                postTitle="Travis Kelce and Taylor Swift are dating!"
            />
            <UserPost
                likes={95}
                replies={11}
                postTitle="This is my first thread"
            />
        </>
    );
};

export default UserPage;
