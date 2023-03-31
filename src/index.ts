import carta, {Attribute} from "./components/card/index"
import  { getData } from "./data";

class Appcontainer extends HTMLElement{

    carta: carta[]=[];
    

    constructor(){
        super();
        this.attachShadow({mode:"open"});      
    }

    async connectedCallback() {
        const data = await getData() 

        data?.forEach((user:any) => {
            const sugest = this.ownerDocument.createElement(
                "charcter-post"
                ) as carta;
                sugest.setAttribute(Attribute.name, user.name);
                sugest.setAttribute(Attribute.species, user.species);
                sugest.setAttribute(Attribute.gender, user.gender);
                sugest.setAttribute(Attribute.image, user.image);
                this.carta.push(sugest);
             });
             
        this.render(this.carta);
    }
    
    render(carta:any) {
        
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;

           for (let index = 0; index < carta.length; index++) {
            this.shadowRoot?.appendChild(carta[index])
           }

           

        }
    }
}

customElements.define("my-contain", Appcontainer);