export class Promocion{

  constructor(
    private id: number,
    private nombre: string,
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

  getNombre(): string{

    return this.nombre;
  }//end getNombre

  setNombre(nombre: string): void{

    this.nombre= nombre;
  }//end setNombre

  getMedia(): string{

    return this.media;
  }//end getMedia

  setMedia(media: string): void{

    this.media= media;
  }//end setMedia

  getSrc():string {

    return this.src;
  }//end getImg

  setSrc(src: string): void{

    this.src= src;
  }//end setImg

  getImgFile(): File{

    return this.imgFile;
  }//end getImgFile

  setImgFile(imgFile: File): void{

    this.imgFile= imgFile;
  }//end setImgFile
}//end Promocion class