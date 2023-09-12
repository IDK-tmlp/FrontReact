import { UserData } from "../interfaces/userDataInterface";

export default class Data {
	private static instance:Data;
	base_url : string;
    token : string;
    
	private constructor(){
        this.base_url = "https://127.0.0.1:8000";
        this.token = Data.getCookie('token');
	}
    
	public static getInstance(): Data {
        if (!Data.instance) {
            Data.instance = new Data();
		}
		return Data.instance;
	}
    
    public static getCookie = (name:string) : string => {
        return document.cookie.split("; ").find((row) => row.startsWith(name+'='))?.split("=")[1] || "";
    }

	async loadUserData() : Promise<UserData>{
		const myInit = {
			headers: new Headers({
				Authorization : 'Bearer ' + this.token
			}),
			method: "GET",
		};
		return fetch(this.base_url+"/api/user/data", myInit)
			.then(response => {return response.json()})
			.then(data => {console.log(data);return data})
			.catch(error => console.log("Error caught in loadUserData"))
	}

}