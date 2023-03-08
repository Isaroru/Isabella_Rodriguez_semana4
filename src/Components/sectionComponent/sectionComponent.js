class SectionComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        return ['task']
    }

    deleteTask(){
        this.remove();
    }
    
    connectedCallback(propName, newValue){
        this[propName] = newValue;
        this.render();        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue
        this.render
    }

    render(){
        this.shadowRoot.innerHTML=`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="/src/Components/sectionComponent/style.css">
        <li class= "task">
                <input type="checkbox" checked="false">
                <label for="task1"> ${this.task} </label>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"> Delete</button>
        </li>
        `;
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener('click', () => this.deleteTask());
    }

}

customElements.define('section-component',SectionComponent);
export default SectionComponent;