class Navbar{
    constructor(textContent,href){
        this.href=href;
        this.textContent=textContent;
    }
    createElement(){
        this.element=document.createElement("a");  
        this.element.href=this.href;
        this.element.textContent=this.textContent;
    }
}


    const navbar=document.getElementById('navbar');
    

    const homeLink=new Navbar('home','#home')
    homeLink.createElement()
    navbar.appendChild(homeLink.element);

    const contactLink=new Navbar('contact','#contact')
    contactLink.createElement()
    navbar.appendChild(contactLink.element);


    const typeaheadLink=new Navbar('typeahead',"./challenges/Typeahead/typeahead.html")
    typeaheadLink.createElement()
    navbar.appendChild(typeaheadLink.element);

    const fetchDataApiLink=new Navbar('fetchData',"./challenges/FetchData/index.html");
    fetchDataApiLink.createElement()
    navbar.appendChild(fetchDataApiLink.element);
