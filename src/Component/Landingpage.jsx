import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // VERY IMPORTANT for navbar toggler
import { useNavigate } from 'react-router-dom';

const Landingpage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-vh-100" style={{ 
      background: 'linear-gradient(to bottom, #6b21a8, #000000, #000000)',
      color: 'white',
      fontFamily: 'Poppins, sans-serif'
    }}>
      {/* Navbar */}
    <nav className={`navbar navbar-expand-md fixed-top py-3 ${isScrolled ? 'bg-dark bg-opacity-50' : 'bg-transparent'}`}
  style={{
    transition: 'all 0.3s',
    backdropFilter: isScrolled ? 'blur(12px)' : 'none'
  }}>
  <div className="container">
    <a className="navbar-brand" href="#">
      <h1 className="m-0" style={{
        fontFamily: 'Orbitron, sans-serif',
        fontSize: '1.75rem',
        fontWeight: '700',
        background: 'linear-gradient(to right, #ef4444, #f59e0b)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Rajshree Fireworks
      </h1>
    </a>

    {/* Toggle Button */}
    <button className="navbar-toggler text-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span>
        <i className="fas fa-bars fs-4"></i>
      </span>
    </button>

    {/* Collapsible Menu */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto d-flex align-items-center" style={{ gap: '2rem' }}>
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
                whiteSpace: 'nowrap'
              }}
            >
              {item}
              <span className="position-absolute bottom-0 start-0 w-0 h-0.5"
                style={{
                  background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                  transition: 'all 0.3s'
                }}></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section className="position-relative vh-100 d-flex align-items-center justify-content-center overflow-hidden" id="home">
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img
            src="https://readdy.ai/api/search-image?query=majestic%20aerial%20view%20of%20grand%20fireworks%20display%20over%20modern%20cityscape%20at%20night%2C%20multiple%20large%20colorful%20bursts%20illuminating%20the%20sky%2C%20professional%20photography%20with%20long%20exposure%2C%20ultra%20high%20resolution%20dramatic%20festive%20celebration%20scene%20with%20golden%20and%20red%20fireworks&width=1440&height=800&seq=16&orientation=landscape"
            alt="Fireworks Background"
            className="w-100 h-100 object-fit-cover"
            style={{ objectPosition: 'top' }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7), transparent)' }}></div>
        </div>
        
        <div className="container position-relative z-3 px-4 px-md-3">
          <div className="d-flex flex-column align-items-start" style={{ gap: '2rem', maxWidth: '100%' }}>
            <h1 className="display-3 display-md-1 fw-black m-0"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                background: 'linear-gradient(to right, #fde047, #f97316, #ef4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.2',
                letterSpacing: '-0.025em',
                textShadow: '0 0 25px rgba(234,179,8,0.3)'
              }}>
              Welcome to <br />
              <span style={{
                background: 'linear-gradient(to right, #ef4444, #fb923c, #facc15)',
                WebkitBackgroundClip: 'text'
              }}>Rajshree Fireworks</span>
            </h1>
            
            <p className="fs-5 fs-md-4" style={{
              maxWidth: '36rem',
              color: '#e5e7eb',
              fontWeight: '300',
              lineHeight: '1.75',
              textShadow: '0 0 8px rgba(255,255,255,0.5)'
            }}>
              India's No.1 Firecracker Destination for all your celebration needs
            </p>
            
      <button
      onClick={() => navigate('/explore')}
      className="btn mt-4 px-5 py-3 d-flex align-items-center gap-3"
      style={{
        background: 'linear-gradient(to right, #dc2626, #f97316)',
        fontFamily: 'Orbitron, sans-serif',
        fontWeight: '700',
        color: 'white',
        fontSize: '1.125rem',
        borderRadius: '9999px',
        boxShadow: '0 0 20px rgba(239,68,68,0.5)',
        transition: 'all 0.3s',
        border: 'none'
      }}
    >
      <i className="fas fa-fire-alt" style={{ color: '#fef08a' }}></i>
      Explore Products
    </button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-5 position-relative overflow-hidden" id="brands" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container px-4 px-md-3">
          <div className="text-center mb-5" style={{ marginBottom: '4rem' }}>
            <h2 className="display-5 fw-bold mb-3"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                background: 'linear-gradient(to right, #ef4444, #facc15, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              We Sell Trusted Firework Brands
            </h2>
            <p className="text-light mx-auto" style={{ maxWidth: '36rem' }}>
              Experience the finest quality and safety with our collection of premium firework brands
            </p>
          </div>
          
          <div className="row g-4">
            {[
              { name: "Standard", image: "https://readdy.ai/api/search-image?query=elegant%20firework%20brand%20logo%20design%20with%20standard%20text%2C%20professional%20minimalist%20design%2C%20fire%20theme%2C%20glowing%20effect%2C%20dark%20background%20with%20sparks%2C%20premium%20quality%20emblem%2C%20luxury%20brand%20identity&width=300&height=300&seq=2&orientation=squarish" },
              { name: "Anil", image: "https://readdy.ai/api/search-image?query=modern%20firework%20brand%20logo%20with%20Anil%20text%2C%20dynamic%20flame%20design%2C%20professional%20emblem%20with%20fire%20elements%2C%20dark%20background%20with%20sparks%2C%20premium%20quality%20logo%2C%20luxury%20brand%20identity%20with%20vibrant%20colors&width=300&height=300&seq=3&orientation=squarish" },
              { name: "Rathna", image: "https://readdy.ai/api/search-image?query=premium%20firework%20brand%20logo%20with%20Rathna%20text%2C%20elegant%20design%20with%20sparkle%20elements%2C%20professional%20emblem%20with%20royal%20theme%2C%20dark%20background%20with%20golden%20sparks%2C%20luxury%20brand%20identity%20with%20traditional%20Indian%20motifs&width=300&height=300&seq=4&orientation=squarish" },
              { name: "Cock Brand", image: "https://readdy.ai/api/search-image?query=distinctive%20firework%20brand%20logo%20with%20Cock%20Brand%20text%2C%20rooster%20silhouette%20with%20flame%20elements%2C%20professional%20emblem%20with%20dynamic%20design%2C%20dark%20background%20with%20colorful%20sparks%2C%20premium%20quality%20logo%20with%20bold%20typography&width=300&height=300&seq=5&orientation=squarish" },
              { name: "Kaka", image: "https://readdy.ai/api/search-image?query=modern%20firework%20brand%20logo%20with%20Kaka%20text%2C%20sleek%20minimalist%20design%20with%20flame%20elements%2C%20professional%20emblem%20with%20contemporary%20style%2C%20dark%20background%20with%20subtle%20sparks%2C%20premium%20quality%20logo%20with%20clean%20typography&width=300&height=300&seq=6&orientation=squarish" },
              { name: "Sony", image: "https://readdy.ai/api/search-image?query=prestigious%20firework%20brand%20logo%20with%20Sony%20text%2C%20sophisticated%20design%20with%20sparkle%20elements%2C%20professional%20emblem%20with%20tech-inspired%20theme%2C%20dark%20background%20with%20blue%20sparks%2C%20premium%20quality%20logo%20with%20futuristic%20typography&width=300&height=300&seq=7&orientation=squarish" }
            ].map((brand, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="position-relative h-100 bg-white bg-opacity-10 rounded-3 overflow-hidden p-4"
                  style={{
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: 'linear-gradient(to bottom right, transparent, rgba(168,85,247,0.2))',
                      opacity: '0',
                      transition: 'opacity 0.3s'
                    }}></div>
                  <div className="position-absolute top-0 start-0 w-100 h-100 border-2 border-transparent rounded-3"
                    style={{ transition: 'all 0.3s' }}></div>
                  
                  <div className="d-flex flex-column align-items-center p-4">
                    <div className="rounded-circle overflow-hidden mb-4" style={{ width: '8rem', height: '8rem', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                      <img
                        src={brand.image}
                        alt={`${brand.name} Logo`}
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectPosition: 'top' }}
                      />
                    </div>
                    <h3 className="fw-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>{brand.name}</h3>
                    <p className="mt-2 text-light small">Premium Quality</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="position-absolute top-0 start-0 rounded-circle blur-3"
          style={{
            width: '5rem',
            height: '5rem',
            background: 'linear-gradient(to right, #eab308, #ef4444)',
            opacity: '0.2'
          }}></div>
        <div className="position-absolute bottom-0 end-0 rounded-circle blur-3"
          style={{
            width: '8rem',
            height: '8rem',
            background: 'linear-gradient(to right, #a855f7, #3b82f6)',
            opacity: '0.2'
          }}></div>
      </section>

      {/* Products Section */}
      <section className="py-5 position-relative" id="products" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container px-4 px-md-3">
          <div className="text-center mb-5" style={{ marginBottom: '4rem' }}>
            <h2 className="display-5 fw-bold mb-3"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                background: 'linear-gradient(to right, #4ade80, #3b82f6, #9333ea)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              Popular Fireworks
            </h2>
            <p className="text-light mx-auto" style={{ maxWidth: '36rem' }}>
              Discover our most sought-after fireworks for your celebrations
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                name: "Stellar Rocket",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photo%20of%20a%20colorful%20firework%20rocket%20with%20red%20and%20gold%20design%2C%20isolated%20on%20dark%20background%20with%20subtle%20sparkle%20effects%2C%20high%20quality%20commercial%20product%20photography%2C%20detailed%20texture%20of%20the%20firework&width=300&height=400&seq=8&orientation=portrait",
                size: "Large",
                price: "₹1,200"
              },
              {
                name: "Rainbow Fountain",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photo%20of%20a%20colorful%20firework%20fountain%20with%20multiple%20vibrant%20colors%2C%20isolated%20on%20dark%20background%20with%20subtle%20sparkle%20effects%2C%20high%20quality%20commercial%20product%20photography%2C%20detailed%20texture%20of%20the%20firework%20packaging&width=300&height=400&seq=9&orientation=portrait",
                size: "Medium",
                price: "₹850"
              },
              {
                name: "Thunder Bomb",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photo%20of%20a%20powerful%20firework%20bomb%20with%20dramatic%20black%20and%20red%20packaging%2C%20isolated%20on%20dark%20background%20with%20subtle%20sparkle%20effects%2C%20high%20quality%20commercial%20product%20photography%2C%20detailed%20texture%20of%20the%20firework&width=300&height=400&seq=10&orientation=portrait",
                size: "Small",
                price: "₹350"
              },
              {
                name: "Golden Chakra",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photo%20of%20a%20traditional%20Indian%20chakra%20firework%20with%20golden%20sparkle%20effect%2C%20isolated%20on%20dark%20background%20with%20subtle%20sparkle%20effects%2C%20high%20quality%20commercial%20product%20photography%2C%20detailed%20texture%20of%20the%20circular%20firework&width=300&height=400&seq=11&orientation=portrait",
                size: "Medium",
                price: "₹550"
              },
              {
                name: "Sky Shower",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photo%20of%20a%20blue%20and%20silver%20sky%20shower%20firework%20with%20elegant%20packaging%2C%20isolated%20on%20dark%20background%20with%20subtle%20sparkle%20effects%2C%20high%20quality%20commercial%20product%20photography%2C%20detailed%20texture%20of%20the%20tall%20firework&width=300&height=400&seq=12&orientation=portrait",
                size: "Large",
                price: "₹1,500"
              },
              {
                name: "Color Sparklers",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photo%20of%20a%20bundle%20of%20colorful%20sparklers%20with%20rainbow%20effects%2C%20isolated%20on%20dark%20background%20with%20subtle%20sparkle%20effects%2C%20high%20quality%20commercial%20product%20photography%2C%20detailed%20texture%20of%20the%20multiple%20sparklers&width=300&height=400&seq=13&orientation=portrait",
                size: "Small",
                price: "₹250"
              },
              {
                name: "Diwali Special",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photo%20of%20a%20special%20Diwali%20firework%20gift%20box%20with%20assorted%20fireworks%2C%20isolated%20on%20dark%20background%20with%20subtle%20sparkle%20effects%2C%20high%20quality%20commercial%20product%20photography%2C%20detailed%20texture%20of%20the%20premium%20packaging&width=300&height=400&seq=14&orientation=portrait",
                size: "Large",
                price: "₹2,500"
              },
              {
                name: "Flower Pot",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photo%20of%20traditional%20Indian%20flower%20pot%20fireworks%20with%20colorful%20packaging%2C%20isolated%20on%20dark%20background%20with%20subtle%20sparkle%20effects%2C%20high%20quality%20commercial%20product%20photography%2C%20detailed%20texture%20of%20the%20cylindrical%20fireworks&width=300&height=400&seq=15&orientation=portrait",
                size: "Medium",
                price: "₹750"
              }
            ].map((product, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="h-100 rounded-3 overflow-hidden position-relative border"
                  style={{
                    background: 'linear-gradient(to bottom right, rgba(76,29,149,0.4), rgba(0,0,0,0.6), rgba(124,45,18,0.4))',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.3s',
                    borderColor: 'rgba(249,115,22,0.2) !important'
                  }}>
                  <div className="position-relative" style={{ height: '16rem', overflow: 'hidden' }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', zIndex: '10' }}></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-100 h-100 object-fit-cover"
                      style={{ objectPosition: 'top', transition: 'transform 0.5s' }}
                    />
                    <div className="position-absolute top-0 end-0 d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow m-3"
                      style={{
                        background: 'linear-gradient(to right, #f97316, #dc2626)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        zIndex: '20'
                      }}>
                      {product.size === "Small" && <i className="fas fa-sparkles" style={{ color: '#fef08a' }}></i>}
                      {product.size === "Medium" && <i className="fas fa-fire-alt" style={{ color: '#fef08a' }}></i>}
                      {product.size === "Large" && <i className="fas fa-meteor" style={{ color: '#fef08a' }}></i>}
                      <span style={{ color: '#fef9c3' }}>{product.size}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 position-relative">
                    <div className="position-absolute top-0 start-0 w-100"
                      style={{ height: '2.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                    <h3 className="fw-bold mb-3"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        background: 'linear-gradient(to right, #fef08a, #fb923c, #f87171)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                      {product.name}
                    </h3>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <p className="fw-bold m-0"
                        style={{
                          fontFamily: 'Orbitron, sans-serif',
                          fontSize: '1.25rem',
                          background: 'linear-gradient(to right, #86efac, #34d399, #2dd4bf)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>
                        {product.price}
                      </p>
                      <button className="btn px-3 py-2 position-relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(to right, #ef4444, #f97316, #facc15)',
                          fontWeight: '700',
                          color: 'white',
                          fontSize: '0.875rem',
                          borderRadius: '9999px',
                          border: 'none'
                        }}>
                        <span className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            background: 'linear-gradient(to right, #facc15, #f97316)',
                            transform: 'translateY(100%)',
                            transition: 'transform 0.3s'
                          }}></span>
                        <span className="position-relative d-flex align-items-center gap-2">
                          <i className="fas fa-fire"></i>
                          <span>Add to Cart</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5 position-relative" style={{ marginTop: '5rem' }}>
            <div className="position-absolute top-0 start-50 translate-middle-x w-100"
              style={{
                height: '10rem',
                background: 'linear-gradient(to top, rgba(249,115,22,0.2), rgba(234,179,8,0.1), transparent)',
                filter: 'blur(12px)'
              }}></div>
            <a href="https://readdy.ai/home/bea56603-ddd8-46ca-a80f-e60a3cbd3b45/7ca8b141-0db1-4d5a-88a0-5dba59ec3e0b" 
              className="btn px-5 py-3 position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #ef4444, #f97316, #facc15)',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: '700',
                color: 'white',
                fontSize: '1.25rem',
                borderRadius: '9999px',
                boxShadow: '0 0 30px rgba(239,68,68,0.5)',
                transition: 'all 0.3s',
                border: 'none'
              }}>
              <span className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: 'linear-gradient(to right, #facc15, #f97316, #ef4444)',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.5s'
                }}></span>
              <span className="position-relative d-flex align-items-center gap-3">
                <i className="fas fa-fire-alt" style={{ color: '#fef08a' }}></i>
                <span>🎆 Explore More Products</span>
              </span>
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="position-absolute top-25 start-0 rounded-circle"
          style={{
            width: '16rem',
            height: '16rem',
            backgroundColor: 'rgba(59,130,246,0.1)',
            filter: 'blur(12px)'
          }}></div>
        <div className="position-absolute bottom-25 end-0 rounded-circle"
          style={{
            width: '20rem',
            height: '20rem',
            backgroundColor: 'rgba(147,51,234,0.1)',
            filter: 'blur(12px)'
          }}></div>
      </section>

      {/* Footer Section */}
      <footer className="position-relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '2.5rem' }}>
        {/* Decorative Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div className="position-absolute top-0 start-25 rounded-circle"
            style={{
              width: '16rem',
              height: '16rem',
              backgroundColor: 'rgba(168,85,247,0.2)',
              filter: 'blur(12px)'
            }}></div>
          <div className="position-absolute bottom-0 end-25 rounded-circle"
            style={{
              width: '18rem',
              height: '18rem',
              backgroundColor: 'rgba(249,115,22,0.2)',
              filter: 'blur(12px)'
            }}></div>
          <div className="position-absolute top-50 start-50 translate-middle rounded-circle"
            style={{
              width: '24rem',
              height: '24rem',
              backgroundColor: 'rgba(59,130,246,0.1)',
              filter: 'blur(12px)'
            }}></div>
        </div>
        
        <div className="container px-4 px-md-3 position-relative z-1">
          <div className="row g-4 mb-5" style={{ marginBottom: '4rem' }}>
            {/* Brand Column */}
            <div className="col-md-6 col-lg-3">
              <div style={{ gap: '1.5rem' }}>
                <h3 className="fw-bold display-6 m-0"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    background: 'linear-gradient(to right, #ef4444, #facc15)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                  Rajshree Fireworks
                </h3>
                <p className="text-light small" style={{ lineHeight: '1.75' }}>
                  Your trusted destination for premium quality fireworks. Making your celebrations brighter since 1990.
                </p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="col-md-6 col-lg-3">
              <div style={{ gap: '1.5rem' }}>
                <h4 className="fw-bold fs-5 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>Quick Links</h4>
                <ul className="list-unstyled" style={{ gap: '1rem' }}>
                  {['About Us', 'Safety Guidelines', 'Shipping Policy', 'Terms & Conditions'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-decoration-none text-light small d-flex align-items-center gap-2"
                        style={{
                          transition: 'color 0.3s'
                        }}>
                        <i className="fas fa-sparkles" style={{ fontSize: '0.75rem', color: '#f59e0b' }}></i>
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="col-md-6 col-lg-3">
              <div style={{ gap: '1.5rem' }}>
                <h4 className="fw-bold fs-5 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contact Us</h4>
                <ul className="list-unstyled" style={{ gap: '1rem' }}>
                  <li className="d-flex align-items-start gap-3 text-light small">
                    <i className="fas fa-map-marker-alt mt-1" style={{ color: '#f97316' }}></i>
                    <span>Near Main Bazaar, Indore, Madhya Pradesh, India - 452001</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 text-light small">
                    <i className="fas fa-phone-alt" style={{ color: '#22c55e' }}></i>
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 text-light small">
                    <i className="fas fa-envelope" style={{ color: '#3b82f6' }}></i>
                    <span>info@rajshreefireworks.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="col-md-6 col-lg-3">
              <div style={{ gap: '1.5rem' }}>
                <h4 className="fw-bold fs-5 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>Follow Us</h4>
                <div className="d-flex" style={{ gap: '1rem' }}>
                  {[
                    { icon: 'fab fa-facebook-f', color: 'bg-primary' },
                    { icon: 'fab fa-instagram', color: 'bg-gradient-to-br from-purple-600 to-orange-600' },
                    { icon: 'fab fa-whatsapp', color: 'bg-success' },
                    { icon: 'fab fa-youtube', color: 'bg-danger' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none`}
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        background: social.color === 'bg-gradient-to-br from-purple-600 to-orange-600' 
                          ? 'linear-gradient(to bottom right, #9333ea, #ea580c)' 
                          : `var(--bs-${social.color.split('-')[1]})`,
                        transition: 'transform 0.3s',
                        boxShadow: '0 0 10px rgba(255,255,255,0.2)'
                      }}>
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <hr className="my-4" style={{ 
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(156,163,175,0.5), transparent)',
            border: 'none'
          }} />
          
          {/* Copyright */}
          <div className="text-center text-light small">
            <p>© {new Date().getFullYear()} Rajshree Fireworks. All rights reserved.</p>
            <p className="mt-2" style={{ fontSize: '0.75rem' }}>
              <i className="fas fa-shield-alt me-2" style={{ color: '#eab308' }}></i>
              Licensed and regulated by the Government of India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landingpage;