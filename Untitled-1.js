<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    var formData = new FormData(this); // Récupère les données du formulaire

    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text()) // Convertit la réponse en texte
    .then(data => {
        document.getElementById("response").innerHTML = data; // Affiche la réponse du serveur
    })
    .catch(error => {
        document.getElementById("response").innerHTML = "Erreur lors de l'envoi.";
    });
});
</script>
