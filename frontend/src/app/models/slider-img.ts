export class SliderImg{

  constructor(
    private id: number,
    private nombre: string,
    private imgSrc: string,
    private imgFile: File = null
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

  getImgSrc(): string{

    return this.imgSrc;
  }//end getImgSrc

  setImgSrc(imgSrc: string): void{

    this.imgSrc= imgSrc;
  }//end setImgSrc

  getImgFile(): File{

    return this.imgFile;
  }//end getImgFile

  setImgFile(imgFile: File): void{

    this.imgFile= imgFile;
  }//end setImgFile
}//end SliderImg