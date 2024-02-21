import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClose, faAdd } from "@fortawesome/free-solid-svg-icons"

import DishCard from "./AdminDishCard";
import AddCardButton from "./admin_elements-for-components/AdminAddButtonComponent";

import {functionForCorrectingNames} from "../../utilities/utilites_functionForCorrectingNames";


const AdminBlender = ({category, clsMod, state}) =>{
    const correctCategoryName = functionForCorrectingNames(category);
    //subCat
    const [stateBlander, setStateBlander] = useState(state.dishes[category]);
    // stateBlander - це стейт для кожної категорії (категорія => дані), для зміни повністю категорій
    const subDish = stateBlander.subcategoriesDishes;
    const subCategoryNameArr = Object.keys(subDish);

    // -- START CATEGORY_FUNCTIONS -- 
    //функція на додавання підкатегорій
    const addSubcategoriesBlender = () =>{
        let subEntered = prompt('Введіть назву нової підкатегорії');
        subEntered.trim().length > 0 && setStateBlander(prev=>{
            const sub = prev.subcategoriesDishes;
            const newSub = {[subEntered]:[]}
            Object.assign(sub, newSub)
            return {
                ...prev
            }
        })
    }
    //функція на видалення підкатеорій
    const removeSubcategoriesBlender = (sub) =>{
        const confirmation = window.confirm(`Видалити підкатегорію ${functionForCorrectingNames(sub)}?`); 
        confirmation && setStateBlander(prev=>{
            delete prev.subcategoriesDishes[sub]
            return {
                ...prev
            }
        })
    }

    // -- END CATEGORY_FUNCTIONS -- 

    // -- START CARD_FUNCTIONS -- 
    //checkedDishCardBlender => функція вибору карти адміністратором check
    const checkedDishCardBlender = (e, card, sub)=>{
        setStateBlander(prev=>{
            const catSelArr = prev.subcategoriesDishes[sub];
            const reqCard = catSelArr.find(el=>(el.id === card.id));
            reqCard.addMenu = e.target.checked
            return{
                ...prev
            }
        })
    }
    // функція на заміну тексту карти, вказування місця заміни *. Головний функціонал на зміни title, description, price знаходиться в утилітах functionForDubCLick
    const cardReloaderBlender = (el, changedTag, sub, id) =>{
        if(changedTag && changedTag.classList.contains('dbl-currenttag')){
            setStateBlander(prev=>{
                const subCat = prev.subcategoriesDishes[sub];
                const replaceCard = subCat[id-1];
                const replaceElemCard = el.place;
                replaceCard[replaceElemCard] = changedTag.textContent;
                return {
                    ...prev
                }
            })
        }
    }
    //функція на заміну || завантаження зображень *^a2
    const imageReplacementBlender = (sub, card, inputImage) =>{
        inputImage.current.click();
        inputImage.current.addEventListener('change', (event)=>{
            if(event.target.files[0]){
                const reader = new FileReader();
                reader.onloadend = () =>{
                    const imageDataUrlBase = reader.result;
                    setStateBlander(prev=>{
                        const result = {
                            ...prev,
                            subcategoriesDishes:{
                                ...prev.subcategoriesDishes,
                                [sub]:prev.subcategoriesDishes[sub].map((el)=>{
                                    if(el.id===card.id){
                                        el.image = imageDataUrlBase
                                    }
                                    return el
                                })
                            }
                        }
                        return result
                    })
                }
                reader.readAsDataURL(event.target.files[0])
            }
        })
    }
    // функція на видалення карти
    const deleteCardBlender = (sub, index) =>{
        const confirmation = window.confirm('Видалити карту?')
        confirmation && setStateBlander(prev=>{
            const catSelArr = prev.subcategoriesDishes[sub];
            catSelArr.splice(index,1)
            return {
                ...prev
            }
        })
    }
    // -- END CARD_FUNCTIONS --

    // -- START ADD_NWE_CARD_FUNCTIONS --
    // функції для додавання нових карт
    function repeatedComponentCode(key, addBlankCard, adjustingArray, sub){
        addBlankCard[key] = `Ведіть дані ${key}`;
        if(key==='id'){addBlankCard[key] = adjustingArray.length + 1};
        if(key==='addMenu'){addBlankCard[key] = false};
        if(key==='image'){addBlankCard[key] = '/images/logo.png'};
        if(key==='typeDish'){addBlankCard[key] = sub};
        if(key==='price'){addBlankCard[key] = `?`};
    }

    const addNewCardBlender = (sub, cardDishesTemplate) =>{
        const adjustingArray = stateBlander.subcategoriesDishes[sub];
        const addBlankCard = {}; //пуста dishCard
        const keyNewCard = Object.keys(cardDishesTemplate)
        // а якщо масив пустий? Створити dishCard з шаблону addBlankCard
        keyNewCard.length > 0 ? keyNewCard.forEach(key=>{
            //повторювані дані! Фу-ція repeatedComponentCode пвертає правильно згенеровані ключі і значення для нових dishCard
            repeatedComponentCode(key, addBlankCard, adjustingArray, sub)
        }) : cardDishesTemplate.forEach(key=>repeatedComponentCode(key, addBlankCard, adjustingArray, sub))
        setStateBlander(prev=>{
            const prevSubcategoriesDishes = prev.subcategoriesDishes[sub];
            prevSubcategoriesDishes.push(addBlankCard)
            return {...prev}
        })
    }
    // -- END ADD_NWE_CARD_FUNCTIONS --

    // -- START PART_OF_THE_RENDER --
    const subCategoryDish =  subCategoryNameArr.map((sub, index)=>{
        return (
            <article key={index} className={clsMod["sub_category-article"]}>
                <div className={clsMod["sub_category--section"]}>
                    <div className={clsMod["sub_category--container"]}>
                        <div></div>
                        <div>{functionForCorrectingNames(sub)}</div>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faClose} onClick={()=>removeSubcategoriesBlender(sub)}/>
                </div>
                <div className={clsMod["sub_category--box-container"]}>
                    {subDish[sub].map((dish, index)=>{
                        return <React.Fragment key={index}>
                            <DishCard 
                                stateCard={dish} 
                                clsMod={clsMod} 
                                subCategory={sub}
                                index={index}
                                // functions
                                requriedCard={checkedDishCardBlender} 
                                cardReloader={cardReloaderBlender} 
                                imageReplacement={imageReplacementBlender}
                                deleteCard={deleteCardBlender}
                            />
                            {subDish[sub].length === index + 1 && <AddCardButton subCategory={sub} addCardFunction={addNewCardBlender}/>}
                        </React.Fragment>
                    })}
                    {stateBlander.subcategoriesDishes[sub].length === 0 && <AddCardButton subCategory={sub} addCardFunction={addNewCardBlender}/>}
                </div>
            </article>
        )
    })
    // RENDER
    return (
        <section className={clsMod["admin--category-section"]}>
            <div className={clsMod["category-section--list"]}>
                <div>
                    <span>{correctCategoryName}</span>
                    <FontAwesomeIcon icon={faAdd} onClick={addSubcategoriesBlender} />
                    <div></div>
                </div>
               {subCategoryDish}
            </div>
        </section>
    )
}

export default AdminBlender