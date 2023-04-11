export interface ApiCarI {
    _id: string,
    brand: BrandType,
    model: string,
    type: CarType,
    power: number,
    par: number,
    engineType: string,
    engineCil: number,
    traction: TractionType,
    year: number,
    heigh: number,
    speed: number,
    image: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}
export interface CarI {
    _id: string,
    brand: BrandType,
    model: string,
    type: CarType,
    power: number,
    par: number,
    engineType: string,
    engineCil: number,
    traction: TractionType,
    year: number,
    heigh: number,
    speed: number,
    image: string, 
}
export interface CarRequestBody {
    brand: BrandType,
    model: string,
    type: CarType,
    power: number,
    par: number,
    engineType: string,
    engineCil: number,
    traction: TractionType,
    year: number,
    heigh: number,
    speed: number,
    image: string, 
}
export type CarType = 'Compacto' | 'Coupé' | 'Sedán' | 'Roadster' | 'Rancher'
export type TractionType = 'Trasera' | 'Delantera' | '4X4'
export type BrandType = 'Seat' | 'Renault' | 'Peugeot' | 'Citroën' | 'Ford' | 'Opel' | 'Volkswagen' | 'Toyota' | 'Nissan' | 'Fiat' | 'Kia' | 'Hyundai' | 'Bmw' | 'Mercedes-Benz' | 'Audi' | 'Volvo' | 'Mazda' | 'Skoda' | 'Mini' | 'Land Rover' | 'Jeep' | 'Mitsubishi' | 'Suzuki' | 'Honda' | 'Alfa Romeo' | 'Lexus' | 'Subaru' | 'Porsche' | 'Jaguar' | 'Smart';
