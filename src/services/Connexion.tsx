export default class Connexion {
	private static instance:Connexion;
	base_url : string;

	private constructor(){
		this.base_url = "http://127.0.0.1:8000";
	}

	public static getInstance(): Connexion {
		if (!Connexion.instance) {
			Connexion.instance = new Connexion();
		}
		return Connexion.instance;
	}

	async register(username:string, password:string){
		const myInit = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify({ 'username' : username, 'plainPassword': password})
		};
		return fetch(this.base_url+"/api/register", myInit)
			.then(response => {return response.json()})
			.then(data => { return data })
			.catch(error => console.log("Error caught in register"))
	}
	
	async login(username:string, password:string){
		const myInit = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify({ 'username' : username, 'password': password})
		};
		return fetch(this.base_url+"/api/login_check", myInit)
			.then(response => {return response.json()})
			.then(data => {return data.token})
			.catch(error => console.log("Error caught in login"))
	}

}