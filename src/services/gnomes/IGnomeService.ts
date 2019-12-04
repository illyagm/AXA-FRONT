import { IGnome } from "../../models/IGnome";
import { IBaseResponse } from "../../interfaces/IBaseResponse";


export interface IGnomeService {
    getAll():Promise<IGnome[]>;
    getById():Promise<IGnome>;
    save():Promise<IBaseResponse>;
}
