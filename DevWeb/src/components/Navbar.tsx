import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [opacity, setOpacity] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newOpacity = Math.min(scrollY / 300, 1); // Cap at 1
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <div className="header">
            <div id="header-blur" style={{ opacity: opacity }}></div>
            <div className="inside-header">
                <nav className='logo-container'>
                    <Link to="/" className="left-nav" onClick={closeMenu}>Dreckiez</Link>
                </nav>

                <button 
                    className="hamburger-btn" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {/* Switches icon between 'Bars' and 'X' */}
                    <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="right-nav" onClick={closeMenu}><p className="text-nav">Home</p></Link>
                    <Link to="/posts" className="right-nav" onClick={closeMenu}><p className="text-nav">Posts</p></Link>
                    <Link to="/projects" className="right-nav" onClick={closeMenu}><p className="text-nav">Projects</p></Link>
                    <Link to="/about" className="right-nav" onClick={closeMenu}><p className="text-nav">About</p></Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;