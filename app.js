function criaCartao (categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>Astronomia</h3>
    <div class="cartao__conteudo__pergunta">
        <p>Qual é o maior planeta do sistema solar?</p>
    <div class="cartao__conteudo__resposta">
         <p>Jupiter</p>
     </div>
     </div>
    </div>
    `
    container.appendChild(cartao)
}