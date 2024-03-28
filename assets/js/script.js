document.addEventListener('DOMContentLoaded', function() {
    var niveles = ['kids1', 'kids2', 'kids3', 'kids4', 'kids5', 'teens1', 'teens2', 'teens3', 'secondyear', 'thirdyear', 'fourthyear', 'fifthyear', 'superior'];
    var tiposLibros = ['StudentBook', 'Workbook', 'TeacherBook', 'Story'];

    niveles.forEach(function(nivel) {
        var section = document.getElementById(nivel);
        var h2 = document.createElement('h2');
        section.appendChild(h2);

        tiposLibros.forEach(function(tipo) {
            var boton = document.createElement('button');
            boton.textContent = 'Descargar ' + tipo;
            boton.onclick = function() {
                window.open('assets/pdf/' + nivel + '/' + nivel + '_' + tipo.toLowerCase() + '.pdf', '_blank');
            };
            section.appendChild(boton);
        });
    });
});
