import{reactive} from 'vue';
import axios from 'axios';

export const store = reactive({
     /**
     * @property {number} id
     * @property {string} firstName
     * @property {string} lastName
     * @property {string} fullName
     * @property {string} title
     * @property {string} family
     * @property {string} image
     * @property {string} imageUrl
     */
    charatersList:[],
    loading: false,
});

export function fetchCharacters () {
    axios.get("https://thronesapi.com/api/v2/Characters")
        .then((resp)=>{
            //resetto ogni eventuale precedente errore:
            // this.ajaxError ="";
            console.log(resp.data);
            store.charatersList = resp.data

            setTimeout(()=>{
                store.loading= false;
            },2000)

        })
        .catch((error)=>{
            console.log(error);
            // this.ajaxError = "L'applicazione non può essere caricata a causa di un errore";
            store.loading= false;store.loading= false;
        })
}
