export class Promocion{

  constructor(
    private id: number,
    private nombre: string,
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

  getImgName():string {

    return this.imgName;
  }//end getImg

  setImgName(imgName: string): void{

    this.imgName= imgName;
  }//end setImg

  getImgFile(): File{

    return this.imgFile;
  }//end getImgFile

  setImgFile(imgFile: File): void{

    this.imgFile= imgFile;
  }//end setImgFile
}//end Promocion class