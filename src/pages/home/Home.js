import React from 'react';

const Home = ({ userData }) => {
  if (!userData) {
    return <div>Please log in to see your data.</div>;
  }

  return (
    <div>
      <h1>Welcome, {userData.name} {userData.surname}</h1>
      <p>Email: {userData.email}</p>
      <p>Birth Date: {userData.birthDate}</p>
    </div>
  );
};

export default Home;
