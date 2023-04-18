import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function JobDetails() {
    const { id } = useParams();
    const [job, setJob] = useState({});

    useEffect(() => {
        axios.get(`https://your-api.com/jobs/${id}`)
            .then(res => setJob(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>{job.title}</h1>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <Link to={`/apply/${job.id}`}>Apply Now</Link>
        </div>
    );
}

export default JobDetails;
