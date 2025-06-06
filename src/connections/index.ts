import admin from "firebase-admin";

const raw = process.env.SERVICE_ACCOUNT;

if (!raw) {
  throw new Error("La variable de entorno SERVICE_ACCOUNT no está definida.");
}

let serviceAccount;
try {
  serviceAccount = JSON.parse(raw);
} catch (error) {
  console.error("SERVICE_ACCOUNT contiene un JSON inválido:", raw);
  throw new Error("No se pudo parsear SERVICE_ACCOUNT.");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const firestore = admin.firestore();
