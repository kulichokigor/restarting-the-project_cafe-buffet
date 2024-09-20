//dynamicallyWordsInKey ^a3*
export function dynamicallyWordsInKey(word){
    const arr = word.trim().split('');
    const result = arr.map((lt, index)=>{
        if(lt===' '){
            let upEl = arr[index+1].toUpperCase()
            delete arr[index + 1]
            return upEl
        }
        return lt
    })
    result[0]=result[0].toLowerCase()
    return result.length > 0 && result.join('')
}

