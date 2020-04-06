import React, {Fragment} from 'react'
import {Topic} from "./Topic";


export const TopicList = ({topics}) => {

    return (
        topics.map((topic, i) => {
            return (
                <React.Fragment key={i}>
                    <Topic {...topic}/>
                    <hr/>
                </React.Fragment>
            )
        })
    )
}



