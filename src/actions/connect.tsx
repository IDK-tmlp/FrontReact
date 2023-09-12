import { ActionFunctionArgs, redirect } from "react-router-dom";
import Connexion from "../services/Connexion";

export const register = async ({request}:ActionFunctionArgs)=>{
    const formData = await request.formData();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    if (password === confirmPassword){
        const co = Connexion.getInstance();
        await co.register(username, password);
        return redirect("/ClickerMon/login");
    } else{
        alert("Les passwords ne sont pas identiques");
        return redirect("/ClickerMon/register");
    }
}

export const login = async ({request}:ActionFunctionArgs)=>{
    const formData = await request.formData();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const co = Connexion.getInstance();
    const reussi : string = await co.login(username, password);
    document.cookie = "token=" + reussi;
    // console.log(reussi);
    if (reussi){
        return redirect("/ClickerMon");
    } else{
        alert("Mauvais identifiants");
        return redirect("/ClickerMon/login");
    }
}