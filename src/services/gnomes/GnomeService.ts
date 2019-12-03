import { IGnomeService } from "./IGnomeService";
import { IGnome } from "../../models/IGnome";
import axios from 'axios';

export default class GnomeService implements IGnomeService{

    public async getAll(): Promise<any> {
        //devuelvo la promise de axios y la resolveré en el componente dónde llame la funcion getAll()
        return axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"); 
    }    
    public async getBy(filter: any): Promise<IGnome[]> {
        throw new Error("Method not implemented.");
    }
    public async getById(): Promise<IGnome> {
        throw new Error("Method not implemented.");
    }
    public async save(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    
}