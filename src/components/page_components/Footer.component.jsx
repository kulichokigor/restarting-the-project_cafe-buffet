import classes from '../../css/modules/footer.style.module.css'

const Footer = () =>{
    return (
        <footer className={classes["footer"]}>
            <div className="container">
                <div className={classes["footer--logo"]}></div>
                <div className={classes["footer--content"]}>
                    <p>Buffet</p>
                    <div className={classes["footer--copyright"]}>
                        Copyright 2023. All rights reserved by KimMakassi
                    </div>
                </div>
                <div className={classes["footer--social"]}>social button</div>
            </div>
        </footer>
    )
}

export default Footer