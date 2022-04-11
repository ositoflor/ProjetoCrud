$('#formMarcas').validate({
    rules: {
        nome: {
            required: true,
            minlength: 3,
            maxlength: 10
        },
        tabela: {
            required: true
        }
    },
    messages: {
        nome: {
            required: "Por favor, informe o nome da marca",
            minlength: "O nome da modelo deve ter no mínimo 3 caracteres",
            maxlength: "O nome da modelo deve ter no máximo 10 caracteres"
        },
        tabela: {
            required: "Por favor, selecione uma tabela"
        }
    }
});