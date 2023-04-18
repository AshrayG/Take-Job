import React, { useState, useEffect } from 'react';
import JobListings from './components/JobListings';
import JobDetails from './components/JobDetails';
import ApplyForm from './components/ApplyForm';
import PostForm from './components/PostForm';
import JobBoard from './components/JobBoard';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  const [jobListings, setJobListings] = useState([]);
  <div>
    <h1>Job Board App</h1>
    <JobBoard />
  </div>
  useEffect(() => {
    axios.get('https://your-api.com/jobs')
      .then(res => setJobListings(res.data))
      .catch(err => console.log(err));
  }, []);

  const addJobListing = (job) => {
    setJobListings([...jobListings, job]);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <JobListings jobListings={jobListings} />
          </Route>
          <Route path="/job/:id">
            <JobDetails />
          </Route>
          <Route path="/apply/:id">
            <ApplyForm />
          </Route>
          <Route path="/post-job">
            <PostForm addJobListing={addJobListing} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
