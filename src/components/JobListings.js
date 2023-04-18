import React from 'react';
import { Link } from 'react-router-dom';

function JobListings({ jobListings }) {
    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobListings.map(job => (
                    <li key={job.id}>
                        <Link to={`/job/${job.id}`}>
                            <h3>{job.title}</h3>
                            <p>{job.company}</p>
                            <p>{job.location}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/post-job">Post a Job</Link>
        </div>
    );
}

export default JobListings;
