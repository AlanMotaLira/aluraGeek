import fs from 'fs';

function salvarImagem(caminho,nomeImagem){
    const caminhoImagem = `/home/node/app/projeto/static/card/${nomeImagem}`;
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(caminhoImagem));
}

export default salvarImagem