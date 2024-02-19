import classes from '../../css/modules/header.style.module.css'
import Navigation from '../elements_components/Navigation.component'

const Header = props =>{
    return (
        <header className={classes["header"]}>
            <div className="container">
               <div className={classes["header--box"]}>
                    <div className={classes["header--logo"]}>Buffet</div>
                    <Navigation inseart='header' />
               </div>
            </div>
        </header>
    )
}

export default Header