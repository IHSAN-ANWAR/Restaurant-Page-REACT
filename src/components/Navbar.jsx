import { useState, useEffect } from "react";
export default function Navbar() {

  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () =>setIsOpen (prev => !prev);
  const closeMenu = () => setIsOpen (false);

  // Handle window resize to reset toggle state
  useEffect(() => {
    const handleResize = () => {
      // Reset toggle state when screen becomes larger than mobile
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (

    <nav className="navbar">
      <img src="/logo.jpg" alt="Logo" className="logo" />


      <button
      className="hamburger" 
      onClick={toggleMenu}
      aria-label = "Toggle navigation"
      aria-expanded = {isOpen} >

       <span className="bar" />
       <span className="bar" />
       <span className="bar" />


      </button>
      
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li onClick={closeMenu}>Home</li>
        <li onClick={closeMenu}>Menu</li>
        <li onClick={closeMenu}>Book</li>
        <li onClick={closeMenu}>About</li>
      </ul>
    </nav>
  );
}
