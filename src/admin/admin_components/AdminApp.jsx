import { useSelector } from "react-redux";
import {payloadState, adminState } from "../../redux/reducer/rootReducer"; 

import loader from "../../loader/loader"

import AdminBlender from "./AdminBlender";

const AdminApp = (props) => {
    const { clsMod } = props;
    const stateAdministrator = useSelector(adminState);
    const statePayload = useSelector(payloadState);

    const categoryDishList = stateAdministrator.categoryDish.map((dish, index)=>{
            return <AdminBlender key={index} category={dish} clsMod={clsMod} state={statePayload} />
    })
        return (
            <section className={clsMod["admin---blender-section"]}>
                {statePayload ? categoryDishList : loader}
            </section> 
        );
}
 
export default AdminApp