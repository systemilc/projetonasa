let hoje = new Date();
let dia = String(hoje.getDate()).padStart(2, '0');
let mes = String(hoje.getMonth() + 1).padStart(2, '0');
let ano = hoje.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
console.log(dataAtual);

$('#textoInicial').text(`Para começar, escolha uma dia entre 20/06/2021 e ${dataAtual}`);
$('#foto').attr('src', './img/inicio.png');

$('#buscar').click(
    function () {
        let data = $('#buscaData').val();
        if(data >='2020-06-20'){
        
        $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=nY1cr97W2x0xU9oZsjtJI6UJPi18QW4kFwPRA3b8&date=${data}`,
        type: 'GET',
        success: function (resultado)
        {
            
            $('#textoInicial').text(``);
            $('#dataFoto').text(`Foto adicionada em: ${resultado.date}`);
            $('#titulo').text(resultado.title);
            $('#texto').text(resultado.explanation);
            $('#foto').attr('src', resultado.url);
            $('#foto').attr('alt', `Titulo da foto: ${resultado.title}`);
            $('#autor').text(`Autor: ${resultado.copyright}`)
        },
    })
}else{
            $('#dataFoto').text('');
            $('#textoInicial').text(``);
            $('#titulo').text('A primeira foto adicionada ao Apod foi dia 20/06/2020');
            $('#texto').text(`Sei que você está curioso para ver mais fotos. Mas infelizmente só podemos exibir fotos entre os dias 20/06/2020 e ${dataAtual}`);
            $('#foto').attr('src', '../img/erro.png');
            $('#foto').attr('');
            $('#autor').text('')
}
})

