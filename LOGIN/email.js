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