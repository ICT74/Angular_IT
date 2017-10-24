class Libro {

    constructor(autor,titulo){
        this.autor=autor;
        this.titulo=titulo;

    }
}
class LibroTecnico extends Libro {


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

oLibro=new LibroTecnico("a","t","te",200,30)
oLibro.calculaPrecio()