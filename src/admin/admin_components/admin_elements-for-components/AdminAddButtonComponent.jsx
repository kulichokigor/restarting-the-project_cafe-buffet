import cls from "../../css/admin.module.css";

const AddCardButton = ({subCategory, addCardFunction}) => {
    // * cardDishesTemplate => шаблон об`єкта страви. ver 0.0.1 dt 02.02.24
    const cardDishesTemplate = {
        addMenu:"",
        description: "",
        dishName: "",
        id: "",
        image: "",
        typeDish: "",
        price:""
    }

    return ( 
        <div className={cls["add-btn"]} onClick={()=>addCardFunction(subCategory, cardDishesTemplate)}>
            +
        </div>
     );
}
 
export default AddCardButton;