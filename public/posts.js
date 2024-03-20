$('#enviarPost').click(function() {
  var valor = 'tu_valor'; // Aquí puedes definir el valor que deseas enviar

  $.ajax({
      type: 'POST',
      url: 'tu_url_destino',
      data: {miDato: valor},
      success: function(response) {
          console.log(response);
      }
  });
});