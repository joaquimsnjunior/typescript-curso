// Run: deno run src/aula06.ts

// jeito antigo
// function teste():void{
//   console.log('teste');
//

// teste(); // teste

// function Home() {
//     console.log('teste');
// }
// 
// Home(); // teste

function logar(user: string, senha: string): void {
  console.log(`Usuário: ${user} Senha: ${senha}`);
}

logar('armando', 'admin1234'); // Usuário: admin Senha: admin