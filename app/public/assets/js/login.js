

class User{
	static login(body , email){
	   fetch("/api/user-login" , {
		  method:"POST",
		  body:JSON.stringify(body),
		  headers:{
			 'Content-Type': 'application/json'
		  }
	   })
	   .then( resp => {
			resp.json().then( msg => {
				if(msg.success){
					if(msg.data){
						let friends = Nodo.get("#friends")
						friends.innerHTML = ""
						if(msg.data.friends){
							for(let a of msg.data.friends.split(",")){
								if( a ){
									Nodo.push("option", a , friends)
								}
							}
						}
						chatLaunch( io() , Nodo , state , msg.data , email)
					}
					console.log(msg)
				}
				if(msg.error){
					alert(msg.error)
				}
			} )
	   });
	}
	static signup(body , email){
		if(Nodo.get("#signup-password-confirm").value == body.pass){
			fetch("/api/user" , {
				method:"POST",
				body:JSON.stringify(body),
				headers:{
					'Content-Type': 'application/json'
				}
			}).then( resp => {
				resp.json().then( msg => {
					if(msg.success){
						if(msg.data){ chatLaunch( io() , Nodo , state , msg.data , email) }
					}
				} )
			});
		}
	}
}
 


const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

let formSubmits = Nodo.getList(".form-wrapper button[type=submit]")
for (let index = 0; index < formSubmits.length; index++) {
   formSubmits[index].addEventListener('click', e => {
      e.preventDefault()
      let form = Nodo.get(".form-wrapper.is-active")
      let email = Nodo.get(".form-wrapper.is-active input[type=email]")
	  let pass = Nodo.get(".form-wrapper.is-active input[type=password]")
	  
      if(form.getAttribute("name") == "login"){
        User.login({email:email.value , pass:pass.value} , email )
	  }
	  
      if(form.getAttribute("name") == "signup"){
        User.signup({email:email.value , pass:pass.value} , email )
	  }
	  
    })
}