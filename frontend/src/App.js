
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import AddForm from './components/AddForm';


function App() {
  const [workers, setWorkers] = useState()
  const [data, setData] = useState({
    name: '', designation: ''
  })

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/workers`);
      setWorkers(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  const update = (data) => {
    setData(data)
  }

  const remove = async (id) => {
    const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/workers/${id}`)
    console.log(response.data)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
console.log(data)
  const editData = async(e,id) =>{
    e.preventDefault()
    const response = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/workers/${id}`,data)
    console.log(response)
  }

  return (
    <div className="App">
      {workers && workers.map((data, index) => {
        return (<div key={index}>
          <h3>{data.name} {data.designation}</h3>
          <button onClick={() => update(data)}>Edit</button>
          <button onClick={() => remove(data._id)}>Delete</button>
        </div>)
      })}
      <AddForm />
      <h4>Edit Form</h4>
      <div>
        <input type="text" name="name" onChange={handleChange} value={data.name} />
        <input type="text" name="designation" onChange={handleChange} value={data.designation} />
        <button onClick={(e)=>editData(e,data._id)}>Add Data</button>
      </div>
    </div>
  );
}

export default App;
