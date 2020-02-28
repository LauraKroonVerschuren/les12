// Foto zoeken --------------------------------

$(document).ready(function() {
    let version = '0.2.a',
    fotolijst = [];
    var menuItem = $('#menu ul li');

    $('#gallery').show();
    $('#footer').html('Laura Kroon-Verschuren - versie' + ' ' + version);


    $.get("data/fotos.json", function(data, status){
        let aantalFotos = data.fotos.length;
        let htmlStr = '';

        for (let i = 0; i < aantalFotos; i++) {
            fotolijst[i] = data.fotos[i];                       


            htmlStr += '<div class="foto-box">';
            htmlStr += '<img src="images/small_' + fotolijst[i].url + '" width="" height="" alt="" class="thumb" />';
            htmlStr += '</div>';
        }

        $('#gallery .foto-row').html(htmlStr); 
        
        console.log('fotos', data, status, data.fotos[1].url, aantalFotos);
    
    });
    

// Foto selecteren --------------------------------
        
    $('#gallery').on('click', function(evt) {

        let fotoSelect = evt.target,
            fotoSrc = $(fotoSelect).attr('src');

        if (fotoSrc != undefined) {
            let lastSlash = fotoSrc.lastIndexOf('/');
                fotoSrc = fotoSrc.substr(lastSlash + 7); // 7 = 1 plus lengte van small_
            showFoto(fotoSrc);

        }

        // console.log('foto select', fotoSelect, fotoSrc, lastSlash);
    })   



    $('#fotoblok').on('click', function(){
            $('#fotoblok').slideUp(500);

            console.log('sluit');
    });


    function showFoto(fotoSrc) {
            let fotoUrl = 'images/' + fotoSrc;

            $('#fotoblok').slideDown(1000);

            $('#fotoblok img').attr('src', fotoUrl);

      //  console.log('showfoto', fotoSrc, fotoUrl);
    }











// Menu--------------------------------


    $('#menu ul li').on('click', function(evt) {
        // haal de class er uit met jQuery met een $(this).attr('NAAM VAN CLASSSSSSSSSSSSSS')
        let selectedItem = $(this).attr('class');
        let selectedId = selectedItem.substr(5); // Haal id-name uit selected class

        $('#main .page').hide();
        $('#' + selectedId).show();
        // console.log('menuItem', selectedItem, selectedId);
    });


});

