import {Usuario} from './Usuario.js'
import { Repositorio } from './Repositorio.js';

import readline from 'readline-sync';

const repositorio = new Repositorio();

var logado = false;

exibirMenu();

 function exibirMenu(){
    console.log('bem vindo ao banco');
    console.log('1 - Para entrar no sistema');
    console.log('2 - Para se cadastrar');
    if(logado){
        console.log('3 - Para listar todos usuarios');
        console.log('4 - Remover usuario');
        console.log('5 - Sair')
    }

    const opcao = readline.questionInt('Escolha uma opção: ');

    renderRespostaMenu(opcao);
}

function renderRespostaMenu(opcao){
    if(opcao == 1){
        login();
    }if(opcao == 2){
        cadastrarUsuario();
    }if(opcao == 3 && logado){
        listarUsuarios();
    }if(opcao == 4 && logado){
        removerUsuario();
    }if(opcao == 5){
        logout();
    }else{
        exibirMenu();
    }
}

function cadastrarUsuario(){
    const usuario = new Usuario();
    usuario.nomeCompleto = readline.question('Digite seu nome completo: \n' );
    usuario.login = readline.question('Digite seu Login: \n' );
    usuario.senha = readline.question('Digite ua senha : \n' );

    repositorio.salvar(usuario);
    console.log('usuario cadastrado');

    exibirMenu();
}

function login(){
    const login = readline.question('Digite seu login: ');
    const senha = readline.question('Digite sua senha: ');

    const usuario = repositorio.consultar(login);

    if(usuario !== undefined && usuario.senha === senha){
        console.log('login autorizado');
        logado = true;
        exibirMenu();
    }else{
        console.log('login invalido');
        exibirMenu();
    }
}

function listarUsuarios(){
    console.log(repositorio.listarTodos());
}

function removerUsuario(){
    const usuario = readline.question('login do usuario para ser removido');
    repositorio.remover(usuario);
}

function logout(){
    logado = false;
}


