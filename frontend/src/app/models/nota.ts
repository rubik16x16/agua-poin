export class Nota{

  constructor(
    private id: number,
    private titulo: string,
    private cuerpo: string,
    private imgName: string,
    private imgFile: File
    ){ }

  getId(): number{

    return this.id;
  }//end getId

  setId(id: number): void{

    this.id= id;
  }//end setId

  getTitulo(): string{

    return this.titulo;
  }//end getTitulo

  setTitulo(titulo: string): void{

    this.titulo= titulo;
  }//end setTitulo

  getCuerpo(): string{

    return this.cuerpo;
  }//end getCuerpo

  setCuerpo(cuerpo: string): void{

    this.cuerpo= cuerpo;
  }//end setCuerpo

  getImgName(): string{

    return this.imgName;
  }//end getImgName

  setImgName(imgName: string): void{

    this.imgName= imgName;
  }//end setImgName

  getImgFile(): File{

    return this.imgFile;
  }//end getImgFile

  setImgFile(imgFile: File){

    this.imgFile= imgFile;
  }//end setImgFile
}//end Nota class
