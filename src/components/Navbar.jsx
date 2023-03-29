
import "./Navbar.css"

const Navbar = (props) => {

    return (
        <div className="Navbar">
            <ul>
                <li onMouseOver={props.overEvent} 
                onMouseLeave={props.leaveEvent}>Features</li>
                <li onMouseOver={props.overEvent} 
                onMouseLeave={props.leaveEvent}>Company</li>
                <li>Careers</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default Navbar;