import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, of } from "rxjs";

export function validatePhone(phone: string) {
    const casesInFailure = [
        "999999999",
        "111111111",
        "222222222",
        "333333333",
        "444444444",
        "555555555",
        "666666666",
        "777777777",
        "888888888",
        "000000000",
    ];

    const isValid = casesInFailure.every(el => el != phone) && phone.length == 11;

    if (!isValid) {
        return {
            isValid,
            message: `telefone inválido!`
        };
    }
    return {
        isValid,
        message: null
    };
}

export function validateCPF(cpf: string) {
    //remover pontos
    let isValid = true;
    cpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF tem 11 dígitos
    if (cpf.length == 11) {
        isValid = false;
    }

    // Verificar se todos os dígitos são iguais (caso contrário, o CPF é inválido)
    const todosDigitosIguais = [...cpf].every(digito => digito === cpf[0]);
    if (todosDigitosIguais) {
        isValid = false;
    }

    // Calcular os dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = soma % 11;
    const digito1 = resto < 2 ? 0 : 11 - resto;

    if (digito1 !== parseInt(cpf.charAt(9))) {
        isValid = false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    const digito2 = resto < 2 ? 0 : 11 - resto;
    isValid = digito2 == parseInt(cpf.charAt(10));

    if (!isValid) {
        return {
            isValid: false,
            message: "cpf inválido!"
        }
    }
    return {
        isValid: true,
        message: null
    }
}