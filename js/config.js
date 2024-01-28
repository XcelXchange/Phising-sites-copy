const firebaseconfig1 = { 
    apiKey: "AIzaSyCpyGybkDzb8vg6CLrq94Obr_6ocNW3I48",
    authDomain: "postandearn-913e7.firebaseapp.com",
    databaseURL: "https://postandearn-913e7-default-rtdb.firebaseio.com",
    projectId: "postandearn-913e7",
    storageBucket: "postandearn-913e7.appspot.com",
    messagingSenderId: "516981459091",
    appId: "1:516981459091:web:252fa231f2b08c8a752566",
    measurementId: "G-4J5FET99CL"
  }
  const firebaseApp1 = firebase.initializeApp(firebaseconfig1, "app1");
  const Primarydatabase = firebaseApp1.database();
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig2 = {
  apiKey: "AIzaSyAl4r-gOx-aTzMsJ4rJhkS2mb9v3PoCP1Q",
  authDomain: "dr-strange3.firebaseapp.com",
  databaseURL: "https://dr-strange3-default-rtdb.firebaseio.com",
  projectId: "dr-strange3",
  storageBucket: "dr-strange3.appspot.com",
  messagingSenderId: "110961068130",
  appId: "1:110961068130:web:7c829a056a68e397caa93b",
  measurementId: "G-E4FKS2SP3H"
};
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  