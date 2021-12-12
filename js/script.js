
$("#buscar").click(
    function () {
        let data = $("#buscaData").val();
        $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=nY1cr97W2x0xU9oZsjtJI6UJPi18QW4kFwPRA3b8&date=${data}`,
        type: "GET",
        success: function (resultado)
        {console.log(resultado);
            $("#dataFoto").text(`Foto adicionada em: ${resultado.date}`);
            $("#titulo").text(resultado.title);
            $("#texto").text(resultado.explanation);
            $("#foto").attr("src", resultado.url);
            // $('#autor').text(resultado.copyright)
        },
    })
})

