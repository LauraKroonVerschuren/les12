$(document).ready(function() {
    let fotolijst = [];
    var menuItem = $('#menu ul li');

    $('#gallery').show();

// get JSon data met jquery GET
        $.get("data/fotos.json", function(data, status){
            let aantalFotos = data.fotos.length;
            let htmlStr = '';
// looop door alle foto's heen
            for (let i = 0; i < aantalFotos; i++) {
                fotolijst[i] = data.fotos[i];                           // copy foto in array

                // maak HTML string
                htmlStr += '<div class="foto-box">';
                htmlStr += '<img src="images/small_' + fotolijst[i].url + '" width="" height="" alt="" class="thumb" />';
                htmlStr += '</div>';
            }

            $('#gallery .foto-row').html(htmlStr); // set htmlStr in site
            
            console.log('fotos', data, status, data.fotos[1].url, aantalFotos);
       
        });
    

    // console.log('READY', menuItem, fotolijst)

    $('#menu ul li').on('click', function(evt) {
        // haal de class er uit met jQuery met een $(this).attr('NAAM VAN CLASSSSSSSSSSSSSS')
        let selectedItem = $(this).attr('class');
        let selectedId = selectedItem.substr(5); // Haal id-name uit selected class

        $('#main .page').hide();
        $('#' + selectedId).show();
        // console.log('menuItem', selectedItem, selectedId);
    });


});

