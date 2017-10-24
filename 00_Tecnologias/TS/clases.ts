

interface DatosLibro{
     tematica:string;
     paginas:number;
     capitulos:Array<string>;
     calculaPrecio(): void;
}



class Libro {
    public autor:string;
    protected titulo:string;

    constructor(autor,titulo){
        this.autor=autor;
        this.titulo=titulo;

    }

}

class Libro2{
    constructor(public autor:string, public titulo:string){

    }
}


class LibroTecnico extends Libro implements DatosLibro {

        tematica;
        paginas;
        capitulos;
        //private capitulos:string[];
        private precio:number;

        constructor(autor,titulo,tematica, paginas,precio) {
            super(autor, titulo);
            this.tematica=tematica
            this.paginas=paginas
            this.capitulos = [];
            this.precio = precio;
            // ...
        }

        calculaPrecio(pValor = 1) {
            this.precio*=pValor
            console.log(this)
        }
}

let oLibro=new LibroTecnico("a","t","te",200,30)
oLibro.calculaPrecio()