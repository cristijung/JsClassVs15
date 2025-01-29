//tipos básicos
var algo: string = "Janela";  //ela é sempre inicializada 
let idades: string = '25';
const ativo: number = 124; 
const CIDADE: string = 'Porto Alegre';
let cores = 'vermelho'; //tipo inferido

//arrays
let nums: number[] = [1, 2, 3, 4, 5, 6];
let nomess: string[] = ['Ana', 'Bia', 'Caio'];

//interfaces
interface Passoa {
    nome: string;
    idade: number;
    altura: number;
    ativo: boolean;
}

//types
let codigo: string | number;
codigo = 'abc';
codigo = 123;

interface Funcionario extends Pessoa {
    cargo: string;
    nome: 'Ana';
    altura: 1.74;
}

function identidade<T>(arg: T): T {
    return arg;
}
let resposta1 = identidade<string>('Ois!');
let resposta2 = identidade<number>(123);

//interface genérica
interface Container<T> {
    valor: T;
}

let res1: Container<string> = {valor: 'oi'};
let res2: Container<number> = {valor: 1234};
let res3: Container<boolean> = {valor: false};


//é um contrasenso, pois se os tipos forem 'any' não tem
//a necessidade de ter uma interface
interface Teste {
    valor1: any;
    valor2: any;
}

//let res4: Teste = {valor1: 'texto'};



