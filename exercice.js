import { simulateAsyncTask } from "./service.js";

// Partie 1 : Utiliser .then() et .catch()
// ---------------------------------------
// Créez une fonction launchWithThen() qui :
// - Appelle simulateAsyncTask avec le nom de taĉhe "Téléchargement" et une durée de 3000 ms
// - Affiche le résultat dans la console si la promesse est résolue avec then
// - Affiche l’erreur dans la console si la promesse est rejetée avec then

// Partie 2 : Utiliser async / await
// ---------------------------------
// Créez une fonction launchWithAsync() qui :
// - Appelle simulateAsyncTask avec le nom de taĉhe "Analyse" et une durée de 2500 ms
// - Utilise async/await pour attendre le résultat de simulateAsyncTask
// - Utilise try/catch pour gérer les erreurs
// - Affiche dans la console le résultat ou l’erreur
