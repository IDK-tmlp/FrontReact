import { Container } from "../container/container.styles";
import RowItem from "./RowItem";
import { Text } from "../text/text.styles";
import { Upgrade } from "../../interfaces/userDataInterface";
import Assets from "../../assets";
import Data from "../../services/Data";

interface UpgradesProps {
    upgrades : Upgrade[],
    userUpgrades:any,
    money: number,
	setNewMoney : (m:number)=> void
}

const Upgrades = (props:UpgradesProps) => {
    const trimDesc = (desc:string)=>{
        return desc.substring(0, 35)+"...";
    }

    const handleBuyNewUpgrade = (id: number, price : number) => {
		props.setNewMoney(props.money - price);
		const db = Data.getInstance();
	}

    return (
        <Container column rounded padding="10px" width="90%" alignItems="center" gap={1}>
            <Text>Upgrades</Text>
            {props.upgrades[0] !== undefined && props.upgrades.map( upgrade => {
                return <RowItem key={upgrade.id} buyable={props.money >= upgrade.price} onBuyItem={()=>{handleBuyNewUpgrade(upgrade.id, upgrade.price)}} icon={Assets.icons.kiwan} name={upgrade.upgradeName} price={upgrade.price} desc={trimDesc(upgrade.upgradeDesc)}/>
            })}
        </Container>
    );
}

export default Upgrades;