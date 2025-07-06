import React from 'react';

const Navbar = ({ isScrolled }) => {
  return (
    
    <nav
      className={`navbar navbar-expand-md fixed-top py-3 ${
        isScrolled ? 'bg-dark bg-opacity-50' : 'bg-transparent'
      }`}
      style={{
        transition: 'all 0.3s',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#">
          <h1
            className="m-0"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.75rem',
              fontWeight: '700',
              background: 'linear-gradient(to right, #ef4444, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Rajshree Fireworks
          </h1>
        </a>

        {/* Hamburger Toggle Button */}
        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars fs-4"></i>
          </span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ms-auto d-flex align-items-center"
            style={{ gap: '2rem' }}
          >
            {['Home', 'Brands', 'Products', 'Explore', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link position-relative"
                  style={{
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    color: 'white',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                  <span
                    className="position-absolute bottom-0 start-0 w-0 h-0.5"
                    style={{
                      background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                      transition: 'all 0.3s',
                    }}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
