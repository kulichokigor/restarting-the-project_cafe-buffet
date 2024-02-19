function dynamicRecordChanges(el, mark = 0, setFunc, sub, idCard) {
    el && el.current.addEventListener('dblclick', event=>{
        event.preventDefault();
        const currentTagName = event.target.tagName.toLowerCase();
        const modifyTag =  !mark ? 'input' : 'textarea';
        const newTagName = currentTagName === modifyTag ? 'span' : modifyTag;
        const newTag = document.createElement(newTagName);
        
        const valueModifyElement = event.target.value || event.target.textContent
        // для числового значення (input)
        if(newTag.tagName.toLowerCase() === 'input'){
            newTag.setAttribute('type', 'number');
            newTag.classList.add('dbl-change')
        }
        if(newTag.tagName.toLowerCase() === 'span'){
            newTag.classList.add('dbl-currenttag')
        }
        if(newTag.tagName.toLowerCase() === 'textarea'){
            newTag.classList.add('dbl-change');
        }
       
        newTag.textContent = valueModifyElement;
        event.target.parentNode.replaceChild(newTag, event.target);
        //for dbClick-bug

        //for rewrite
        setFunc && setFunc(el, newTag, sub, idCard) // ??
    })

}

export default dynamicRecordChanges;