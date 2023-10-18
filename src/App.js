// src/App.js
import React from 'react';
import './App.css';

function App() {
  const data = [
    {
      profilePic: "path_to_image_1",
      firstName: "Terry",
      lastName: "Medhurst",
      gender: "male",
      email: "atuny0@sohu.com",
      username: "atuny0",
      domain: "slashdot.org",
      ip: "117.29.86.254",
      university: "Capitol University"
    },
    {
      profilePic: "path_to_image_2",
      firstName: "Sheldon",
      lastName: "Quigley",
      gender: "male",
      email: "hbingley1@plala.or.jp",
      username: "hbingley1",
      domain: "51.la",
      ip: "253.240.20.181",
      university: "Stavropol State Technical University"
    },
    // ... Your previous 2 data entries ...
    // I'll add more dummy data as an example
    {
      profilePic: "path_to_image_5",
      firstName: "John",
      lastName: "Doe",
      gender: "male",
      email: "jdoe@example.com",
      username: "jdoe",
      domain: "example.org",
      ip: "192.168.1.5",
      university: "Sample University"
    },
    // ... Continue to add data up to 20 entries...
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
