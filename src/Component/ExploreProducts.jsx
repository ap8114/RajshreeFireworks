import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const ExploreProducts = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const productsPerPage = 12;

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

  const categories = [
    { id: 'sparkles', name: 'Sparkles (Phuljhari)', icon: 'fa-sparkles' },
    { id: 'bombs', name: 'Bombs / Crackers', icon: 'fa-bomb' },
    { id: 'rockets', name: 'Rockets', icon: 'fa-rocket' },
    { id: 'chakkar', name: 'Ground Chakkar', icon: 'fa-circle-notch' },
    { id: 'fountains', name: 'Fountains (Anars)', icon: 'fa-water' },
    { id: 'flowerpots', name: 'Flower Pots', icon: 'fa-seedling' },
    { id: 'candles', name: 'Roman Candles', icon: 'fa-fire-alt' },
    { id: 'skyshots', name: 'Sky Shots / Multishots', icon: 'fa-meteor' },
    { id: 'special', name: 'Special Effects', icon: 'fa-magic' },
    { id: 'kids', name: 'Kids\' Fireworks', icon: 'fa-child' },
  ];

  const brands = [
    'Standard', 'Anil', 'Rathna', 'Cock Brand', 'Kaka', 'Sony'
  ];

  const sizes = [
    { id: 'small', name: 'Small', icon: 'fa-sparkles' },
    { id: 'medium', name: 'Medium', icon: 'fa-fire-alt' },
    { id: 'large', name: 'Large', icon: 'fa-meteor' },
  ];

  // Sample products data (same as original)

