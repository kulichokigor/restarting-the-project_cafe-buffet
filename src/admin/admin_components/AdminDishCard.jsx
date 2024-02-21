import { useRef, useEffect } from "react";
import dynamicRecordChanges from "../../utilities/utilites_functionForDubCLick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faImages } from "@fortawesome/free-solid-svg-icons";


const DishCard = ({stateCard, clsMod, subCategory, index, requriedCard, cardReloader, imageReplacement, deleteCard}) => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const inputImgRef = useRef();
    useEffect(()=>{
        titleRef.place = 'dishName';
        descriptionRef.place = 'description';
        priceRef.place = 'price';
    //функція dynamicRecordChanges приймає 2 параметри, перший DOM едемент по ref, інший якщо є, то матиме вплив на зміну елемента при подвійному кліку (* utilities)
        dynamicRecordChanges(titleRef, true, cardReloader, subCategory, stateCard.id);
        dynamicRecordChanges(descriptionRef, true, cardReloader, subCategory, stateCard.id);
        dynamicRecordChanges(priceRef, false, cardReloader, subCategory, stateCard.id);    
    },[]);
    return (
        <article id={stateCard.id} className={clsMod["admin--box"]}>
            <div>
                <div className={clsMod["admin--box-title"]}><div ref={titleRef}><span>{stateCard.dishName}</span></div></div>
                <div className={clsMod["admin--box-image"]} style={{backgroundImage:`url(${stateCard.image})`}}>
                    {/* для заміни зображень на картах адміністратора *^a2 */}
                <FontAwesomeIcon onClick={()=>imageReplacement(subCategory, stateCard, inputImgRef)} icon={faImages} style={{color:"#0075ff", float: "left"}}/>
                <input ref={inputImgRef} type="file" accept="image/*" style={{display:'none'}}/>

                </div>
                <i>-{index + 1}-</i>
            </div>
            <div><input onChange={(e)=>requriedCard(e, stateCard, subCategory)} type="checkbox" checked={stateCard.addMenu}/></div>
            <div>
                <div className={clsMod["admin--box-delete-card"]}>
                    <FontAwesomeIcon icon={faTrash} onClick={()=>deleteCard(subCategory, index)}/>
                </div>
                <div className={clsMod["admin--box-description"]}><div ref={descriptionRef}><span>{stateCard.description}</span></div></div>
                <div className={clsMod["admin--box-price"]}>Ціна: <div ref={priceRef}><span>{stateCard.price || 5}</span></div>₴</div>
            </div>
        </article>
    );
}
export default DishCard;