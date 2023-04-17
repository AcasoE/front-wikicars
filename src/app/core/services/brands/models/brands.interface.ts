import { BrandType } from "../../car/models/car.interface";

export interface ApiBrandI {
    _id: string,
    brand: BrandType,
    image: string,
    url:string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}
export interface BrandI{
    _id: string,
    brand: BrandType,
    url: string,
    image: string
}
export interface BrandRequestBodyI {
    brand: BrandType,
    image: string,
    url: string

}