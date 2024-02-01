const url = 'http://204.216.187.179:3000/findProduto';

function construindo() {
    const ul = document.querySelector('#ul');

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
                    novoData.splice(novoData.indexOf(imprimir), 1); // Remover o item excluído do novoData
                });

                li.appendChild(buttonRemove);
                ul.appendChild(li);
            }
            console.log(novoData); // Aqui você terá o novo array sem o item excluído
        });
}

construindo();
