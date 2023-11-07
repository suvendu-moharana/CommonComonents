
import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';

function Api() {
    const [data, setData] = useState([]);
    const [support, setSupport] = useState({});
    const [total, setTotal] = useState("");

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2").then((result) => {
            console.log("result", result)
            result.json().then((res) => {
                console.log(res)
                setData(res.data)
                setSupport(res.support)
                setTotal(res.total)
            })
        })
    }, [])
    // console.warn(data)
    console.log("res", data)
    return (
     
            <Table striped bordered hover size="dark">
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>first_name</th>
                    <th>last_name</th>
                </tr>
                </thead>
                
                {
                    data.length > 0 && data.map((iteam, index) =>
                    <tbody>
                        <tr>
                            <td>{iteam.id}</td>
                            <td>{iteam.email}</td>
                            <td>{iteam.first_name}</td>
                            <td>{iteam.last_name}</td>
                        </tr>
                       </tbody>
                    )}
                     
            </Table>
        
    );
}

export default Api;
