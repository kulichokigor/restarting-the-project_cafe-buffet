export const functionForCorrectingNames = (arr) =>{
    if(Array.isArray(arr)){
        const result = arr.map((category, index)=>{
            let arrLetter = category.split('');
            let result = arrLetter.map((el, index)=>{
                return /[A-ZА-Я]/.test(el) && index
            })
            result.forEach(el=>{
                if(typeof el === 'number'){
                    let smallLater = ' ' + arrLetter[el].toLowerCase();
                    el !== 0 && el !== arrLetter.length-1 ? arrLetter.splice(el, 1, smallLater) : arrLetter.splice(el, 1, smallLater.trim());
                }
            })
            return arrLetter.join('')
        })
    
        return result
    }else{
        let arrLetter = arr.split('');
        let result = arrLetter.map((el, index)=>{
            return /[A-ZА-Я]/.test(el) && index
        })
        result.forEach(el=>{
            if(typeof el === 'number'){
                let smallLater = ' ' + arrLetter[el].toLowerCase();
                el !== 0 && el !== arrLetter.length-1 ? arrLetter.splice(el, 1, smallLater) : arrLetter.splice(el, 1, smallLater.trim());
            }
        })
        return arrLetter.join('')
    }
       
}