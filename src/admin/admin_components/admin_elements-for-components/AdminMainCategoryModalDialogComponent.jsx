// import { useState } from "react";

const CategoryModalWindow = ({clsMod, categoryState, dialogRef, changeNameCategory, closeDialogFunc, confirmChange}) => {
        
    return ( 
        <dialog ref={dialogRef} className={clsMod["dialog-window"]}>
            <h4>Змінити категорію <b>{categoryState.oldUAnameCategory} ({categoryState.oldNameCategory})</b>?</h4>
            <form style={{display:'flex', flexFlow:'column'}} onSubmit={confirmChange}>
                <label>
                    <span>Введіть назву категорії англійською (для збереження в бд):</span>
                    <input 
                        name="newNameCategory" 
                        type="text" 
                        value={categoryState.newNameCategory} 
                        onChange={changeNameCategory}
                        style={{borderColor:categoryState.nameCategory === '' ? 'red' : 'blue'}}
                    />
                </label>
                <label>
                    <span>Введіть назву категорії українською:</span>
                    <input 
                        name="newUAnameCategory" 
                        type="text" 
                        value={categoryState.newUAnameCategory} 
                        onChange={changeNameCategory}
                    />
                </label>               
                <div>
                    <button type="submit">Підтвердити</button>
                    <button onClick={closeDialogFunc}>Відхилити</button>
                </div>
            </form>
        </dialog>
     );
}
 
export default CategoryModalWindow;