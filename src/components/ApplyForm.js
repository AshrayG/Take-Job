import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApplyForm() {
    const { id } = useParams();
    const [formData, setFormData] = useState({ name: '', email: '', resume: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('resume', formData.resume);
        axios.post(`https://your-api.com/jobs/${id}/apply`, data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Apply for Job</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Resume:
                    <input type="file" name="resume" onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ApplyForm;
