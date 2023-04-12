export interface HeaderLinkUser{
    url: HeaderUrl;
    content: string;
}
export type HeaderUrl = 'home'| 'create' | 'cars-list' 

export interface HeaderLinkAdmin{
    url: HeaderUrlAdmin;
    content: string
}

export type HeaderUrlAdmin = 'home'| 'create' | 'cars-list' | 'validation-list' 