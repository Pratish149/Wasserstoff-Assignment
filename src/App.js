import './App.css';
import User from './Components/First Page/User';
import Dashboard from './Components/Second Page/Dashboard';
import Topic from './Components/Third Page/Topic';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { useState } from 'react';

function App() {

  const [user, setUser] = useState("");
  const [topicName, setTopicName] = useState("");
  const [details, setDetails] = useState("");
  const [topicID, setTopicID] = useState("");
  const [topicList, setTopicList] = useState([])

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/Wasserstoff-Assignment' element={<User user={user} setUser={setUser} setTopicList={setTopicList} />} exact />
            <Route path='/dashboard' element={<Dashboard setTopicName={setTopicName} setDetails={setDetails} topicList={topicList} setTopicList={setTopicList} setTopicID={setTopicID} user={user} />} />
            <Route path='/dashboard/add_topic' element={<Topic topicName={topicName} details={details} setTopicList={setTopicList} topicList={topicList} topicID={topicID} />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;