import { IGnome } from "../../models/IGnome";


export interface IGnomeService {
    getAll():Promise<IGnome[]>;
}
