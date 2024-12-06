import React from 'react';

const Avatar = ({ name, image }) => {
  if (image) {
    return <img src={image} alt={name} className="avatar" />;
  }

  const initials = name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join('');
  const colors = ['#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFFFCC'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="avatar-fallback" style={{ backgroundColor: randomColor }}>
      {initials}
    </div>
  );
};

export default Avatar;
