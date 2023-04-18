import React, { useState } from 'react';
import JobList from './JobList';
import PostJobForm from './PostJobForm';

function JobBoard() {
    const [jobs, setJobs] = useState([]);

    const addJob = (job) => {
        setJobs([...jobs, job]);
    };

    return (
        <div>
            <PostJobForm addJob={addJob} />
            <JobList jobs={jobs} />
        </div>
    );
}

export default JobBoard;
