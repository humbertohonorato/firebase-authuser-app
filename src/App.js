import React from 'react';
import AppRoutes from './routes';
import useAuth from './hooks/useAuth';

function App() {
  const { userData, registerUser, loginUser } = useAuth();

  return (
    <div className="App">
      <AppRoutes
        onUserRegister={registerUser}
        onUserLogin={loginUser}
        userData={userData}
      />
    </div>
  );
}

export default App;
