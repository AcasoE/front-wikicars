export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string | null;
    rol: string;
    edad?: number;
    createdAt: number;
    updatedAt: number;
    __v?: number
}
export interface IUserSingResponse{
    user: IUser;
    token: string;
}