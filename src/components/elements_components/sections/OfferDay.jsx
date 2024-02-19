import { useSelector } from 'react-redux';
import { adminState } from '../../../redux/reducer/rootReducer';
import clsSection from '../../../css/modules/sections.style.module.css'


function OfferDay() {
  const payloadDB = useSelector(adminState);
  console.log(payloadDB);
  // !!!! варіанти: або переклад категорій на українську з payload (на випадок збільшення видів категорій)
  // або статична сторінка
  // або добавлення в payload об`єкт укр версії
    return ( 
        <section>
          <div className="container">
            <section>
            
              <div className={clsSection["section-main-logo"]}>
                    <h1>Пропозиція дня</h1>
                <span>Музика під час обіду - це образа і для кухаря, і для скрипаля</span>
              </div>
            </section>
            <section>
                <div className={clsSection["section-main-item"]}>
                  <div>
                    <p>desserts</p>
                    <p><span className={clsSection["liner"]}></span></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <p>smothies</p>
                    <p><span className={clsSection["liner"]} style={{backgroundColor:'#151b29'}}></span></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <p>breackfast</p>
                    <p><span className={clsSection["liner"]}></span></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
            </section>
            </div>
        </section>
     );
}

export default OfferDay;