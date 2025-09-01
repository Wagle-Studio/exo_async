import { simulateAsyncTask } from "./service.js";

// console.log("🚀 Début du script");

// Partie 1 : Utiliser .then() et .catch()
// ---------------------------------------
// Créez une fonction launchWithThen() qui :
// - Appelle simulateAsyncTask avec le nom de taĉhe "Téléchargement" et une durée de 3000 ms
// - Affiche le résultat dans la console si la promesse est résolue avec then
// - Affiche l’erreur dans la console si la promesse est rejetée avec then

// console.log("🛠️ Lancement de la partie 1");

simulateAsyncTask("Téléchargement", 3000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Partie 2 : Utiliser async / await
// ---------------------------------
// Créez une fonction launchWithAsync() qui :
// - Appelle simulateAsyncTask avec le nom de taĉhe "Analyse" et une durée de 2500 ms
// - Utilise async/await pour attendre le résultat de simulateAsyncTask
// - Utilise try/catch pour gérer les erreurs
// - Affiche dans la console le résultat ou l’erreur

// console.log("🛠️ Lancement de la partie 2");

// Déclaration de fonction
async function launchWithAsync1() {
  try {
    const result = await simulateAsyncTask("Analyse 1", 2500);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

launchWithAsync1()

// Expression de fonction (arrow function)
const launchWithAsync2 = async () => {
  try {
    const result = await simulateAsyncTask("Analyse 2", 2500);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

launchWithAsync2()

// console.log("🏁 Script principal terminé");
