import { useLoaderData, useNavigate } from "react-router-dom";
import { Container } from "../container/container.styles";
import { Upgrade, UserData, UserRelated, Worker } from "../../interfaces/userDataInterface";
import { Text } from "../text/text.styles";
import { Assets } from '../../assets/index';
import { Button } from "../button/button.styles";
import { useEffect, useState } from "react";
import { FiSave } from 'react-icons/fi';
import { LuPowerOff } from 'react-icons/lu';
import { FaRegListAlt } from 'react-icons/fa';
import Data from "../../services/Data";
import Upgrades from "./Upgrades";
import Workers from "./Workers";

const Game = () => {

	const navigate = useNavigate();
	const userData = useLoaderData() as UserData;
	const db = Data.getInstance();
	const [upgrades, setUpgrades] = useState<Upgrade[]>();
	const [workers, setWorkers] = useState<Worker[]>();
	const [related, setRelated] = useState<UserRelated>();
	const [money, setMoney] = useState(userData.money);

	const loadUp = async () => {
		setUpgrades(await db.loadAllUpgrades());
		setWorkers(await db.loadAllWorkers());
		setRelated(await db.loadUserRelated());
	}

	let totalIncome = (uw: Array<[Worker, number, number]>) => {
		let sum = 0;
		uw.forEach(w => {
			sum += w[1] * w[2]
		})
		return sum;
	}
	useEffect(()=>{
		if (Data.getCookie("token") === "") {
			alert("Please login before accessing the game");
			navigate("/ClickerMon/login")
		}
		loadUp();
	},[])

	useEffect(() => {
		const interval = setInterval(() => {
			// Add income
			const pps: number = related?.userworkers ? totalIncome(related!.userworkers) : 0;
			setMoney((money) => money + pps)
			// handleSave()
		}, 1000);
		return () => clearInterval(interval);
	}, [money]);

	const handleClick = () => {
		setMoney((money) => money + userData.clicIncome);
	};
	const handleSave = () => {
		db.saveUserData({ 'money': money }, userData.id);
	};
	const handleDisconnection = () => {
		console.log("Cookie 1 : ", document.cookie);
		document.cookie = "token=; Max-Age=-99999999;";
		console.log("Cookie 2 : ", document.cookie);
		navigate("/ClickerMon/login");
	}

	const setNewMoney = (m: number) => setMoney((m) => m);

	return (
		<>
		<Container gap={0} main height="100vh" width="100%" margin="0">
			<img src={Assets.images.poker} alt="" style={{position:"absolute", zIndex:"0"}} width="100%" height="100%"/>
			<Container width="28%" margin="1%" alignItems="center" column style={{zIndex:"1"}} justifyContent="space-around">
				<Container column rounded margin="0" width="80%">
					<Text>Pokedollars : {money}</Text>
					<Text>Clic income : {userData.clicIncome}</Text>
				</Container>
				<Upgrades upgrades={upgrades || []} userUpgrades={userData.userupgrades} money={money} setNewMoney={setNewMoney} />
				<Workers workers={workers || []} userWorkers={related?.userworkers || []} money={money} setNewMoney={setNewMoney} />
			</Container>

			<Container column width="50%" height="100vh" margin="0" alignItems="center" gap={3} style={{zIndex:"1"}}>
				<Container rounded padding="1%">
					<h1 style={{ margin:'0'}}>ClickerMon</h1>
				</Container>
				<Button rounded style={{ width: "350px", height: '350px'}}  onClick={handleClick}>
					<img src={Assets.images.pokeball} alt='pokeball' className="App-logo" />
				</Button>
			</Container>

			<Container width="18%" margin="1%" justifyContent="center" style={{zIndex:"1"}}>
				<Container column rounded margin="0" width="100%">
					<Container>
						<Text>Username : {userData.username}</Text>
						<Text>Id user : {userData.id}</Text>
					</Container>
					<Container>
						<Text>Logs :</Text>
					</Container>
					<Container gap={1}>
						<Button rounded style={{ padding: '10px', width: '60px', height: '60px' }} onClick={handleSave}><FiSave size={50} /></Button>
						<Button rounded style={{ padding: '10px', width: '60px', height: '60px' }} onClick={handleDisconnection}><LuPowerOff size={50} /></Button>
						<Button rounded style={{ padding: '10px', width: '60px', height: '60px' }} onClick={()=>{handleSave(); navigate('/Clickermon/credits')}}><FaRegListAlt size={50} /></Button>
					</Container>
				</Container>
			</Container>
		</Container>
		</>
	);
}

export default Game;