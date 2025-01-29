
//tipos e união de dados

//união e personalizado
let minhaVariavel: string | number | boolean;
minhaVariavel = 'textoooo';
minhaVariavel = 1234;
minhaVariavel = false;

let umaVariavel: any;
umaVariavel = 'texto';
umaVariavel = 1.45679732;
umaVariavel = true;
umaVariavel = [1, 2, 3];

//types
type Automovel = { marca: string; modelo: string; ano: number };
type Aviao = { fabricante: string; modelo: string };

let veiculo: Automovel | Aviao;
veiculo = { fabricante: 'GM', modelo: 'ABC', ano: 1999};
veiculo = { marca: 'Boeing', modelo: '747', ano: 1989 };
veiculo = { fabricante: 'Airbus', modelo: 'A320', ano: 2012 };

type CoresPrimarias = 'red' | 'blue' | 'yellow';
type CoresSecundarias = 'green' | 'orange' | 'purple';
type CoresBase = 'black' | 'white';

let cor: CoresPrimarias | CoresSecundarias | CoresBase;
cor = 'blue';
cor = 'orange';
cor = 'black';
