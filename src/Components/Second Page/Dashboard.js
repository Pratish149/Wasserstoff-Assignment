import React, { useEffect } from "react";
import './Dashboard.css'
import { CgAddR } from 'react-icons/cg'
import { useNavigate } from "react-router";

function Dashboard({ setTopicName, setDetails, topicList, setTopicList, setTopicID, user }) {

    const navigate = useNavigate();

    function handleAddTopic(title, text, id) {
        
        setTopicName(title);
        setDetails(text);
        setTopicID(id);
        navigate('/dashboard/add_topic');
    }

    function handleLogout() {

        setTopicList([]);
        navigate('/Wasserstoff-Assignment')
    }

    useEffect(() => {
        localStorage.setItem(user, JSON.stringify(topicList))
      },[topicList,user]);
    
    return(
        <div>
            <span className="header">Dashboard</span>
            <div className="logout">
                <button onClick={handleLogout}>Log Out</button>
            </div>
            <div className="container">
                <div className="addtopic" onClick={() => handleAddTopic("","","")}><CgAddR /> Add Topic</div>
                <div className="topic-container">
                    <h1>TOPIC LIST:</h1>
                    <div>
                        {
                            topicList.map((item) => (
                                <p key={item.id} className="item" onClick={() => handleAddTopic(item.title, item.description, item.id)}>{item.title + ": " + item.percentage}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
