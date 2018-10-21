export class Admin{

  constructor(
    private id: number,
    private correo: string,
    private clave: string
  ){ }

  getId(): number{

    return this.id;
  }//end getId

  setId(id: number): void{

    this.id= id;
  }//end setId

  getCorreo(): string{

    return this.correo;
  }//end getCorreo

  setCorreo(correo: string): void{

    this.correo= correo;
  }//end setCorreo

  getClave(): string{

    return this.clave;
  }//end getClave

  setClave(clave: string): void{

    this.clave= clave;
  }//end setClave
}//end Admin class
