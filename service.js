// Simule une tâche asynchrone avec un timer
//
// PARAMS `taskName` : Le nom de la fausse tâche
// PARAMS `duration` : Le délai d'attente souhaité en ms
export const simulateAsyncTask = (taskName, duration) => {
  return new Promise((resolve, reject) => {
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += 1000;
      console.log(`⏳ ${taskName}... ${elapsed / 1000}s écoulées`);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval); // Stoppe les logs

      const success = Math.random() > 0.5; // 50% de réussite
      if (success) {
        resolve(`✅ ${taskName} terminé après ${duration}ms`);
      } else {
        reject(`❌ ${taskName} a échoué`);
      }
    }, duration);
  });
};
