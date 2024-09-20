import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


const DialogComponent = (props) => {
    const dialogsFunctions = [
        {id:1, name: 'MainCategories', dialog:dialog__MainCategoriesHandler},
        {id:2, name: 'Schemes', dialog:dialog__SchemesHandler},
        {id:3, name: 'Information', dialog:dialog__InformationHandler}
    ]
    
    const closeDialogBtn = <div className={props.clsMod["admin--dialog-btn"]} onClick={props.closeDialogFunction}><FontAwesomeIcon icon={faCircleXmark} /></div>
    
    const renderDialog = dialogsFunctions.map(elem=>{
      return  (elem.name === props.check.dialogValue && props.check.activeDialog) ? <Fragment key={elem.id}>{elem.dialog(props, closeDialogBtn)}</Fragment> : null
    })

    return ( 
        <>
            {renderDialog}
        </>
     );
}

// функція на рендер компонента зміни і додавання діалог-головних категорій
function dialog__MainCategoriesHandler(params, closeBtn){
    const {state, check} = params;
    function mainCategorySelectHandler(stateApp){
        let mainCategoryList = stateApp ? Object.keys(stateApp.dishes) : []
        return mainCategoryList.map((nameCat, i)=>{
                return <option key={i} value={nameCat}>{stateApp.dishes[nameCat].uaNameCategory}</option>
        })
    }
    // RENDER
    return (
        <dialog name={check.dialogValue} open={check.activeDialog}>
            <h2>Адміністрування головних категорій страв</h2>
            {closeBtn}
            <select>
                <option value="">--Виберіть категорію--</option>
                {mainCategorySelectHandler(state)}
            </select>
            <ul>
                <li>Змінити категорію</li>
                <li>Додати нову категорію</li>
            </ul>
        </dialog>
    )
}



//  функція на рендер компонента діалог-схеми

function dialog__SchemesHandler({state, clsMod, check}, closeBtn){
    return  <dialog name={check.dialogValue} open={check.activeDialog}>
                <h2>Схема карти страв</h2>
                {closeBtn}
            </dialog>
}

//  функція на рендер компонента діалог-інформації

function dialog__InformationHandler({state, clsMod, check}, closeBtn){
    return  <dialog name={check.dialogValue} open={check.activeDialog}>
                <h2>Інформація для адміністрування</h2>
                {closeBtn}
            </dialog>
}
export default DialogComponent;