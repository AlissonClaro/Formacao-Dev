/*

Operadores Logicos
&& -> E -> Pessoa Exigente / PEssoa Obediente 
    true && true = true
    true && false = false
    false && false = false


|| -> Ou -> Tanto faz
    true || true = ture
    true || false =true
    true || false = false

! -> Negação
    !true = false
    !false = true

    =====================
    EXEMPLOS

    &&
    console.log(true && true && true)
    console.log(true && true && false)
    console.log(true && false && false)


    ||

    console.log(true || true || true)
    console.log(true || true || false)
    console.log(true || false || false)
    console.log(false || false || false)

    !!

    console.log(!true || !false)
    console.log(!true || !true)
    console.log(!false || !false)

    ========================
    conta do banco

    ||

    const digitarASenha = true
    const digitarOToken = true
    const numeroDaConta = true
    let tentativas = 3

    while(tentativas > 0) {
        if(digitarASenha || digitarOToken || numeroDaConta){
            console.log('Login feito')
            break

        }else{
            tentativas --
            console.log('Dados invalidos, tente novamente.' +tentativas+ 'restantes')
        }
    if (tentativas === 0){
        console.log('Numero de tentativas excedidas, senha bloqueada')
    } 
    }

    ====================================


    const digitarASenha = true
    const digitarOToken = true
    const numeroDaConta = false
    let tentativas = 3

    while(tentativas > 0) {
        if(digitarASenha && digitarOToken && numeroDaConta){
            console.log('Login feito')
            break

        }else{
            tentativas --
            console.log('Dados invalidos, tente novamente.' +tentativas+ 'restantes')
        }
    if (tentativas === 0){
        console.log('Numero de tentativas excedidas, senha bloqueada')
    } 
    }

=================================================

    const digitarASenha = true
    const digitarOToken = true
    const numeroDaConta = false

        if(digitarASenha && digitarOToken && numeroDaConta){
            console.log('Login feito')

        }else{
            console.log('Dados invalidos, tente novamente.')
        }
======================================

    


    */


const digitarASenha = true
const digitarOToken = true
const numeroDaConta = false

    if(digitarASenha && digitarOToken && numeroDaConta){
        console.log('Login feito')

    }else{
        console.log('Dados invalidos, tente novamente.')
    }

