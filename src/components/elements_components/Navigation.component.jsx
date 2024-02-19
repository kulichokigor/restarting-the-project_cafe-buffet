import {Link} from "react-router-dom";
import classes from "../../css/modules/app.style.module.css";

function Navigation(props) {
   const {inseart} = props
    return ( 
        <nav className={classes[`navigation--${inseart}`]}>
            <ul>
                <li><Link to="/">головна</Link></li>
                <li><Link to="/buffet">буфет</Link></li>
                <li><Link to="/furshet">фуршети</Link></li>
                <li><Link to="/pizza">піца</Link></li>
                <li><Link to="/contact">контакти та замовлення</Link></li>
            </ul>
        </nav>
     );
}

export default Navigation;