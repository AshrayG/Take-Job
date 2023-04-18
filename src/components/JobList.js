import React from 'react';
import { Link } from 'react-router-dom';

function JobList({ jobListings }) {
    return (
        <div>
            <h1>Job Board</h1>
            {jobListings.map(job => (
                <div key={job.id}>
                    <Link to={`/jobs/${job.id}`}>
                        <h2>{job.title}</h2>
                    </Link>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                    <Link to={`/apply/${job.id}`}>
                        <button>Apply Now</button>
                    </Link>
                </div>
            ))}
            <Link to="/post">
                <button>Post a Job</button>
            </Link>
        </div>
    );
}

export default JobList;
