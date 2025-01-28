//axios

const catContainer = document.getElementById('cat-container');

axios.get(`https://api.thecatapi.com/v1/images/search`)
.then(response => {
    const [catData] = response.data;

    const catCard = `
        <div class="cat-card">
        <img src='${catData.url}' alt='Gato maravilhos' />
        <h3>Detalhes do gato</h3>
        <ul>
            ${Object.entries({...catData}).map(([key, value]) => `
                <li><b>${key}: </b> ${value}</li>
            `).join('')}
        </ul>        
        </div>
    `

    catContainer.innerHTML += catCard;
})

.catch(error => {
    console.error('Erro ao buscar a imagem', error);
})
