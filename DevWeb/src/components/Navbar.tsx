import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newOpacity = Math.min(scrollY / 300, 1); // Cap at 1
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="header">
            <div id="header-blur" style={{ opacity: opacity }}></div>
            <div className="inside-header">
                <nav>
                    <Link to="/" className="left-nav">Dreckiez</Link>
                </nav>
                <nav>
                    <Link to="/" className="right-nav"><p className="text-nav">Home</p></Link>
                    <Link to="/posts" className="right-nav"><p className="text-nav">Posts</p></Link>
                    <Link to="/projects" className="right-nav"><p className="text-nav">Projects</p></Link>
                    <Link to="/about" className="right-nav"><p className="text-nav">About</p></Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;