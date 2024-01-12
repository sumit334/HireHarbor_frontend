import React from 'react'
import Input from './Input';
import { useState } from 'react';
import { saveData } from '../services/api';

const defaultData={title:"", company:"", location:"", description:""};

const JobForm = ({setShowForm}) => {

    const [formData,setFormData]=useState(defaultData);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({ ...formData , [name]: value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        await saveData(formData);

        setShowForm(false);
        setFormData(defaultData);
    }

  return (
    <div>
        <h2 className='mt-3 mb-4'>Add a Job Listing</h2>
        <form onSubmit={handleSubmit}>
            <Input 
                label="Job Title" 
                type="text"
                value={formData.title}
                id="title"
                name="title"
                onChange={handleChange}
            />
            <Input 
                label="Company" 
                type="text"
                value={formData.company}
                id="company"
                name="company"
                onChange={handleChange}
            />
            <Input 
                label="Location" 
                type="text"
                value={formData.location}
                id="location"
                name="location"
                onChange={handleChange}
            />
            <Input 
                label="Job Description" 
                type="text"
                value={formData.description}
                id="description"
                name="description"
                onChange={handleChange}
            />
            <button type="submit" className='btn btn-primary mt-2'>
                submit
            </button>
        </form>
    </div>
  )
}

export default JobForm;