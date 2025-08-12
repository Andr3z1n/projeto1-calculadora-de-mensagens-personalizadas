const nome = "Andre"
let idade = 16
let cidade = "Fortaleza"
let profissao = "Engenharia mecanica"
let anoAtual = 2025
let anoNascimento = anoAtual - idade

let salarioatual = 1500
let bonus = 800
let soma = (bonus + salarioatual)
let totalano = soma * 12
let totalanodobro = totalano * 2

alert(`
    ========= RELÁTORIO DO USUÁRIO =========
    Nome = ${nome}
    idade = ${idade}
    Cidade = ${cidade}
    Ano de nascimento = ${anoNascimento}
    Profissão = ${profissao}

    salario base: = U$${salarioatual}
    Bonus = U$${bonus}
    Totalmensal = U$${soma}
    Total ano = U$${totalano}
    Total anual = U$${totalanodobro}
    =========================================
    `)

