import { _load, _loadRes, _loadError, _formedMenu } from "./actionsType"

export function cafeDataAction() {
    return async (dispatch) =>{
        dispatch({type:_load});
        try{
            const responce = await fetch('https://buffet-tat-caffe.firebaseio.com/payload.json');
            const data = await responce.json();
            dispatch({type:_loadRes, payload:data});
            dispatch(divisionDataPartsAction()) //позначка ^a1 README.md
        }catch(error){
            dispatch({type:_loadError, payload:false, error})
        }
    }
}
export function divisionDataPartsAction(){
    return (dispatch, getState)=>{
        let stateAction = getState();
        let formedMenu = [];
        let payload =  stateAction.payload;
        let dishes =  payload.dishes;
        let categoryKeys = Object.keys(dishes);


        let typeDishesValues = categoryKeys.length > 0 && categoryKeys.map(el=>(dishes[el]));
        
        typeDishesValues && typeDishesValues.forEach(obj=>{         
            
            let subListData = obj.subcategoriesDishes;
            let speciesKeys = Object.keys(subListData)

            speciesKeys.forEach(el=>{
                obj.subcategoriesDishes[el].forEach(dishObj=>{
                    if(dishObj.addMenu === true){
                        formedMenu.push(dishObj)
                    }
                })
            })
        })

        let subCategoryDish = typeDishesValues.flatMap(el=>{
            return Object.keys(el.subcategoriesDishes)
        });

        console.log(subCategoryDish);
        
        dispatch({type:_formedMenu, menuDay:formedMenu, categoryDish:categoryKeys, subCategoryDish})
    }
}