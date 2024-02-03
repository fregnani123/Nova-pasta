const url = 'http://204.216.187.179:3000/findProduto';

function construindo() {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            const novoData = data;
            for (let imprimir of novoData) {
                const li = document.createElement('li');
                li.innerText = imprimir.nome;

                const buttonRemove = document.createElement('button');
                buttonRemove.innerText = "Excluir";

                buttonRemove.addEventListener('click', () => {
                    ul.removeChild(li);
                    novoData.splice(novoData.indexOf(imprimir), 1);
                });

                li.appendChild(buttonRemove);
                ul.appendChild(li);
            }
            console.log(novoData);
        });
}

construindo();