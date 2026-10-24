let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")

function escolherPersonagem(nomePersonagem, fotoPersonagem, cor) {

    nome.innerHTML = nomePersonagem
    personagem.src = fotoPersonagem
    nome.style.color = cor
}

function lerFoto(foto) {

    let leitor = new FileReader()//leitor de arquivos
    leitor.readAsDataURL(foto.files[0])//faz a leitura da foto e converte em um link url
    leitor.onload = async function () {
        let desenho = await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de videogame: contor no preto grosso, cores vivas, meio corpo matendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombra.", {
            model: "replicate:openai/gpt-image-2.5-flare",
            provider: "openai",
            input_image: leitor.result,
            quality: "medium",
            providerOptions: { background: "transparent" }

        })
        escolherPersonagem("Você", desenho, '#b9b604')
    }
}