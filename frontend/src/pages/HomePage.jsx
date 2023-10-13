import React from "react";

const HomePage = () => {
    return (
        <Link to={"/leoharada"}>
            <Flex w={"full"} justifyContent={"center"}>
                <Button mx={"auto"}>Visit Profile Page</Button>
            </Flex>
        </Link>
    );
};

export default HomePage;
