import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {payloadState, adminState } from "../../redux/reducer/rootReducer"; 

import loader from "../../loader/loader"


import AdminBlender from "./AdminBlender";
import DialogComponent from "../pages/partsAdminPage/dialogsAdminPage/MainCategories_dialog";
import CategoryModalWindow from "./admin_elements-for-components/AdminMainCategoryModalDialogComponent";
import { functionForCorrectingNames } from "../../utilities/utilites_functionForCorrectingNames";
import { dynamicallyWordsInKey } from "../../utilities/utilites_functionForСhangeWords_Key";

const AdminApp = (props) => {
    const { clsMod, checkCategory, closeDialog } = props;
    const stateAdministrator = useSelector(adminState);
    const statePayload = useSelector(payloadState);

    const [stateApp, setStateApp] = useState(null);

    useEffect(()=>{
        if(statePayload && Object.keys(statePayload).length > 0){
            setStateApp(statePayload)
        }
    },[statePayload])

    // --функції заміни основних категорій
    const dialogRef = useRef(null);

    const [categoryNameState, setCategoryNameState] = useState({
        newNameCategory:'', 
        newUAnameCategory:'', 
        oldNameCategory:'',
        oldUAnameCategory:'',
        id:''
    })
    const categoryModalWindowFunction_show =(oldNameCategory, id)=>{
        setCategoryNameState(prev=>{
            return {
                ...prev,
                id,
                oldNameCategory,
                oldUAnameCategory:stateApp.dishes[oldNameCategory].uaNameCategory
            }
        })
        dialogRef.current.showModal();
    }
    const changeNameCategoryHandler = (event) =>{
        const cyrillicPattern = /[а-яА-ЯёЁіїєґІЇЄҐ]/u;
        const spacesValue = event.target.value.replace(/\s/g, '')
        setCategoryNameState(prev=>{
            return {
                ...prev,
                [event.target.name]:event.target.name==='newNameCategory' ? !cyrillicPattern.test(event.target.value) ? spacesValue : '' : event.target.value
            }
        })
    }

    const confirmChangeFunction=(event)=>{
        event.preventDefault();
        let selectedMod = Object.values(stateApp.dishes).find(el=>(el.indexId===categoryNameState.id))
        selectedMod.nameCategory = functionForCorrectingNames(categoryNameState.newNameCategory);
        selectedMod.uaNameCategory = categoryNameState.newUAnameCategory;

        setStateApp(prev=>{
            return {
                ...prev
            }
        })
        
       console.log(stateApp);
        

        
        dialogRef.current.close();
    }
    const categoryModalWindowFunction_close=()=>(dialogRef.current.close());
//    blender
    const categoryDishList = stateApp !=null && Object.keys(stateApp.dishes).map((dish, index)=>{
        console.log("NAME from STATE: ", dynamicallyWordsInKey(stateApp.dishes[dish].nameCategory));
        console.log("DISH: ",dish);
        return <AdminBlender
                    id={stateApp.dishes[dish].indexId}
                    key={index} 
                    category={dynamicallyWordsInKey(stateApp.dishes[dish].nameCategory)} 
                    clsMod={clsMod} 
                    state={stateApp}
                    setStateBlender={setStateApp}
                    categoryModalWindowFunction={categoryModalWindowFunction_show}
                />
    })        
    // RENDER
        return (
                <section className={clsMod["admin---blender-section"]}>
                    <CategoryModalWindow 
                        clsMod={clsMod}
                        dialogRef={dialogRef}
                        categoryState={categoryNameState}
                        changeNameCategory={changeNameCategoryHandler}
                        confirmChange={confirmChangeFunction}
                        closeDialogFunc={categoryModalWindowFunction_close}
                />
                    <section name="admin---dialog-section">
                        <DialogComponent 
                            state={stateApp}  
                            clsMod={clsMod} 
                            check={checkCategory} 
                            closeDialogFunction={closeDialog}
                        />
                    </section>
                    <section name="admin---sub-category-section">
                        <h2>Адміністрування підкатегорій і карт страв</h2>
                        {statePayload ? categoryDishList : loader}
                    </section>
                </section>
        );
}

export default AdminApp