function habilitarCampo(opcao){
    if(opcao){
        //se opcao == verdadeiro, então habilita a digitação por texto
        document.formulario.nome.disabled = false
    }
    else{
        // se opcao == falso, o campo é limpo
        document.formulario.nome.value = ""
        //se opcao == falso, é desativada a digitação por texto
        document.formulario.nome.disabled =  true
    }
}