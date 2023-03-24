/**
 * EXERCÍCIOS
 * 
 * Antes de começar, certifique-se de instalar as 
 * dependências do projeto utilizando "npm install"
 * 
 * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
 * 
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 * */

type MinhasInformacoes = {
    nome: string;
    profissao: string;
    idade: number;
    interesses: string[];
  }
  


/** 
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 * */
const minhasInformacoes: MinhasInformacoes = {
  nome: "Maria",
  profissao: "Desenvolvedora",
  idade: 30,
  interesses: ["JavaScript", "TypeScript", "React", "Node.js"]
};



/** 
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 * e retorne somente a lista de assuntos do objeto.
 * */

function obterInteresses(informacoes: MinhasInformacoes): string[] {
  return informacoes.interesses;
}

/** 
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 * */
const InteressesPessoais = (MinhasInformacoes: MinhasInformacoes): string[] => MinhasInformacoes.interesses || []

/** 
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 * */

enum CursoMateria {
  Angular = "Angular",
  TypeScript = "TypeScript",
  Git = "Git"
}

/** 
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 * */
type Professor = {
  nome: string;
  materias: Array<CursoMateria>;
}


/** 
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 * */


const Nathan: Professor = {
  nome: "Nathan",
  materias: [CursoMateria.Angular, CursoMateria.Git]
};

const Alan: Professor = {
  nome: "Alan",
  materias: [CursoMateria.Angular, CursoMateria.TypeScript, CursoMateria.Git]
};

/** 
 * 8 - Declare e popule um array com os objetos do exercício 7.
 * */
const professores: Array<Professor> = [
  {
    nome: "Nathan",
    materias: [CursoMateria.Angular, CursoMateria.Git]
  },
  {
    nome: "Alan",
    materias: [CursoMateria.Angular, CursoMateria.TypeScript, CursoMateria.Git]
  }
];

/** 
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 * */
function obterNomesDosProfessores(professores: Array<Professor>): Array<string> {
  return professores.map(professor => professor.nome);
}
/** 
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 * */
const materiasProfessores = (professores: Professor[]) => {
  return professores.map((professor) => professor.materias)

} 

console.log(materiasProfessores(professores));



/** 
 * 11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 * 
 */
const findFirstProf = (professores: Professor[]): Professor | undefined => {
  return professores.find(prof => prof.materias.includes(CursoMateria.TypeScript))
}

console.log(findFirstProf(professores));
