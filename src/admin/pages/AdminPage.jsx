import { useState } from "react";

import acls from "../css/admin.module.css";
import AdminApp from "../admin_components/AdminApp";
import AdminNavigationPanel from "./partsAdminPage/AdminNavPanel";



function Admin() {
    // -- функції для адмін навігації -- 
    const [checkCategoryState, setCheckCategoryState] = useState({dialogValue:'', activeDialog:true})
    function handleDialogChoice(event){
        setCheckCategoryState((prev)=>({...prev, dialogValue:event.target.attributes.dialog.value, activeDialog:true}))
    }
    function closeDialogHandler(){
        setCheckCategoryState((prev)=>({...prev, activeDialog:false}))
    }
    // -----------
     
    return(
        <main className="administrator">
             <div className="container">
             <h1>Адміністратор</h1>
                 <div className="admin--workplace">
                    <AdminNavigationPanel 
                        clsMod={acls} 
                        handleDialogCheckChoice={handleDialogChoice} 
                    />
                    <AdminApp 
                        clsMod={acls} 
                        checkCategory={checkCategoryState}
                        closeDialog={closeDialogHandler}
                    />
                </div>
            </div>
        </main>
    )
}

export default Admin;