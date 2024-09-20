import { useState } from 'react';
import { useSelector } from 'react-redux';

import classesSlider from '../../css/modules/app.style.module.css';
import { adminState, payloadState } from '../../redux/reducer/rootReducer';



import { data } from '../../api/test.api.slider[version19.11.2023]';

export default function Slider(props){
    const [sliderState, setSliderState] = useState({slidePosition:0});
    
    //--redux store {menu*}
    const stateApp = useSelector(payloadState);
    const selector = useSelector(adminState);
    const mainStateMenu = selector.menuDay;
    //redux store {menu*} --

    const sliderFunction = vector => {
        
        setSliderState(prevState=>{ 
            let sliderTransform = (prevState.slidePosition <= 0 && prevState.slidePosition >= -(mainStateMenu.length-1) * 100) ? ((prevState.slidePosition > 0 && prevState.slidePosition <= -(mainStateMenu.length-1) * 100) ? prevState.slidePosition : prevState.slidePosition + (vector * 100)) : ( prevState.slidePosition > 0 ? -(mainStateMenu.length-1) * 100 : 0)
            return {
                ...prevState,
                slidePosition: sliderTransform <= 0 && sliderTransform >= -(mainStateMenu.length-1) * 100 ? sliderTransform : 0
            }
        });
    }
    const newListSlider = []
    mainStateMenu && mainStateMenu.forEach(el=>{
        el.addMenu && newListSlider.push(el)
    });

    //db slider log
    const sliderListData = newListSlider.map((el,index)=>{
        return <li
                key={index}
                style={{backgroundImage:`url(${el.image})`, 
                transform: `translate3d(${sliderState.slidePosition}%, 0px, 0px)`}}></li>
    });

    const  sliderOrderlinesList = mainStateMenu && mainStateMenu.map((el, index)=>{
        let elect = index + 1 === ((sliderState.slidePosition /100) * -1) + 1
        return (
            <li
                key={index}
                className={elect ? classesSlider['elect'] : null}
                style={{transform:`translateY(${sliderState.slidePosition}%)`}}
            >{index + 1 > 9 ? index + 1 : `0${index + 1}`}</li>
        )
    })

    return (
        <section className={classesSlider["slider"]}>
            <div className="container">
                <div className={classesSlider["slider--box"]}>
                    <button 
                        className={classesSlider["slider--box-left"]} 
                        onClick={()=>sliderFunction(1)}
                    >&#x2039;</button>
                    <button 
                        className={classesSlider["slider--box-right"]}
                        onClick={()=>sliderFunction(-1)}
                    >&#x203A;</button>
                    <div className={classesSlider["slider--images-box"]}>
                        <ul>
                            {sliderListData}
                        </ul>
                    </div>
                    <div className={classesSlider["slider--bottom-section"]}>
                    <div className={classesSlider["slider--orderliness"]}>
                        <ul>
                            {sliderOrderlinesList}
                        </ul>
                    </div>
                    <div className={classesSlider["slider--date-menu"]}>Меню на сьогодні! <i>{`${new Date().getDate()}.${new Date().getMonth()+1}`}</i></div>
                    <button className={classesSlider["slider--button"]} onClick={()=>putData(data)}>book a table</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function putData(stateApp){
    fetch('https://buffet-tat-caffe.firebaseio.com/payload.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(stateApp)
    })
}