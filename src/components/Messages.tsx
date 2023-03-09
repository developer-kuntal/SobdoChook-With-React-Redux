import React from 'react'
import { gql, useSubscription } from '@apollo/client';
import { useState } from 'react';

const MESSAGES_SUBSCRIPTION = gql`
    subscription SubscribeMessage {
        messageCreated {
            text
            createdBy
        }
    }
`;

const Messages = () => {
    
    const [comments, setComments] = useState([]);
    const { data, loading } = useSubscription(
        MESSAGES_SUBSCRIPTION,
        {
            onSubscriptionData: (data) => {
                const message = data.subscriptionData.data.messageCreated;
                console.log("Message: ",message);
                setComments(comments => [...comments, message] as any);
                console.log("Message Recieved...");
            }
        }
    )
    console.log("Data: ",data," Loading... ",loading);
    const listItems = comments.map((comment: any, index) => {
        return(<li key={index}>
        <p>
            <strong>{comment.createdBy}</strong> {comment.text}
        </p>
        </li>)
    }) 
    return (
        <div>Message:
            <ul>{listItems}</ul>
        </div>
    )
}

export default Messages