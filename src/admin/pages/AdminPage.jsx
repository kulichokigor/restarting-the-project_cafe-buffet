import acls from "../css/admin.module.css";
import AdminApp from "../admin_components/AdminApp";


function Admin() {
    return(
        <main className="administrator">
             <div className="container">
             <h2>Administrator Page</h2>
                 <div className="admin--workplace">
                     <AdminApp clsMod={acls} />
                </div>
            </div>
        </main>
    )
}

export default Admin;