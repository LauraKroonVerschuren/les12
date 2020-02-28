// Foto zoeken --------------------------------

$(document).ready(function() {
    let version = '0.2.a',
    fotolijst = [],
    fotoNum = 0,
    aantalFotos = 0;

    var menuItem = $('#menu ul li');

    $('#gallery').show();
    $('#footer').html('Laura Kroon-Verschuren - versie' + ' ' + version);


    $.get("data/fotos.json", function(data, status){
        aantalFotos = data.fotos.length;
        let htmlStr = '';

        for (let i = 0; i < aantalFotos; i++) {
            fotolijst[i] = data.fotos[i];                       


            htmlStr += '<div class="foto-box">';
            htmlStr += '<img src="images/small_' + fotolijst[i].url + '" width="" height="" alt="'+ fotolijst[i].naam +'" class="thumb" title="' + i + '"/>';
            htmlStr += '</div>';
        }

        $('#gallery .foto-row').html(htmlStr); 
        
       
    
    });
    

// Foto selecteren --------------------------------
        
    $('#gallery').on('click', function(evt) {

        let fotoSelect = evt.target,
            fotoSrc = $(fotoSelect).attr('src');
        fotoNum = parseInt($(fotoSelect).attr('title'));

        if (fotoSrc != undefined) {
            let lastSlash = fotoSrc.lastIndexOf('/');
                fotoSrc = fotoSrc.substr(lastSlash + 7); // 7 = 1 plus lengte van small_
            showFoto(fotoSrc);

        }
      //  console.log('foto', fotoNum);   

    })   


// Foto laten zien --------------------------------
    function showFoto(fotoSrc) {
            let fotoUrl = 'images/' + fotoSrc,
                fotoName = fotolijst[fotoNum].naam;

            $('#fotoblok').slideDown(1000);
            $('#fotoblok #fotoTitel').html(fotoName);
            $('#fotoblok img.foto').attr('src', fotoUrl);
       //     console.log('showFoto', fotoSrc, fotoUrl, fotoName);

    }
// Foto weghalen --------------------------------
$('#fotoblok .foto').on('click', function(){
    $('#fotoblok').slideUp(500);

});


$('#fotoblok .pijlLinks').on('click', function() {

        if (fotoNum > 0 ){
            fotoNum --;
        }
        else {
            fotoNum = aantalFotos - 1;
        }

        let fotoSrc = fotolijst[fotoNum].url;
        showFoto(fotoSrc);
   // console.log('pijlLinks', fotoNum, aantalFotos);
});

$('#fotoblok .pijlRechts').on('click', function() {
        if (fotoNum < aantalFotos - 1 ){
             fotoNum ++;
        }
        else {
           fotoNum = 0;
        }

        let fotoSrc = fotolijst[fotoNum].url;
        showFoto(fotoSrc);
        
  //  console.log('pijlRechts', fotoNum, aantalFotos, fotoSrc);
});









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

