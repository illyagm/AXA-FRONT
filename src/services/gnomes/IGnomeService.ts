import { IGnome } from "../../models/IGnome";
import { IGnomeFilter } from "../../interfaces/filters/IGnomeFilter";
import { IBaseResponse } from "../../interfaces/IBaseResponse";


export interface IGnomeService {
    getAll():Promise<IGnome[]>;
    getBy(filter:IGnomeFilter):Promise<IGnome[]>;
    getById():Promise<IGnome>;
    save():Promise<IBaseResponse>;
}
