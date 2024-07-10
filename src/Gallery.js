import React from 'react';
import Profile from './Profile';

const teamMembers = [
  { name: 'Bobby', role: 'Web Developer', photo: '/images/bobby.png' },
  { name: 'Razor', role: 'Web Developer', photo: '/images/coder.jpg' },
  { name: 'Elm', role: 'Web Developer', photo: '/images/bobby.png' },
  { name: 'Chimela', role: 'Web Developer', photo: '/images/bobby.png' },
  { name: 'Nizzy', role: 'Web Developer', photo: '/images/bobby.png' },
  { name: 'Chris', role: 'Web Developer', photo: '/images/bobby.png' },
];

function Gallery() {
  return (
    <div id="gallery">
      {teamMembers.map((member, index) => (
        <Profile key={index} name={member.name} role={member.role} photo={member.photo} />
      ))}
    </div>
  );
}

export default Gallery;