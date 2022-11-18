import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Topic.css'

function Topic({ topicName, details, setTopicList, topicList, topicID }) {

    const [topic, setTopic] = useState(topicName);
    const [description, setDescription] = useState(details);
    const navigate = useNavigate();

    function handleSave() {

        if( topicID !== "" ) {

            topicList[topicID-1].title = topic;
            topicList[topicID-1].description = description;
        }
        else {

            const random = Math.random();
            
            setTopicList([...topicList,{
                id: topicList.length+1,
                title: topic,
                description: description,
                percentage: random < 0.25 ? "10%" : ( random < 0.5 ? "40%" : ( random < 0.75 ? "70%" : "100%")),
            }])
        }

        navigate('/dashboard');
    }

    return(
        <div style={{margin: "30px"}}>
            <div>
                <span>Topic: </span>
                <input id="topic_name" value={topic} onChange={(e) => setTopic(e.target.value)} />
            </div>
            <div style={{margin: "50px"}}>
                <h1>Description:</h1>
                <textarea className="text_area" rows={15} cols={80} value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter text here..." />
            </div>
            <button className="save" onClick={handleSave}>Save</button>
        </div>
    )
}

export default Topic;