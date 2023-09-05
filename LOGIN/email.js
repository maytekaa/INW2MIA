function createEmail(){
    var email = document.getElementById('email').value 
    var password = document.getElementById('password').value 

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user =>{
        alert('Usuário',  user)
        alert('Usuário criado e logado')
    })
    .catch(err =>{
        console.log('Erro ao criar usuário', error) 
    })
}




function loginEmail(){
    var email = document.getElementById('email').value 
    var password = document.getElementById('password').value 

    firebaseConfig.authDomain().signInWithEmailAndPassword(email, password)
    .then(()=>{
        alert('Usuário logado')
    })
    .catch(err =>{
        console.log('error', error) 
    })
}