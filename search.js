// Exemple de données de recherche
const data = [
    { nom: 'JavaScript', description: 'Langage de programmation web.' },
    { nom: 'HTML', description: 'Langage de balisage pour créer des pages web.' },
    { nom: 'CSS', description: 'Feuilles de style en cascade pour le design web.' },
    { nom: 'Python', description: 'Langage de programmation polyvalent.' },
    { nom: 'Java', description: 'Langage de programmation orienté objet.' }
];

// Sélection des éléments du DOM
const searchBox = document.getElementById('search-box');
const resultsTableBody = document.querySelector('#results-table tbody');

// Fonction de mise à jour des résultats
function updateResults(query) {
    resultsTableBody.innerHTML = ''; // Nettoyer les résultats précédents

    if (query.length < 3) {
        return; // Ne pas afficher les résultats si la requête est trop courte
    }

    // Filtrer les données en fonction de la requête
    const filteredData = data.filter(item =>
        item.nom.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );

    // Afficher les résultats
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const row = document.createElement('tr');

            const nomCell = document.createElement('td');
            nomCell.textContent = item.nom;
            row.appendChild(nomCell);

            const descCell = document.createElement('td');
            descCell.textContent = item.description;
            row.appendChild(descCell);

            resultsTableBody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 2;
        cell.textContent = 'Aucun résultat trouvé.';
        cell.classList.add('text-center', 'text-muted');
        row.appendChild(cell);
        resultsTableBody.appendChild(row);
    }
}

// Écouteur d'événement sur la barre de recherche
searchBox.addEventListener('input', function(event) {
    const query = event.target.value.trim().toLowerCase();
    updateResults(query);
});
