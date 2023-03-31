import styles from "./index.css"

export enum Attribute {
    "name" = "name",
    "species" = "species",
    "gender" = "gender",
    "image" = "image",
}

class cpost extends HTMLElement{
    name?: string;
    species?: string;
    gender?: string;
    image?: string;

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {

            name: null,
            species: null,
            gender: null,
            image: null,


        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
      }


    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=
                `
                <section class="all">
                    <section >
                        <section class = "up">
                        <h1 class = "name"> Nombre: ${this.name}</h1>
                        <img class="img" src="${this.image}">
                        <p class = "letra">Especie: ${this.species}</p>
                        <p class = "letra">Genero: ${this.gender}</p>
                        </section> 
                        </section> 
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}
customElements.define("charcter-post", cpost);
export default cpost;