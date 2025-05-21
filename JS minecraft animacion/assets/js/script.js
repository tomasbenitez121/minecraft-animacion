
//Enderman
$("#btnEnderman").click(function() {
    let $img = $(".enderman");
    let windowWidth = $(window).width();
    let windowHeight = $(window).height();

    let imgWidth = $img.width();
    let imgHeight = $img.height();

    let posicionrandomleft = Math.random() * (windowWidth - imgWidth);
    let posicionrandomtop = Math.random() * (windowHeight - imgHeight);

    $img.fadeOut(300, function () {
      $img.css({
        left: posicionrandomleft + "px",
        top: posicionrandomtop + "px"
      }).fadeIn(300);
    });
  });

//Abeja

  $("#btnAbeja").click(function() {
    $(".abeja").show().addClass("volar");
    moveImage();
  });

  function volarAbeja() {
    let $img = $(".abeja");
    let w = $(window).width() - $img.width();
    let h = $(window).height() - $img.height();

    let left = Math.random() * w;
    let top = Math.random() * h;

    $img.animate({ left, top }, 2000, moveImage);
  }

  //TNT

  $(".tnt").click(function() {
    let $tnt = $(this);

    // Mostrar la explosión
    let boom = $("<div>").addClass("explota");
    $("body").append(boom);

    // Posicionar la explosión
    let offset = $tnt.offset();
    boom.css({ top: offset.top - 50, left: offset.left - 50 });

    // Animación de explosión en TNT
    $tnt.css("animation", "explode 1s forwards");

    // Eliminar elementos después de la animación
    setTimeout(() => {
      $tnt.remove();
      boom.remove();
    }, 1000);
  });

function estoyvolando(){
    alert('Estoy volando');
}
