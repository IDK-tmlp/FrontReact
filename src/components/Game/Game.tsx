import { useLoaderData } from "react-router-dom";
import { Container } from "../container/container.styles";
import { UserData } from "../../interfaces/userDataInterface";
import { Text } from "../text/text.styles";
import { Assets } from '../../assets/index';
import { Button } from "../button/button.styles";
import { useEffect, useState } from "react";

const Game = () => {
    const userData = useLoaderData() as UserData;
    const [money, setMoney] = useState(userData.money);
    
    useEffect(() => {
	}, [money]);

    const handleClick = () => {
        setMoney(money+userData.clicIncome);
    };
    

    return (
        <Container gap={0} main height="100vh" width="100%" margin="0">
            <Container width="23%" margin="1%" justifyContent="center">
                <Container column rounded margin="0">
                    <Text>Username : {userData.username}</Text>
                    <Text>Pokedollars : {money}</Text>
                    <Text>Clic income : {userData.clicIncome}</Text>
                    <Text>Last Connection : {new Date(userData.lastConnection).toLocaleDateString()}</Text>
                    <Text>User Upgrades : </Text>
                    <ul style={{display : "flex", justifyContent:'center'}}>
                        {userData.userupgrades.map(upgrade => {return <li style={{width:'fit-content'}}>{upgrade.upgradeName}</li>})}
                    </ul>
                    <Text>User Workers : </Text>
                    <ul style={{display : "flex", justifyContent:'center'}}>
                        {userData.userworkers.map(worker => {return <li style={{width:'fit-content'}}>{worker.idWorker}</li>})}
                    </ul>
                </Container>
            </Container>

            <Container column width="50%" height="100vh" margin="0" alignItems="center" gap={1}>
                <Container>
                    <Text>ClickerMon</Text>
                </Container>
                <Button rounded style={{width:"400px", height:'400px'}} onClick={handleClick}>
                    <img src={Assets.images.pokeball} alt='pokeball'/>
                </Button>
            </Container>

            <Container width="23%" margin="1%" justifyContent="center">
                <Container column rounded margin="0">
                    <Text>Username : {userData.username}</Text>
                    <Text>Pokedollars : {userData.money}</Text>
                    <Text>Clic income : {userData.clicIncome}</Text>
                    <Text>Last Connection : {new Date(userData.lastConnection).toLocaleDateString()}</Text>
                    <Text>User Upgrades : </Text>
                    <ul style={{display : "flex", justifyContent:'center'}}>
                        {userData.userupgrades.map(upgrade => {return <li style={{width:'fit-content'}}>{upgrade.upgradeName}</li>})}
                    </ul>
                    <Text>User Workers : </Text>
                    <ul style={{display : "flex", justifyContent:'center'}}>
                        {userData.userworkers.map(worker => {return <li style={{width:'fit-content'}}>{worker.idWorker}</li>})}
                    </ul>
                </Container>
            </Container>

        </Container>
    );
}

export default Game;