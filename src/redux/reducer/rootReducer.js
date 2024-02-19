import { _load, _loadRes, _loadError, _formedMenu } from "../actions/actionsType";

const firstState = {
    payload:{},
    adminPart:{
        categoryDish:[],
        subCategoryDish:[],
        menuDay:[]
    }
}

function rootReducer(state=firstState, action){
    switch(action.type){
        case _load :
            return {
                ...state,
                payload:false
            }
        case _loadRes :
            return {
                ...state,
                payload: action.payload
            }
        case _loadError :
            return {
                ...state,
                payload: false,
                message:action.error
            }
        case _formedMenu : 
            return{
                ...state,
                adminPart:{
                    ...state.adminPart,
                    menuDay:action.menuDay,
                    categoryDish:action.categoryDish,
                    subCategoryDish:action.subCategoryDish
                }
            }
        default :
            return state
    }
}
const payloadState = state => state.payload;
const adminState = state => state.adminPart

export {rootReducer, payloadState, adminState}