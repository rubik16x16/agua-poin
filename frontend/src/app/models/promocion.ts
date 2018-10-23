export class Promocion{

  constructor(
    private id: number,
    private nombre: string,
    private img: string
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

  getImg():string {

    return this.img;
  }//end getImg

  setImg(img: string): void{

    this.img= img;
  }//end setImg
}//end Promocion class