import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AddForm = () => {

    const [data, setData] = useState({
        name: '', designation: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const addData = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:4000/workers', data)
            console.log(response)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <input type="text" name="name" onChange={handleChange} />
            <input type="text" name="designation" onChange={handleChange} />
            <button onClick={addData}>Add Data</button>
        </div>
    );
};

export default AddForm;