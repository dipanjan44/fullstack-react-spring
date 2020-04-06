import React, {Component,useState} from 'react'
import {Login} from './User/Login'
import {Logout} from "./User/Logout";
import {Register} from "./User/Registration";
import {CreateTopic} from "./Topics/CreateTopic";
import {TopicList} from "./Topics/TopicList";

const defaultTopics = [
    {
        title: 'Maths',
        content: 'Learning Algebra',
        author: 'Amartya'
    },
    {
        title: 'Science',
        content: 'Learning about trees and flowers',
        author: 'Lopamudra'
    }

]



export const LandingPage = () => {

    const [topics,setTopics]=useState(defaultTopics)
    const [user,setUser]=useState('')

    if (user)
    {
        return(
            <React.Fragment>
                <Logout user={user} setUser={setUser}/>
                <CreateTopic user={user} topics={topics} setTopics={setTopics} />
                <TopicList topics={topics}/>
            </React.Fragment>
        )

    } else
        {
        return (
            <React.Fragment>
                <Login setUser={setUser}/>
                <Register setUser={setUser}/>
            </React.Fragment>
        )
    }
};
