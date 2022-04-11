$('#formModel').validate({
    rules: {
        modelo: {
            required: true,
            minlength: 3,
            maxlength: 10
        }
    },
    messages: {
        modelo: {
            required: "Por favor, informe o nome do modelo",
            minlength: "O nome do modelo deve ter no mínimo 3 caracteres",
            maxlength: "O nome do modelo deve ter no máximo 10 caracteres"
        }
    }
});