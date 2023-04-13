export interface UserRequestBody {
    name: string;
    email?: string;
    password?: string | null;
    edad?: number;
    rol: RolType
}
export type RolType = 'user' 