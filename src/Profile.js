import React from 'react';
import PropTypes from 'prop-types';

function Profile({ name, role, photo }) {
  return (
    <div className="profile">
      <img src={photo} alt={`Photo of ${name}`} />
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Profile;