export class Producto{

  constructor(
    private id: number,
    private nombre: string,
    private precio: number,
    private imgName: string,
    private imgFile: File
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

  getPrecio(): number{

    return this.precio;
  }

  setPrecio(precio: number){

    this.precio= precio;
  }

  getImgName(): string{

    return this.imgName;
  }//end getImgName

  setImgName(imgName: string): void{

    this.imgName= imgName
  }//end setImgName

  getImgFile(): File{

    return this.imgFile;
  }//end getImgFile

  setImgFile(imgFile: File): void{

    this.imgFile= imgFile;
  }//end setImgFile
}//end Producto class
