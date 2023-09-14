import { useLoaderData, useNavigate } from "react-router-dom";
import { Container } from "../container/container.styles";
import { Upgrade, UserData, UserRelated, Worker } from "../../interfaces/userDataInterface";
import { Text } from "../text/text.styles";
import { Assets } from '../../assets/index';
import { Button } from "../button/button.styles";
import { useEffect, useState } from "react";
import { FiSave } from 'react-icons/fi';
import Data from "../../services/Data";
import Upgrades from "./Upgrades";
import Workers from "./Workers";

const Game = () => {

	const navigate = useNavigate();
	const userData = useLoaderData() as UserData;
	const db = Data.getInstance();
	const [upgrades , setUpgrades] = useState<Upgrade[]>();
	const [workers , setWorkers] = useState<Worker[]>();
	const [related , setRelated] = useState<UserRelated>();
	const [money, setMoney] = useState(userData.money);
	
	const loadUp = async () => {
		setUpgrades(await db.loadAllUpgrades());
		setWorkers(await db.loadAllWorkers());
		setRelated(await db.loadUserRelated());
	}
	
	useEffect(()=> {
		if (Data.getCookie("token") === ""){
			alert("Please login before accessing the game");
			navigate("/ClickerMon/login")
		}
		loadUp();
	}, []);
	
	const handleClick = () => {
		setMoney(money+userData.clicIncome);
	};
	const handleSave = () => {
		db.saveUserData({'money' : money}, userData.id);
	};
	const handleDisconnection = () => {
		console.log("Cookie 1 : " , document.cookie);
		document.cookie = "token=; Max-Age=-99999999;";
		console.log("Cookie 2 : " , document.cookie);
		navigate("/ClickerMon/login");
	}

	return (
		<Container gap={0} main height="100vh" width="100%" margin="0">
			<Container width="28%" margin="1%" alignItems="center" column>
				<Container column rounded margin="0" width="80%">
					<Text>Pokedollars : {money}</Text>
					<Text>Clic income : {userData.clicIncome}</Text>
				</Container>
				<Upgrades upgrades={upgrades || []} userUpgrades={userData.userupgrades} />
				<Workers workers={workers || []} userWorkers={related?.userworkers || []} />
			</Container>

			<Container column width="50%" height="100vh" margin="0" alignItems="center" gap={1}>
				<Container>
					<Text>ClickerMon</Text>
				</Container>
				<Button rounded style={{width:"400px", height:'400px'}} onClick={handleClick}>
					<img src={Assets.images.pokeball} alt='pokeball'/>
				</Button>
			</Container>

			<Container width="18%" margin="1%" justifyContent="center">
				<Container column rounded margin="0" width="100%">
					<Text>Username : {userData.username}</Text>
					<Text>Pokedollars : {userData.money}</Text>
					<Text>Id user : {userData.id}</Text>
					<Button rounded style={{padding:'10px', width:'60px', height:'60px'}} onClick={handleSave}><FiSave size={50}/></Button>
					<Button style={{padding:'10px', width:'60px', height:'60px'}} onClick={handleDisconnection}>Disconnect</Button>

				</Container>
			</Container>

		</Container>
	);
}

export default Game;