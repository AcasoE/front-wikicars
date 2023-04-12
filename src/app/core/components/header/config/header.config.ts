import { HeaderLinkAdmin, HeaderLinkUser,  } from './../models/headers.models';
export const headerlinksUser: HeaderLinkUser[] =[

    {
        url: 'home',
        content:'Home'
    },
    {
        url: 'create',
        content:'Subir coche'
    },
    {
        url: 'cars-list',
        content:'Listado de productos'
    }
]

export const headerlinksAdmin: HeaderLinkAdmin[] = [
    
    {
        url: 'home',
        content:'Home'
    },
    {
        url: 'create',
        content:'Subir coche'
    },
    {
        url: 'cars-list',
        content:'Listado de productos'
    },
    {
        url: 'validation-list',
        content:'Validar coches'
    }
]