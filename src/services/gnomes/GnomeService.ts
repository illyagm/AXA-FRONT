import { IGnomeService } from "./IGnomeService";
import axios from 'axios';

export default class GnomeService implements IGnomeService{
    public async getAll(): Promise<any> {
        //devuelvo la promise de axios y la resolveré en el componente dónde llame la funcion getAll()
        return axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"); 
    }       
}