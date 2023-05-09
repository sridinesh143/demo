import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {

    // const [sid, setSid] = useState("");
    // const [description, setDescription] = useState("");
    // const [email, setEmail] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [passportNumber, setPassportNumber] = useState("");
    // const [stuatus, setStuatus] = useState("");

    const [student, setStudents] = useState({
        
        "description": "",
        "email": "",
        "fname": "",
        "lname": "",
        "passPortNumber": ""

    })

    const addStudent = (e) => {

        axios.post("http://localhost:8081/stdents", student).then(res => setStudents(res.data))
    }


    return (
        <div className='container'>
            <div className='card'>
                <div className='card-head'>
                    <h1>Registration </h1>
                </div>
                <div className='card-body'>
                    <input type='text' className='form-control' placeholder='Enter Description' onChange={(e) => { setStudents({ ...student, description: e.target.value }) }} /><br />
                    <input type='text' className='form-control' placeholder='Enter Email' onChange={(e) => { setStudents({ ...student, email: e.target.value }) }} /><br />
                    <input type='text' className='form-control' placeholder='Enter Firstname' onChange={(e) => { setStudents({ ...student, fname: e.target.value }) }} /><br />
                    <input type='text' className='form-control' placeholder='Enter Lastname' onChange={(e) => { setStudents({ ...student, lname: e.target.value }) }} /><br />
                    <input type='text' className='form-control' placeholder='Enter Passportnumber' onChange={(e) => { setStudents({ ...student, passPortNumber: e.target.value }) }} /><br />
                    <button className='btn btn-primary' onClick={(e) => { addStudent(e) }}>Register</button>
                </div>

            </div>

        </div>
    )
}

export default Register