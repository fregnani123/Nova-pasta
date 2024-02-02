const url = 'https://204.216.187.179:3001/findProduto';
// const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';

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
