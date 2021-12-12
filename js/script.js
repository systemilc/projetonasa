
$('#buscar').click(
    function () {
        let data = $('#buscaData').val();
        if(data >='2020-06-20'){
        
        $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=nY1cr97W2x0xU9oZsjtJI6UJPi18QW4kFwPRA3b8&date=${data}`,
        type: 'GET',
        success: function (resultado)
        {
            $('#dataFoto').text(`Foto adicionada em: ${resultado.date}`);
            $('#titulo').text(resultado.title);
            $('#texto').text(resultado.explanation);
            $('#foto').attr('src', resultado.url);
            $('#foto').attr('alt', `Titulo da foto: ${resultado.title}`);
            $('#autor').text(`Autor: ${resultado.copyright}`)
        },
    })
}else{7
    $('#titulo').text('Erro: A primeira foto postada no APOD foi dia 20/06/2020');
    
}
})

