class playList {
    constructor (musicas = []) {
        this.musicas = musicas;
    }

    adicionarMusica(nome) {
        this.musicas.push(nome);
    }

    [Symbol.iterator]() {
        let indice = 0;
        const musicas = this.musicas;

        return {
            next() {
                if (indice < musicas.length) {
                    return { value: musicas[indice++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

const minhaPlaylist = new playList(["Forest - System of a Down", "The Day That Never Come - Metallica"]);

minhaPlaylist.adicionarMusica("By the Way - Red Hot Chili Peppers");
minhaPlaylist.adicionarMusica("Fear of the Dark - Iron Maiden");
minhaPlaylist.adicionarMusica("Master of Puppets - Metallica");

console.log("Tocando playlist: ");
for (const musica of minhaPlaylist) {
  console.log("- " + musica);
}
