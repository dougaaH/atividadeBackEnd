let usuarios = [
    { id: 1, nome: 'Ana Silva', email: 'ana.silva@email.com' },
    { id: 2, nome: 'Bruno Costa', email: 'bruno.costa@email.com' },
    { id: 3, nome: 'Carla Oliveira', email: 'carla.oliveira@email.com' }
];

let idAtual = 4;

const listarUsuarios = (req, res) => {
    const { nome, email } = req.query;
    let resultado = [...usuarios];

    if (nome) {
        resultado = resultado.filter(u =>
            u.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    if (email) {
        resultado = resultado.filter(u =>
            u.email.toLowerCase().includes(email.toLowerCase())
        );
    }

    res.json(resultado);
};

const buscarUsuarioPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    res.json(usuario);
};

const criarUsuario = (req, res) => {
    const { nome, email } = req.body;
    const novoUsuario = { id: idAtual++, nome, email };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
};

const atualizarUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado.' });

    const { nome, email } = req.body;
    usuario.nome = nome;
    usuario.email = email;

    res.json(usuario);
};

const removerUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).json({ mensagem: 'Usuário não encontrado.' });

    usuarios.splice(index, 1);
    res.status(204).send();
};

module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    removerUsuario
};