// Criar o elemento footer
const footer = document.createElement("footer");

// Adicionar conteúdo ao footer
footer.innerHTML = `

<div class="box display">
    <div class="footer-lado">
        <h3>Contato</h3>
        <p>Telefone: (11) 98189-5060</p>
        <p>Email: etads.sabio@gmail.com</p>
    </div>

    <div class="footer-lado">
        <!-- <h3>Redes Sociais</h3> -->
        <ul>
            <li><a href="https://github.com/NewAgainn" target="_blank"><h2><img class="icon" src="/imagens/icons/GitHub_icon.png">GitHub</h2></a></li>
        </ul>
    </div>
</div>

<p class="footer-info">© 2023 Meu Portfólio</p>

`;

// Adicionar classe ao footer pode ser usado no css pra estilizar
footer.classList.add("style-footer");

// Adicionar o footer à página
document.body.appendChild(footer);