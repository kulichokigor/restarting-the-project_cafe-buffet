
const data = {
        dishes:{
            hotMeals:{
                subcategoriesDishes: {
                    soup:[
                        {
                            id: 1,
                            typeDish:'soup',
                            dishName:'Сирний суп по-французьки',
                            addMenu: true,
                            description: 'Сирний суп по-французьки – різновид першої страви. Плавлений сирок гарно розплавляється у гарячій воді та надає супу специфічного смаку. Сподіваємося, вам буде до смаку сирний суп по-французьки з куркою та плавленим сирком',
                            price:1,
                            image: "./images/syrnyi-sup.jpg"
                        },
                        {
                            id: 2,
                            typeDish:'borsh',
                            dishName:'Запашний борщ: класичний рецепт',
                            addMenu: false,
                            description: 'За однаковим рецептом борщ може зробити багато хто, але вийде смачно не у всіх. У нас з вами вийде, в інших – ні. Уявіть – над глибокою тарілкою з густим яскраво-червоним борщиком піднімається прозоре марево! Духмяний запах не можна сплутати ні з чим!',
                            price:1,
                            image: "./images/borsh.jpg"
                        }
    
                    ],
                    sideDishes:[
                        {
                            id: 1,
                            typeDish:'porridge',
                            dishName:'Пшенична каша',
                            addMenu: true,
                            description: 'Найчастіше варять пшеничну кашу на воді. Рецепт, як правильно приготувати пшеничну кашу, простий. Але є кілька цікавих нюансів.',
                            price:1,
                            image: "./images/pshenychna-kasha.jpg"
                        }
                    ],
                    baking:[
                        {
                            id: 1,
                            typeDish:'Khachapuri',
                            dishName:'Хачапурі',
                            addMenu: true,
                            description: 'Хачапурі – це ситна та ароматна грузинська випічка, яка останнім часом зазнала безліч перетворень та доповнень. Кожна кухня готує її по-своєму, з додаванням певних видів сиру. Ми підготували рецепт пухкого тіста, яке поєднує у собі насичений смак сиру, золотисту хрумку скоринку та надзвичайний аромат.',
                            price:1,
                            image: "./images/cheese-khachapuri.jpg"
                        }
                    ]
                },
                categoryImage:"https://i.ibb.co/8BQLsSk/hot-meal-buffet.webp",
                nameCategory:"Hot Meals",
                uaNameCategory:"Гарячі страви",
                indexId:1,
            },
            appetizer:{
                subcategoriesDishes:{salads:[
                    {
                        id: 1,
                        typeDish:'salad',
                        dishName:'Салат “Цезар зі смаженими гливами”',
                        addMenu: false,
                        description: 'Пропонуємо вам незвичайний рецепт приготування салату "Цезар" з гливами. Гливи багаті на селен і бета-глюкан, мінерали та складні молекули, які стимулюють активність лейкоцитів, що відповідають за імунітет. Гливи є природним джерелом вітамінів B і D, містять антиоксидантні мінерали.',
                        price:1,
                        image: "./images/salat-tsezar.jpg"
                    },
                    {
                        id: 2,
                        typeDish:'salad',
                        dishName:'Грецький салат: пікантна середземноморська закуска',
                        addMenu: true,
                        description: 'Рецептів грецького салату багато, але незмінними компонентами є оливки, помідори, огірки, оливкова олія та багато вишуканих спецій. Існує безліч особливостей приготування грецького салату. Але головне, щоб салат вийшов яскравим, легким і веселим.',
                        price:1,
                        image: "./images/gretskiy-salat.jpg"
                    }
                ]},
                categoryImage:"https://i.ibb.co/c1DdygY/appetizer-buffet.webp",
                nameCategory:"Appetizer",
                uaNameCategory:"Закуски",
                indexId:2
            },
            desserts:{
                subcategoriesDishes:{
                    dessert:[
                        {
                            id: 1,
                            typeDish:'dessert',
                            dishName:'Чизкейк без випічки',
                            addMenu: true,
                            description: 'Класичний чізкейк без випічки з сиром, печивом і желатином – це чудовий і зовсім простий десерт. Чізкейк без випічки із сирної маси виходить легким і ніжним. А щоб стабілізувати сирну начинку, нам знадобиться трохи желатину.',
                            price:1,
                            image: "./images/cheesecake.jpg"
                        },
                        {
                            id: 2,
                            typeDish:'dessert',
                            dishName:'Львівський сирник',
                            addMenu: true,
                            description: 'Дивовижний львівський сирник – це приклад того, як натхнення та любов творять зі звичайних продуктів справжній бренд. Унікальність львівського сирника у тому, що настоявшись, на відміну від інших страв із домашнього сиру, він стає ще більш соковитим і ніжним. Отже, приготуємо львівський сирник.',
                            price:1,
                            image: "./images/lvivskiy-syrnyk.jpg"
                        },
                        {
                            id: 3,
                            typeDish:'dessert',
                            dishName:'Торт «Спартак»',
                            addMenu: true,
                            description: 'Скільки б всякої смачної випічки ви не приготували, але торт «Спартак» за класичним рецептом все одно залишиться найсмачнішим і найулюбленішим десертом. Нереально смачний шоколадний медовик з масляно-заварним кремом настільки ніжний, що просто тане у роті. Для наших господинь – перевірений рецепт «Спартака» з заварним кремом, простий і надійний!',
                            price:1,
                            image: "./images/tort-spartak.jpg"
                        },
                    ]
                },
                categoryImage:"https://i.ibb.co/6v24tRy/desserts-buffetwebp.webp",
                uaNameCategory:"Десерти",
                nameCategory:"Desserts",
                indexId:3
            },
            drinks:{
                subcategoriesDishes:{
                    hotDrinks:[
                        {
                            id: 1,
                            typeDish:'hotDrinks',
                            dishName:'Італійський гарячий шоколад з перцем чилі',
                            addMenu: true,
                            description: 'Незважаючи на наявність вогняного перцю чилі, гарячий шоколад не має гарячої гостроти. Напій виходить ніжний, приємний, із насиченим смаком. Поціновувачі дуже густого шоколаду, можуть збільшити його кількість у рецепті.',
                            image: "./images/gariachyi-chocolad-z-chilli.jpg",
                            price:1,
                        }
                    ],
                    coldDrinks:[
                        {
                            id: 1,
                            typeDish:'coldDrinks',
                            dishName:'Смузі з ягід',
                            addMenu: true,
                            description: 'Корисний енергетичний напій, що збадьорить вас та підніме настрій! Ви маєте безкрає поле для експериментів - смузі фруктові, овочеві, з зелені, з йогуртом, з молоком і тд. Просто обирайте, комбінуйте та пробуйте!',
                            price:1,
                            image: "./images/smuzi4.jpg"
                        }
                    ]
                },
                categoryImage:"https://i.ibb.co/gPH39p6/drinks-buffet.jpg",
                nameCategory:"Drinks",
                uaNameCategory:"Напої",
                indexId:4
            },
            testCat:{
                subcategoriesDishes:{
                    tea:[
                        {
                            id: 1,
                            typeDish:'тест',
                            dishName:'Чай наливай',
                            addMenu: true,
                            description: 'Це тест нової категорії',
                            price:1,
                            image: "./images/test-tea.jpg"
                        }
                    ]
                },
                categoryImage:"https://i.ibb.co/gM8rLdh/test.jpg",
                nameCategory:"Test Category",
                uaNameCategory:"Тестова категорія",
                indexId:5
            }
        },
        updateDate: `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}.${new Date().getFullYear().toString()}`,
        apiFact:false,
        dataPutVersion: '0.0.5'
    }
    
export {data}