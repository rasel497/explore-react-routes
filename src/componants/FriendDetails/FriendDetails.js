import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);



    return (
        <div>
            {/* path: '/friend/:friendId': use korate dynamic hoyegelo */}
            <h2>Details About: {friend.name}</h2>
            <p>Call him/her: {friend.phone}</p>
            <h4>Everything you need to know about this person.</h4>
        </div>
    );
};

export default FriendDetails;