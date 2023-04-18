import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function PostJobForm() {
    const history = useHistory();
    const [formData, setFormData] = useState({ title: '', company: '', location: '', description: '', requirements: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Submit the job posting to the backend
        history.push('/');
    };

    return (
        <div>
            <h1>Post a Job</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Job Title:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />

                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} />

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} />

                <label htmlFor="description">Job Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} />

                <label htmlFor="requirements">Job Requirements:</label>
                <textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleInputChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostJobForm;
