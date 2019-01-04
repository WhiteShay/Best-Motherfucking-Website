let montitre = document.querySelector('h1');
montitre.textContent = 'Hello world!';
document.querySelector('html').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});