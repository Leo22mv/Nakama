export interface IProducto {
    id: number;
    urlFoto: string;
    precio: number;
    nombre:string;
    descripcion: string;
    serie: string;
    stock: number;
    categoria: string;
    activo: boolean;
    cantidad: number;
}