export interface Producto{
    id:number;
    Nombre:string;
    descripcion: string;
    precio: number;
    imagen: string;
    disponibilidad: boolean;
    cantidad?: number;
}