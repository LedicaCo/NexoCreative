import { useState } from 'react';

function Dropdown({ title, items, onHover }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    onHover(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a className="btn btn-secondary dropdown-toggle">{title}</a>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenu2">
        {items.map((item, index) => (
          <a key={index} className="dropdown-item" href="">{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
