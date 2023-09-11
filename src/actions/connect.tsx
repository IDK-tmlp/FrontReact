import { ActionFunctionArgs, redirect } from "react-router-dom";
import Connexion from "../services/Connexion";

export const register = async ({request}:ActionFunctionArgs)=>{
    const formData = await request.formData();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const co = Connexion.getInstance();
    const reussi = await co.register(username, password);

    if (reussi) {
        return redirect("/ClickerMon/login");
    }else{
        alert("error");
    }
}