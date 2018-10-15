export class Nota{

  constructor(
    private id: number,
    private titulo: string,
    private cuerpo: string,
    private img: string){ }

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

  getImg(): string{

    return this.img;
  }//end getImg

  setImg(img: string): void{

    this.img= img;
  }//end setImg
}//end Nota class
