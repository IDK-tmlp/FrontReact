import { Container } from "../container/container.styles";
import RowItem from "./RowItem";
import { Assets } from '../../assets/index';
import { Text } from "../text/text.styles";
import { Upgrade } from "../../interfaces/userDataInterface";

interface UpgradesProps {
    upgrades : Upgrade[],
}

const Upgrades = (props:UpgradesProps) => {
    return (
        <Container column>
            <Text>Pokemon</Text>
            {props.upgrades.map( upgrade => {
                return <RowItem icon={Assets.images.pokeball} name={upgrade.upgradeName} price={50} quantity={1} desc="C'est cool"/>
            })}
        </Container>
    );
}

export default Upgrades;