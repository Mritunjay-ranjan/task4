// src/App.js
import React from 'react';
import './App.css';

function App() {
  const data = [
    // ... Your previous 4 data entries ...
    // Add more dummy data as needed to make up 20 entries...
  ];

  return (
    <div className="container">
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={item.profilePic} alt={item.firstName} /></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
