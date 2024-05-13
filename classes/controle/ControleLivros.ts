import Livro from '../modelo/Livro';


const livros: Array<Livro> = [
    new Livro(1, 1, "Livro 1", "Resumo do Livro 1", ["Autor 1", "Autor 2"]),
    new Livro(2, 2, "Livro 2", "Resumo do Livro 2", ["Autor 3"]),
    new Livro(3, 3, "Livro 3", "Resumo do Livro 3", ["Autor 4", "Autor 5"])
];

class ControleLivros {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(novoLivro: Livro): void {
        const maxCodigo = livros.reduce((max, livro) => livro.codigo > max ? livro.codigo : max, 0);
        novoLivro.codigo = maxCodigo + 1;
        livros.push(novoLivro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export default ControleLivros;
