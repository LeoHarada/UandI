import React, { useEffect } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
    const [user, setUser] = useState(null);
    const { username } = useParams();
    const showToast = useShowToast();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(`/api/users/profile/${username}`);
                const data = await res.json();
                if (data.error) {
                    showToast("Error", data.error, "error");
                    return;
                }
                setUser(data);
            } catch (error) {
                showToast("Error", error, "error");
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, [username, showToast]);

    if (!user && loading) {
        return (
            <Flex justifyContent={"center"}>
                <Spinner size="xl" />
            </Flex>
        );
    }

    if (!user && !loading) return <h1>User not found</h1>;

    return (
        <>
            <UserHeader user={user} />
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
