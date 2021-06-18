export class Usuario {

    // Creando los atributos en el constructor, no hace falta declararlos
    constructor(
        public nombre: string,
        public email: string,
        public password?: string,
        public img?: string,
        public google?: boolean,
        public role?: string,
        public uid?: string
    ){

    }
}