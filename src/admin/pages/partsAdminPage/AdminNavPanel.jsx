const AdminNavigationPanel = ({clsMod, handleDialogCheckChoice}) =>{
    const navigationArr = [{navName:'Головні категорії', dialog:'MainCategories'}, {navName:'Схеми', dialog:'Schemes'}, {navName:'Інформація', dialog:'Information'}];

    function hoverElementAdminNavigation(nav){
        const handleMouseMovements = (bool, event) =>{
            bool ? event.target.previousElementSibling && event.target.previousElementSibling.classList.remove(clsMod["nav-admin-list"]) : event.target.previousElementSibling && event.target.previousElementSibling.classList.add(clsMod["nav-admin-list"]) 
        }
       return nav.map((elNav, index)=>{
            return <li
                    key={index} 
                    className={clsMod["nav-admin-list"]}
                    dialog={elNav.dialog}
                    onMouseOver={(event)=>handleMouseMovements(true, event)}
                    onMouseOut={(event)=>handleMouseMovements(false, event)}
                    onClick={handleDialogCheckChoice}
                    >{elNav.navName}</li>
        })
    }
    return (
        <nav className={clsMod["admin--navigation-section"]}>
            <ul>
                {hoverElementAdminNavigation(navigationArr)}
            </ul>
        </nav>
    )
}

export default AdminNavigationPanel