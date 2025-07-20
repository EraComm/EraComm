<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse email de destination
    $to = "votre-email@example.com";

    // Sujet de l'email
    $subject = "Nouveau message de contact de $name";

    // Contenu de l'email
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $phone\n";
    $email_content .= "Message:\n$message\n";

    // En-têtes de l'email
    $headers = "From: $email";

    // Envoyer l'email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Votre message a été envoyé avec succès!";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre message.";
    }
} else {
    echo "Méthode de requête non autorisée.";
}
?>
