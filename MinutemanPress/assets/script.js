// Test to check if script has loaded.
console.log("The script has successfully been loaded");


/**
 * This function will look to update the content of the section window 
 * When the anchor links are selected. It will bring in the relevant content
 */

 //Declaring the variables

const aboutLink = document.getElementById('aboutLink');//This is the About Link
const aboutContent = document.getElementById('about');//This is the About Content
// aboutLink.addEventListener('click',toggleAbout)//When the About Link is clicked, it should toggle hidden class. 
const prodLink = document.getElementById('prodLink');//This is the Product Link
const prodContent = document.getElementById('products');//This is the Product Content
// prodLink.addEventListener('click',toggleProduct);
const contactLink = document.getElementById('contactLink');//This is the Contact Link
const contactContent = document.getElementById('contact');//This is the Contact Content.
// contactLink.addEventListener('click',toggleContact);


function toggleAbout(){
    if(aboutContent.classList.contains('hidden')){
        //If the hidden class is present - true
        //Then toggle class with .active
        //Remove the hidden class
        aboutContent.classList.replace('hidden','active');
        // aboutContent.classList.add('active');
        console.log("The About class has been turned to active");
    }else{
        aboutContent.classList.replace('active','hidden');
        console.log("The About class has been changed to hidden");
    }

}

function toggleProduct(){
    if(prodContent.classList.contains('hidden')){
        prodContent.classList.replace('hidden','active');
        console.log("The Product element has been turned to Active");
    }else if( prodContent.classList.contains('active')){
        prodContent.classList.replace('active','hidden');

    }else{
        console.log("error in the Product Toggle");
    }
}
function toggleContact(){
    if(contactContent.classList.contains('hidden')){
        //If the hidden class is present - true
        //Then toggle class with .active
        //Remove the hidden class
        contactContent.classList.replace('hidden','active');
        // contactContent.classList.add('active');
        console.log("The contact class has been turned to active");
    }else{
        contactContent.classList.replace('active','hidden');
        console.log("The contact class has been changed to hidden");
    }

}





function registerLink(){
    let currentURL= document.URL;
    if(currentURL.endsWith("index.html")){
        //This is the homepage
        //This are the resets for the other content's so they remain hidden when the ABOUT content is active
        prodContent.classList.replace('active','hidden');
        contactContent.classList.replace('active','hidden');
        //This replaces the hidden class so the Content becomes active
        aboutContent.classList.replace('hidden','active');
        console.log("INDEX.html: There has been a hashchange event" + "\nThe current URL is:" + currentURL);
    }
    else if(currentURL.endsWith("#about")){
        // This is the About Page
        //This are the resets for the other content's so they remain hidden when the ABOUT content is active
        prodContent.classList.replace('active','hidden');
        contactContent.classList.replace('active','hidden');
        //This replaces the hidden class so the Content becomes active
        aboutContent.classList.replace('hidden','active');
        console.log("ABOUT: There has been a hashchange event" + "\nThe current URL is:" + currentURL);
    }
    else if(currentURL.endsWith("products")){
        // This is the Product Page
        //This are the resets for the other content's so they remain hidden when the PRODUCT content is active
        aboutContent.classList.replace('active','hidden');
        contactContent.classList.replace('active','hidden');
        //This replaces the hidden class so the Content becomes active
        prodContent.classList.replace('hidden','active');
        console.log("PRODUCTS: There has been a hashchange event" + "\nThe current URL is:" + currentURL);
    }
    else if(currentURL.endsWith("contact")){
        // This is the Contact Page
        //This are the resets for the other content's so they remain hidden when the CONTACT content is active
        aboutContent.classList.replace('active','hidden');
        prodContent.classList.replace('active','hidden');
        //This replaces the hidden class so the Content becomes active
        contactContent.classList.replace('hidden','active');
        console.log("CONTACT: There has been a hashchange event" + "\nThe current URL is:" + currentURL);
    }
    else{
        console.log("Error, technically a 404.\nWhere none of the links were selected, and someone entered in a wrong #link");
    }
}

window.addEventListener('hashchange',registerLink);