export class Emargement {
    constructor (
        public id?: number,
          public endroit?: string,
        public date?: number,
        public objet?: string,
        public listedesgroupes?: string,
        public listedesagents?: string,
        public debutetfin?: number,
        public commentaires?: string
    )
    {}
}