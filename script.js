//mude as variaveis; faça que elas combinem com o index.

        const form = document.querySelector("form") // obtém elementos da página
        const PacienteAtendido = document.querySelector("span")
        const ListaDePaciente = document.querySelector("pre")
        const pacientes = [] // declara vetor global


                //BOTÃO ADICIONAR

        form.addEventListener("submit", (e) => {
            e.preventDefault() // evita envio do form *********
            
            const nome = form.paciente.value // obtém nome do paciente
            pacientes.push(nome) // adiciona o nome no final do vetor
            let lista = "" // string para concatenar pacientes

            // for "tradicional" (inicia em 0, enquanto menor que tamanho do array)
            for (let i = 0; i < pacientes.length; i++) {
                lista += `${i + 1}. ${pacientes[i]}\n`
            }

            ListaDePaciente.innerText = lista // exibe a lista de pacientes na página
            form.paciente.value = "" // limpa conteúdo do campo de formulário 
            form.paciente.focus() // posiciona o cursor no campo *************
        })


                //BOTÃO urgencia

        // Adiciona um "ouvinte" para o evento click no botão prioridade que está no form
        form.prioridade.addEventListener("click", () => {
        // verifica se as validações do form estão ok (no caso, paciente is required)
        if (!form.checkValidity()) { //************
            alert("Informe o nome do paciente a ser atendido em caráter de urgência")
            form.paciente.focus() // posiciona o cursor no campo
            return // retorna ao form
        }

        const nome = form.paciente.value // obtém nome do paciente
        pacientes.unshift(nome) // adiciona paciente no início do vetor
        let lista = "" // string para concatenar pacientes
        // forEach aplicado sobre o array pacientes
        pacientes.forEach(
            (paciente, i) => (lista += `${i + 1}. ${paciente}\n`)
        )
        ListaDePaciente.innerText = lista // exibe a lista de pacientes na página
        form.paciente.value = "" // limpa conteúdo do campo de formulário
        form.paciente.focus() // posiciona o cursor no campo
        })

        //comprar

        form.atender.addEventListener("click", () => {
        // se o tamanho do vetor = 0
        if (pacientes.length == 0) {
            alert("Não há pacientes na lista de espera")
            form.paciente.focus()
            return
        }

        const atender = pacientes.shift() // remove do início da fila (e obtém nome)
       
        PacienteAtendido.innerText = atender // exibe o nome do paciente em atendimento
        let lista = "" // string para concatenar pacientes
        pacientes.forEach(
            (paciente, i) => (lista += `${i + 1}. ${paciente}\n`)
        )
        ListaDePaciente.innerText = lista // exibe a lista de pacientes na página
        })
