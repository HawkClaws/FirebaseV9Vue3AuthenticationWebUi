import { initializeApp } from 'firebase/app';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'process.env.VUE_APP_API_KEY',
  authDomain: 'process.env.VUE_APP_AUTH_DOMAIN',
  databaseURL: 'process.env.VUE_APP_DATABASE_URL',
  projectId: 'process.env.VUE_APP_PROJECT_ID',
  storageBucket: 'process.env.VUE_APP_STORAGE_BUCKET',
  messagingSenderId: 'process.env.VUE_APP_MESSAGING_SENDER_ID',
  appId: 'process.env.VUE_APP_APP_ID',
}

const firebase = initializeApp(firebaseConfig);

export const firebaseApp = () => { return firebase };

export default firebase;