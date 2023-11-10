import options from "./options.js"
import debounceFn from '../..//utils/debounce.js'
class Typeahead{
    constructor(inputElem,suggesstionsList,options){
        this.inputElem=inputElem;
        this.suggesstionsList=suggesstionsList;
        this.options=options;
        this.debounceFnInputHandle=debounceFn(this.handleInputChange.bind(this),300)
        this.inputElem.addEventListener('input',this.debounceFnInputHandle)
        this.suggesstionsList.addEventListener('click',this.handleSuggesstions.bind(this))

        // console.log("options",this.inputElem)
    }

    handleInputChange(){
        const userInput=this.inputElem.value.toLowerCase();
        console.log("usrInp",userInput)
        if(userInput!==""){
            const results=this.options.filter((ele)=>ele.includes(userInput))
            this.showSuggesstionsList(results)    
        }else{
            this.showSuggesstionsList(["Thanks for using the search!!!"])
        }
    }

    showSuggesstionsList(results){
        this.suggesstionsList.innerHTML=""
        results.map((e)=>{
            const li = document.createElement('li');
            li.textContent=e;
            this.suggesstionsList.appendChild(li);
        })
        if(results.length==0){
            this.suggesstionsList.appendChild(document.createTextNode("No Records Found !!!"))
        }
    }

    handleSuggesstions(event){
        const targetElement=event.target.textContent;
        this.inputElem.value=targetElement;       
        this.suggesstionsList.innerHTML=''
    }
}

const inputElem=document.getElementById('typeahed-input');
const suggesstionsList=document.getElementById('suggesstionsList')

new Typeahead(inputElem,suggesstionsList,options)
