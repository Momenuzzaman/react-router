import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetai = () => {
    const {id} = useParams();
    const [friend,setFriend] =useState({})
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data))
    },[])

    return (
        <div>
            <h1>{friend.name}</h1>
            <h2>{friend.email}</h2>
            <h2>{friend.company?.bs}</h2>
            <h2>{friend.company?.name}</h2>
        </div>
    );
};

export default FriendDetai;