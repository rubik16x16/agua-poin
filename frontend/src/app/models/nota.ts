export class Nota{

  constructor(
    private id: number,
    private titulo: string,
    private cuerpo: string,
    private media: string,
    private src: string,
    private imgFile: File = null
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

  getMedia(): string{

    return this.media;
  }//end getMedia

  setMedia(media: string): void{

    this.media= media;
  }//end setMedia

  getSrc(): string{

    return this.src;
  }//end getSrc

  setSrc(src: string): void{

    this.src= src;
  }//end setSrc

  getImgFile(): File{

    return this.imgFile;
  }//end getImgFile

  setImgFile(imgFile: File){

    this.imgFile= imgFile;
  }//end setImgFile
}//end Nota class
