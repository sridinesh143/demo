import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {

    const [data1, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/students").then(res => setData(res.data));
    }, [])

   


    return (
        <div className='container'>
            <h1 >List Of Students</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Passport </th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>

                    {data1.map((v, id) =>
                        <tr key={id}>
                            <td>{v.sid}</td>
                            <td>{v.description}</td>
                            <td>{v.email}</td>
                            <td>{v.fname}</td>
                            <td>{v.lname}</td>
                            <td>{v.passPortNumber}</td>
                            <td>{v.stuatus}</td>
                        </tr>
                    )}
                </tbody>


            </table>

        </div>
    )
}

export default ViewAll