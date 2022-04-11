$('#formTabela').validate({
    rules: {
        nome: {
            required: true,
            minlength: 4,
            maxlength: 10
        }
    },
    messages: {
        nome: {
            required: "Por favor, informe o nome da tabela",
            minlength: "O nome da tabela deve ter no mínimo 4 caracteres",
            maxlength: "O nome da tabela deve ter no máximo 10 caracteres"
        }
    }
});