const products = [
{
id: 1,
name: "Stellar Rocket",
category: "rockets",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520colorful%2520firework%2520rocket%2520with%2520red%2520and%2520gold%2520design%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520firework&width=300&height=400&seq=8&orientation=portrait",
size: "Large",
price: 1200,
brand: "Standard",
description: "Powerful rocket that shoots high into the sky with a spectacular burst of red and gold stars.",
rating: 4.8,
stock: 25
},
{
id: 2,
name: "Rainbow Fountain",
category: "fountains",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520colorful%2520firework%2520fountain%2520with%2520multiple%2520vibrant%2520colors%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520firework%2520packaging&width=300&height=400&seq=9&orientation=portrait",
size: "Medium",
price: 850,
brand: "Anil",
description: "Creates a stunning fountain of multicolored sparks that last for over 60 seconds.",
rating: 4.6,
stock: 18
},
{
id: 3,
name: "Thunder Bomb",
category: "bombs",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520powerful%2520firework%2520bomb%2520with%2520dramatic%2520black%2520and%2520red%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520firework&width=300&height=400&seq=10&orientation=portrait",
size: "Small",
price: 350,
brand: "Rathna",
description: "Produces a loud bang with a bright flash. Perfect for celebration moments.",
rating: 4.3,
stock: 42
},
{
id: 4,
name: "Golden Chakra",
category: "chakkar",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520traditional%2520Indian%2520chakra%2520firework%2520with%2520golden%2520sparkle%2520effect%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520circular%2520firework&width=300&height=400&seq=11&orientation=portrait",
size: "Medium",
price: 550,
brand: "Cock Brand",
description: "Spins rapidly on the ground creating a mesmerizing circle of golden sparks.",
rating: 4.5,
stock: 30
},
{
id: 5,
name: "Sky Shower",
category: "skyshots",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520blue%2520and%2520silver%2520sky%2520shower%2520firework%2520with%2520elegant%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520tall%2520firework&width=300&height=400&seq=12&orientation=portrait",
size: "Large",
price: 1500,
brand: "Kaka",
description: "Multiple shots that create a beautiful shower of blue and silver stars in the night sky.",
rating: 4.9,
stock: 15
},
{
id: 6,
name: "Color Sparklers",
category: "sparkles",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520bundle%2520of%2520colorful%2520sparklers%2520with%2520rainbow%2520effects%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520multiple%2520sparklers&width=300&height=400&seq=13&orientation=portrait",
size: "Small",
price: 250,
brand: "Sony",
description: "Pack of 10 colorful sparklers that burn with vibrant rainbow colors.",
rating: 4.4,
stock: 50
},
{
id: 7,
name: "Diwali Special Box",
category: "special",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520special%2520Diwali%2520firework%2520gift%2520box%2520with%2520assorted%2520fireworks%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520premium%2520packaging&width=300&height=400&seq=14&orientation=portrait",
size: "Large",
price: 2500,
brand: "Standard",
description: "Premium gift box with a variety of fireworks specially curated for Diwali celebrations.",
rating: 4.9,
stock: 10
},
{
id: 8,
name: "Flower Pot",
category: "flowerpots",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520traditional%2520Indian%2520flower%2520pot%2520fireworks%2520with%2520colorful%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520cylindrical%2520fireworks&width=300&height=400&seq=15&orientation=portrait",
size: "Medium",
price: 750,
brand: "Anil",
description: "Emits a beautiful fountain of colorful sparks resembling a blooming flower.",
rating: 4.7,
stock: 22
},
{
id: 9,
name: "Whistling Rocket",
category: "rockets",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520whistling%2520rocket%2520firework%2520with%2520sleek%2520design%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520aerodynamic%2520firework&width=300&height=400&seq=16&orientation=portrait",
size: "Medium",
price: 950,
brand: "Rathna",
description: "Rocket that makes a whistling sound as it ascends before exploding into colorful stars.",
rating: 4.5,
stock: 28
},
{
id: 10,
name: "Mini Bombs Pack",
category: "bombs",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520pack%2520of%2520small%2520firework%2520bombs%2520with%2520vibrant%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520small%2520explosive%2520fireworks&width=300&height=400&seq=17&orientation=portrait",
size: "Small",
price: 450,
brand: "Cock Brand",
description: "Pack of 20 mini bombs that create loud bangs perfect for celebrations.",
rating: 4.2,
stock: 35
},
{
id: 11,
name: "Sparkle Wand",
category: "kids",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520child-safe%2520sparkle%2520wand%2520firework%2520with%2520colorful%2520handle%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520kid-friendly%2520firework&width=300&height=400&seq=18&orientation=portrait",
size: "Small",
price: 180,
brand: "Sony",
description: "Safe sparkler wand for kids that emits gentle, colorful sparks. Perfect for young children.",
rating: 4.8,
stock: 40
},
{
id: 12,
name: "Roman Candle Pro",
category: "candles",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520roman%2520candle%2520firework%2520with%2520elegant%2520tube%2520design%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520cylindrical%2520firework&width=300&height=400&seq=19&orientation=portrait",
size: "Large",
price: 1100,
brand: "Kaka",
description: "Professional-grade Roman candle that shoots 10 colorful balls high into the air.",
rating: 4.6,
stock: 20
},
{
id: 13,
name: "Spinning Chakkar Set",
category: "chakkar",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520set%2520of%2520spinning%2520chakkar%2520fireworks%2520with%2520vibrant%2520colors%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520circular%2520spinning%2520fireworks&width=300&height=400&seq=20&orientation=portrait",
size: "Medium",
price: 650,
brand: "Standard",
description: "Set of 5 chakkars that spin rapidly creating mesmerizing patterns of light.",
rating: 4.4,
stock: 25
},
{
id: 14,
name: "Mega Sky Shot",
category: "skyshots",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520large%2520multi-shot%2520aerial%2520firework%2520with%2520premium%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520powerful%2520sky%2520shot%2520firework&width=300&height=400&seq=21&orientation=portrait",
size: "Large",
price: 2800,
brand: "Anil",
description: "Professional-grade aerial firework with 36 shots of various effects and colors.",
rating: 4.9,
stock: 8
},
{
id: 15,
name: "Snake Tablets",
category: "kids",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520snake%2520tablet%2520fireworks%2520with%2520colorful%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520small%2520tablet%2520fireworks&width=300&height=400&seq=22&orientation=portrait",
size: "Small",
price: 120,
brand: "Rathna",
description: "When lit, these tablets grow into snake-like ash columns. Safe for children with supervision.",
rating: 4.3,
stock: 60
},
{
id: 16,
name: "Silver Fountain",
category: "fountains",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520silver%2520fountain%2520firework%2520with%2520elegant%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520vertical%2520fountain%2520firework&width=300&height=400&seq=23&orientation=portrait",
size: "Medium",
price: 780,
brand: "Cock Brand",
description: "Creates a stunning fountain of silver sparks that reaches up to 3 meters in height.",
rating: 4.7,
stock: 22
},
{
id: 17,
name: "Heart Shape Special",
category: "special",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520heart-shaped%2520special%2520effect%2520firework%2520with%2520romantic%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520unique%2520firework&width=300&height=400&seq=24&orientation=portrait",
size: "Medium",
price: 1300,
brand: "Sony",
description: "Special effect firework that creates a heart shape in the sky with red and pink stars.",
rating: 4.8,
stock: 15
},
{
id: 18,
name: "Deluxe Flower Pot",
category: "flowerpots",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520deluxe%2520flower%2520pot%2520firework%2520with%2520premium%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520large%2520cylindrical%2520firework&width=300&height=400&seq=25&orientation=portrait",
size: "Large",
price: 1200,
brand: "Kaka",
description: "Premium flower pot that creates a massive fountain of multicolored sparks lasting over 2 minutes.",
rating: 4.9,
stock: 12
},
{
id: 19,
name: "Golden Sparklers",
category: "sparkles",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520bundle%2520of%2520golden%2520sparklers%2520with%2520elegant%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520long%2520sparkler%2520sticks&width=300&height=400&seq=26&orientation=portrait",
size: "Medium",
price: 320,
brand: "Standard",
description: "Pack of 20 long-lasting golden sparklers perfect for celebrations and photographs.",
rating: 4.5,
stock: 45
},
{
id: 20,
name: "Multicolor Candle",
category: "candles",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520multicolor%2520roman%2520candle%2520firework%2520with%2520vibrant%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520tube-shaped%2520firework&width=300&height=400&seq=27&orientation=portrait",
size: "Medium",
price: 850,
brand: "Anil",
description: "Roman candle that shoots 8 balls of different colors in sequence.",
rating: 4.6,
stock: 25
},
{
id: 21,
name: "Whistling Wheel",
category: "chakkar",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520whistling%2520wheel%2520firework%2520with%2520unique%2520design%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520spinning%2520wheel%2520firework&width=300&height=400&seq=28&orientation=portrait",
size: "Large",
price: 780,
brand: "Rathna",
description: "Ground spinnerr that makes whistling sounds while creating a circle of multicolored sparks.",
rating: 4.4,
stock: 20
},
{
id: 22,
name: "Mini Fountain Pack",
category: "kids",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520pack%2520of%2520mini%2520fountains%2520for%2520children%2520with%2520colorful%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520small%2520safe%2520fireworks&width=300&height=400&seq=29&orientation=portrait",
size: "Small",
price: 350,
brand: "Cock Brand",
description: "Pack of 6 small fountains safe for kids that create gentle sprays of colorful sparks.",
rating: 4.7,
stock: 30
},
{
id: 23,
name: "Alphabet Sparklers",
category: "special",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520alphabet-shaped%2520sparklers%2520with%2520creative%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520letter-shaped%2520sparklers&width=300&height=400&seq=30&orientation=portrait",
size: "Medium",
price: 650,
brand: "Sony",
description: "Set of sparklers shaped as letters A-Z. Perfect for name displays and celebrations.",
rating: 4.8,
stock: 18
},
{
id: 24,
name: "100-Shot Sky Barrage",
category: "skyshots",
image: "https://readdy.ai/api/search-image?query=professional%2520product%2520photo%2520of%2520a%2520massive%2520100-shot%2520sky%2520barrage%2520firework%2520with%2520impressive%2520packaging%252C%2520isolated%2520on%2520dark%2520background%2520with%2520subtle%2520sparkle%2520effects%252C%2520high%2520quality%2520commercial%2520product%2520photography%252C%2520detailed%2520texture%2520of%2520the%2520large%2520multi-shot%2520firework&width=300&height=400&seq=31&orientation=portrait",
size: "Large",
price: 3500,
brand: "Kaka",
description: "Professional-grade aerial firework with 100 continuous shots of various effects and colors.",
rating: 5.0,
stock: 5
}
];

  // Filter products based on active filters (same as original)
  const filteredProducts = products.filter(product => {
    if (activeCategory !== 'All' && product.category !== activeCategory.toLowerCase()) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    if (selectedSizes.length > 0 && !selectedSizes.includes(product.size.toLowerCase())) {
      return false;
    }
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Sort products (same as original)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Pagination (same as original)
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleBrandToggle = (brand) => {
  if (selectedBrands.includes(brand)) {
    setSelectedBrands(selectedBrands.filter(b => b !== brand));
  } else {
    setSelectedBrands([...selectedBrands, brand]);
  }
  setCurrentPage(1);
};

const handleSizeToggle = (size) => {
  if (selectedSizes.includes(size)) {
    setSelectedSizes(selectedSizes.filter(s => s !== size));
  } else {
    setSelectedSizes([...selectedSizes, size]);
  }
  setCurrentPage(1);
};

const handlePriceChange = (newRange) => {
  setPriceRange(newRange);
  setCurrentPage(1);
};

const handleCategoryChange = (category) => {
  setActiveCategory(category);
  setCurrentPage(1);
};

const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
  setCurrentPage(1);
};

const handleSortChange = (e) => {
  setSortOption(e.target.value);
  setCurrentPage(1);
};


  const resetFilters = () => {
    setActiveCategory('All');
    setPriceRange([0, 5000]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSearchQuery('');
    setSortOption('featured');
    setCurrentPage(1);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleMobileFilter = () => {
    setMobileFilterOpen(!mobileFilterOpen);
  };

  return (
    <div className="min-vh-100 bg-dark text-white">
      {/* Navbar */}
      <nav className={`fixed-top navbar navbar-expand-lg ${isScrolled ? 'bg-dark bg-opacity-75' : 'bg-transparent'}`} style={{ backdropFilter: isScrolled ? 'blur(10px)' : 'none', height: '70px' }}>
        <div className="container">
          <a className="navbar-brand" href="https://readdy.ai/home/bea56603-ddd8-46ca-a80f-e60a3cbd3b45/21d6c7d7-f402-4de1-96cc-31544850e415" data-readdy="true">
            <h1 className="m-0 text-gradient" style={{ background: 'linear-gradient(to right, #ef4444, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Rajshree Fireworks
            </h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon text-white"><i className="fa fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['Home', 'Brands', 'Products', 'Explore', 'Contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link position-relative"
                    href={item === 'Home' ? 'https://readdy.ai/home/bea56603-ddd8-46ca-a80f-e60a3cbd3b45/21d6c7d7-f402-4de1-96cc-31544850e415' : `#${item.toLowerCase()}`}
                    data-readdy={item === 'Home' ? 'true' : undefined}
                  >
                    {item}
                    <span className="position-absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container pt-5 pb-5 mt-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="https://readdy.ai/home/bea56603-ddd8-46ca-a80f-e60a3cbd3b45/21d6c7d7-f402-4de1-96cc-31544850e415" data-readdy="true" className="text-decoration-none text-secondary">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active text-white" aria-current="page">Products</li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 mb-3 fw-bold" style={{ background: 'linear-gradient(to right, #f97316, #ef4444, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Explore Our Fireworks Collection
          </h1>
          <p className="text-light">
            Discover our extensive range of premium fireworks for all your celebration needs
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="row mb-4 g-3">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text bg-dark border-secondary text-secondary">
                <i className="fa fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control bg-dark border-secondary text-white"
                placeholder="Search for fireworks..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="form-select bg-dark border-secondary text-white me-2"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <button
              onClick={toggleMobileFilter}
              className="btn btn-primary d-md-none"
            >
              <i className="fa fa-filter"></i>
            </button>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="d-none d-md-flex flex-wrap justify-content-center gap-2 mb-5">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`btn rounded-pill ${activeCategory === 'All' ? 'btn-warning text-white' : 'btn-outline-secondary'}`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`btn rounded-pill ${activeCategory === category.id ? 'btn-warning text-white' : 'btn-outline-secondary'}`}
            >
              <i className={`fa ${category.icon} me-2`}></i>
              {category.name}
            </button>
          ))}
        </div>

        <div className="row">
          {/* Filters Sidebar - Desktop */}
          <div className={`d-none d-md-block col-md-3 ${!isFilterOpen ? 'd-none' : ''}`}>
            <div className="card bg-dark bg-opacity-75 border-secondary mb-4 sticky-top" style={{ top: '90px' }}>
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="m-0" style={{ background: 'linear-gradient(to right, #f97316, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Filters
                </h5>
                <button
                  onClick={resetFilters}
                  className="btn btn-sm btn-link text-decoration-none text-purple"
                >
                  Reset All
                </button>
              </div>
              <div className="card-body">
                {/* Price Range */}
                <div className="mb-4">
                  <h6 className="mb-3">
                    <i className="fa fa-rupee-sign text-warning me-2"></i>
                    Price Range
                  </h6>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value)])}
                  />
                  <div className="d-flex justify-content-between">
                    <small>₹0</small>
                    <small>₹{priceRange[1]}</small>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-4">
                  <h6 className="mb-3">
                    <i className="fa fa-fire text-warning me-2"></i>
                    Categories
                  </h6>
                  <div className="list-group list-group-flush">
                    {categories.map((category) => (
                      <div key={category.id} className="list-group-item bg-transparent border-secondary p-1">
                        <div className="form-check">
                          <input
                            type="radio"
                            id={`category-${category.id}`}
                            className="form-check-input"
                            checked={activeCategory === category.id}
                            onChange={() => handleCategoryChange(category.id === activeCategory ? 'All' : category.id)}
                          />
                          <label htmlFor={`category-${category.id}`} className="form-check-label d-flex align-items-center">
                            <i className={`fa ${category.icon} me-2 ${activeCategory === category.id ? 'text-warning' : 'text-secondary'}`}></i>
                            {category.name}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-4">
                  <h6 className="mb-3">
                    <i className="fa fa-tag text-warning me-2"></i>
                    Brands
                  </h6>
                  <div className="list-group list-group-flush">
                    {brands.map((brand) => (
                      <div key={brand} className="list-group-item bg-transparent border-secondary p-1">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id={`brand-${brand}`}
                            className="form-check-input"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandToggle(brand)}
                          />
                          <label htmlFor={`brand-${brand}`} className="form-check-label">
                            {brand}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <h6 className="mb-3">
                    <i className="fa fa-ruler text-warning me-2"></i>
                    Sizes
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => handleSizeToggle(size.id)}
                        className={`btn btn-sm rounded-pill ${selectedSizes.includes(size.id) ? 'btn-warning' : 'btn-outline-secondary'}`}
                      >
                        <i className={`fa ${size.icon} me-1`}></i>
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Sidebar */}
          <div className={`offcanvas offcanvas-end bg-dark ${mobileFilterOpen ? 'show' : ''}`} tabIndex={-1} id="mobileFilter" style={{ visibility: mobileFilterOpen ? 'visible' : 'hidden' }}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" style={{ background: 'linear-gradient(to right, #f97316, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Filters
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={toggleMobileFilter}
              ></button>
            </div>
            <div className="offcanvas-body">
              {/* Mobile Categories */}
              <div className="mb-4">
                <h6 className="mb-3">
                  <i className="fa fa-fire text-warning me-2"></i>
                  Categories
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('All')}
                    className={`btn btn-sm rounded-pill ${activeCategory === 'All' ? 'btn-warning' : 'btn-outline-secondary'}`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`btn btn-sm rounded-pill ${activeCategory === category.id ? 'btn-warning' : 'btn-outline-secondary'}`}
                    >
                      <i className={`fa ${category.icon} me-1`}></i>
                      {category.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price Range */}
              <div className="mb-4">
                <h6 className="mb-3">
                  <i className="fa fa-rupee-sign text-warning me-2"></i>
                  Price Range
                </h6>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value)])}
                />
                <div className="d-flex justify-content-between">
                  <small>₹0</small>
                  <small>₹{priceRange[1]}</small>
                </div>
              </div>

              {/* Mobile Brands */}
              <div className="mb-4">
                <h6 className="mb-3">
                  <i className="fa fa-tag text-warning me-2"></i>
                  Brands
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandToggle(brand)}
                      className={`btn btn-sm rounded-pill ${selectedBrands.includes(brand) ? 'btn-warning' : 'btn-outline-secondary'}`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Sizes */}
              <div className="mb-4">
                <h6 className="mb-3">
                  <i className="fa fa-ruler text-warning me-2"></i>
                  Sizes
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => handleSizeToggle(size.id)}
                      className={`btn btn-sm rounded-pill ${selectedSizes.includes(size.id) ? 'btn-warning' : 'btn-outline-secondary'}`}
                    >
                      <i className={`fa ${size.icon} me-1`}></i>
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="d-grid gap-3 mt-4">
                <button
                  onClick={resetFilters}
                  className="btn btn-secondary"
                >
                  Reset All
                </button>
                <button
                  onClick={toggleMobileFilter}
                  className="btn btn-warning"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`col-md-${isFilterOpen ? '9' : '12'}`}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <small className="text-light">
                  Showing {filteredProducts.length > 0 ? indexOfFirstProduct + 1 : 0}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                </small>
              </div>
              <button
                onClick={toggleFilter}
                className="btn btn-sm btn-outline-secondary d-none d-md-block"
              >
                <i className={`fa ${isFilterOpen ? 'fa-chevron-left' : 'fa-filter'} me-1`}></i>
                {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {currentProducts.length === 0 ? (
              <div className="card bg-dark bg-opacity-50 text-center p-5">
                <i className="fa fa-search text-warning mb-3" style={{ fontSize: '2.5rem' }}></i>
                <h3 className="mb-2">No products found</h3>
                <p className="text-light mb-4">Try adjusting your filters or search query</p>
                <button
                  onClick={resetFilters}
                  className="btn btn-warning"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                {currentProducts.map((product) => (
                  <div key={product.id} className="col">
                    <div className="card h-100 bg-dark bg-opacity-50 border-secondary overflow-hidden">
                      <div className="position-relative" style={{ height: '250px', overflow: 'hidden' }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="card-img-top h-100 w-100 object-fit-cover"
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-bottom from-black to-transparent"></div>
                        <div className="position-absolute top-2 end-2">
                          <span className={`badge ${product.size === "Small" ? 'bg-info' : product.size === "Medium" ? 'bg-warning' : 'bg-danger'} d-flex align-items-center`}>
                            <i className={`fa ${product.size === "Small" ? 'fa-sparkles' : product.size === "Medium" ? 'fa-fire-alt' : 'fa-meteor'} me-1`}></i>
                            {product.size}
                          </span>
                        </div>
                        <div className="position-absolute top-2 start-2">
                          <span className="badge bg-purple d-flex align-items-center">
                            <i className={`fa ${categories.find(c => c.id === product.category)?.icon || 'fa-fire'} me-1`}></i>
                            {categories.find(c => c.id === product.category)?.name.split(' ')[0] || product.category}
                          </span>
                        </div>
                      </div>
                      <div className="card-body position-relative">
                        <div className="position-absolute top-0 start-0 w-100 h-20 bg-gradient-to-bottom from-black to-transparent translate-y-[-100%]"></div>
                        <div className="mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i 
                              key={i} 
                              className={`fa ${i < Math.floor(product.rating) ? 'fa-star text-warning' : i < product.rating ? 'fa-star-half-o text-warning' : 'fa-star-o text-secondary'}`}
                            ></i>
                          ))}
                          <small className="text-light ms-1">({product.rating.toFixed(1)})</small>
                        </div>
                        <h5 className="card-title mb-2" style={{ background: 'linear-gradient(to right, #fef08a, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                          {product.name}
                        </h5>
                        <p className="card-text text-light small mb-3" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {product.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="m-0" style={{ background: 'linear-gradient(to right, #6ee7b7, #10b981, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            ₹{product.price.toLocaleString()}
                          </h4>
                          <button className="btn btn-sm btn-warning">
                            <i className="fa fa-shopping-cart me-1"></i>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="mt-5">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      <i className="fa fa-chevron-left"></i>
                    </button>
                  </li>
                  
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber}
                          </button>
                        </li>
                      );
                    } else if (
                      (pageNumber === 2 && currentPage > 3) ||
                      (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return (
                        <li key={pageNumber} className="page-item disabled">
                          <span className="page-link">...</span>
                        </li>
                      );
                    }
                    return null;
                  })}
                  
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <i className="fa fa-chevron-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="btn btn-warning position-fixed rounded-circle"
        style={{ bottom: '2rem', right: '2rem', width: '3rem', height: '3rem' }}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default ExploreProducts;