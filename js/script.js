//test commit
//deuxxwiemeere
var ecran;
var timer;
var timerOff;
var score=0;
var cpt=0;
var suppr=0;

function ajoutCible(){
  var top=Math.floor(Math.random()*(ecran.hauteur-150));
  var left=Math.floor(Math.random()*(ecran.largeur-150));
  cpt++;
  $('body').append('<img data-index="'+cpt+'" src="img/cible.jpg" style="position:absolute;top:'+top+'px;left:'+left+'px">');
  var timerOff=setTimeout(pasTouche,1000);
}

function tailleEcran(){
    ecran={};
    ecran.largeur=screen.width;
    ecran.hauteur=screen.height;
    $('body').width(ecran.largeur);
    $('body').height(ecran.hauteur);
}

function apparition(){
  timer=setInterval(ajoutCible,1000);
}
function touche(){
  $(this).remove();
  score+=5;
  $('#score strong').html(score+' points');
}
function pasTouche(){
  suppr++;


  $('img').each(function()
  {
    if($(this).data('index')==suppr){
      score-=3;
      $(this).remove();
    }

  });
  $('#score strong').html(score+' points');
}


$(function(){
  $(document).on('click','img',touche);
tailleEcran();
apparition();

});
