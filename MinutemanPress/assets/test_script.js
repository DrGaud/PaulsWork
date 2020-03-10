console.log("The Test Script has loaded");


function hideFromScreen(elements) {
    //This function takes the elements passed
    // Adds the hidden class to the classList
    elements = elements.length ? elements : [elements];
    
    console.log(typeof(elements));
    console.log(elements);
    for( var index = 0 ; index < elements.length; index++){
        elements[index].classList.add("hidden");
        
        console.log(elements[index]);
    }

}



function listAttributes(e){
    var element = e;
    e;e,et
    
    for(var entity of element.entries()){
        console.log(entity);
      
    }
}

function toggleHidden(element){
    //This function would toggle between the .hidden and .active class
        element = element.length ? element : [element];
        console.log(element);
        console.log(typeof(element));
        for(index = 0; index < element.length; index++){
            elemental = element[index];
            console.log(elemental);
        }
}

function isElementHidden(element){
    element = element.length ? element : [element];
    for(index = 0 ; index < element.length; index++){
        elements = element[index];
        if(element[index].classList.contains('hidden')){
            console.log(element[index].name +" is set to hidden")
        } else{
            console.log(element[index].name +" is not hidden");
        }
    }
    // style = window.getComputedStyle(element);
    // console.log(style);
    
    // if(style === "hidden"){
    //     console.log("Element is currently hidden")
    // }else{
    //     console.log("Element is not hidden");
    // }

    // console.log("The styles for this: "+ element + "is:" + style);
}

const aboutLink = document.getElementById('about')
function toggle(){

}



toggleHidden(document.querySelectorAll('section'));
isElementHidden(document.querySelectorAll('section'));
