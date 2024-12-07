


emailjs.init("GAlvOuUBfuRbzPQug");

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var form = event.target;

    emailjs.sendForm('service_8tpfx5j', 'template_57zwhcs', form)
        .then(function (response) {
            console.log('Successo:', response);
            alert("Il tuo messaggio è stato inviato con successo!");
        }, function (error) {
            console.error('Errore:', error);
            alert("C'è stato un errore nell'invio del messaggio. Riprova.");
        });
});