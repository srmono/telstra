import React from 'react';
import useLogout from '../customHooks/useLogout';
const AdminProfile = () => {
  const logout = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container shadow">
      <span className="display-5">welcome Admin</span>
      <hr />
      <button
        className="btn btn-danger m-3"
        type="button"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
};

export default AdminProfile;
