import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function PostForm({ addJobListing }) {
    const history = useHistory();
    const [formData, setFormData] = useState({ title: '', company: '', location: '', description: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://your-api.com/jobs', formData)
            .then(res => {
                addJobListing(res.data);
                history.push('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Post a Job</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
                <label>
                    Company:
                    <input type="text" name="company" value={formData.company} onChange={handleChange} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={formData.location} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;