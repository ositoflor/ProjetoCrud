$('#formVersao').validate({
    rules: {
        versao: {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        preco: {
            required: true,
            minlength: 6,
        },
        combustivel: {
            required: true
        },
        portas: {
            required: true
        },
        vidros: {
            required: true
        }
    },
    messages: {
        versao: {
            required: "Por favor, informe o nome da versão",
            minlength: "O nome do modelo deve ter no mínimo 3 caracteres",
            maxlength: "O nome do modelo deve ter no máximo 50 caracteres"
        },
        preco: {
            required: "Por favor, informe o preço da versão",
            minlength: "O preço da versão deve ter no mínimo 6 caracteres",
        },
        combustivel: {
            required: "Por favor, informe o tipo de combustível",
        },
        portas: {
            required: "Por favor, informe o número de portas",
        },
        vidros: {
            required: "Por favor, informe se a versão possui ou não vidros elétricos"
        }

    }
});