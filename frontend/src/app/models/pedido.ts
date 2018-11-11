import { Producto } from './producto';

export class Pedido{

  constructor(
    private id: number,
    private nombre: string,
    private telefono: string,
    private direccion: string,
    private producto: Producto,
    private cantidad: number,
    private horario: string,
    private fecha: string
  ){ }

  getId(): number{

    return this.id;
  }//end getId

  setId(id: number): void{

    this.id= id;
  }//end setId

  getNombre(): string{

    return this.nombre;
  }//end getNombre

  setNombre(nombre: string): void{

    this.nombre= nombre;
  }//end setNombre

  getTelefono(): string{

    return this.telefono;
  }//end getTelefono

  setTelefono(telefono: string): void{

    this.telefono= telefono;
  }//end setTelefono

  getDireccion(): string{

    return this.direccion;
  }//end getDireccion

  setDireccion(direccion: string): void{

    this.direccion= direccion;
  }//end setDireccion

  getProducto(): Producto{

    return this.producto;
  }//end getProductoId

  setProductoId(producto: Producto): void{

    this.producto= producto;
  }//end setProductoId

  getCantidad(): number{

    return this.cantidad;
  }//end getCantidad

  setCantidad(cantidad: number): void{

    this.cantidad= cantidad;
  }//end setCantidad

  getHorario(): string{

    return this.horario;
  }//end getHorario

  setHorario(horario: string): void{

    this.horario= horario;
  }//end setHorario

  getFecha(): string{

    return this.fecha;
  }//end getFecha

  setFecha(fecha: string){

    this.fecha= fecha;
  }//end setFecha
}//end Pedido class
