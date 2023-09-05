//troca com os dados que estão no seu projeto 

const firebaseConfig = {
    apiKey: "AIzaSyB-vfNNkOY-RsJSlC-0lTA98bbkDW87cGM",
    authDomain: "projeto2miateste-641a7.firebaseapp.com",
    projectId: "projeto2miateste-641a7",
    storageBucket: "projeto2miateste-641a7.appspot.com",
    messagingSenderId: "792637699007",
    appId: "1:792637699007:web:1a2446c7760eb69546270a"
  };

firebaseConfig.initializeApp(firebaseConfig)

                       














/*const emailField = document.getElementById('email')
const passwordField = document.getElementById('password')
const loginButton = document.getElementById('loginButton')

loginButton.addEventListener('click', () =>{
    const email = emailField.value 
    const password = passwordField.value 

    firebase.auth().signInWithEmailAndPassword(email, password)
    then((userCredential) =>{
            //Usuário logado com sucesso
            const user = userCredential.user
            console.log("Usuário logado: ", user)
    })                 
    .catch((error)=> {
        const errorMessage = error.message 
        console.error("Erro de autenticação", errorMessage)
    })                                 
        }
)*/
