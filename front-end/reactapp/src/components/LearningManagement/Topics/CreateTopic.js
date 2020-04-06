import React, {useState} from 'react'

export const CreateTopic = ({user, topics, setTopics}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleCreateTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleCreateContent = (event) => {
        setContent(event.target.value)

    }

    const handleTopicCreate = () => {
        const newTopic = {title: title, content: content, author: user}
        setTopics([newTopic, ...topics])

    }


    return (
        <form onSubmit={event => {
            return (
                event.preventDefault(),
                    handleTopicCreate()
            )
        }
        }
        >
            <label htmlFor="createTopicTitle">Topic Name : </label>
            <input type="text" name="createTopicTitle" id="createTopicTitle" value={title}
                   onChange={handleCreateTitle}/>
            <label htmlFor="createTopicContent">Topic Content : </label>
            <input type="text" name="createTopicContent" id="createTopicContent" value={content}
                   onChange={handleCreateContent}/>
            <input type="submit" value='Create Topic'/>
        </form>
    )
}