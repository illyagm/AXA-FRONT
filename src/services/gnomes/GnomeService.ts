import { IGnomeService } from "./IGnomeService";
import axios from 'axios';

export default class GnomeService implements IGnomeService{
    public async getAll(): Promise<any> {
        return axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"); 
    }       
}