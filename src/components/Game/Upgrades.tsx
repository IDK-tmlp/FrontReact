import { Container } from "../container/container.styles";
import RowItem from "./RowItem";
import { Text } from "../text/text.styles";
import { Upgrade } from "../../interfaces/userDataInterface";
import Assets from "../../assets";

interface UpgradesProps {
    upgrades : Upgrade[],
    userUpgrades:any
}

const Upgrades = (props:UpgradesProps) => {
    const trimDesc = (desc:string)=>{
        return desc.substring(0, 35)+"...";
    }

    return (
        <Container column rounded padding="10px" width="90%" alignItems="center" gap={1}>
            <Text>Upgrades</Text>
            {props.upgrades[0] !== undefined && props.upgrades.map( upgrade => {
                return <RowItem key={upgrade.id} onBuyItem={()=>{}} icon={Assets.icons.kiwan} name={upgrade.upgradeName} price={upgrade.price} desc={trimDesc(upgrade.upgradeDesc)}/>
            })}
        </Container>
    );
}

export default Upgrades;