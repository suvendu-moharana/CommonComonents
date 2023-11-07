import React from 'react';
import Table from 'react-bootstrap/Table';

function CommonTable({ data }) {
  return (
    <div>
      <h5>Table open..</h5>
      <Table striped bordered hover size="dark" style={{ width: '50%' }}>
        <thead>
          <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
          </tr>
        </thead>
        <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
      </Table>
    </div>
  );
}

export default CommonTable;