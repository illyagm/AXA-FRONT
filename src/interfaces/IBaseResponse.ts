export interface IBaseResponse {
    isSuccess: boolean;
    hasErrors: boolean;
    errorMessages: string[];
    objectId: string;
}