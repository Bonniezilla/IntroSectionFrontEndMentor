import root from ".."

import Features from "./Features"

import "./Navbar.css"
    
const Navbar = () => {
    const renderElement = () => {
        root.render(<Features />)
      }
    return (
        <div className="Navbar">
            <ul>
                <li onClick={renderElement}>Features</li>
                <li>Company</li>
                <li>Careers</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default Navbar;