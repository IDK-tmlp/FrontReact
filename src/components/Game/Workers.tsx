import { Container } from "../container/container.styles";
import RowItem from "./RowItem";
import { Assets } from '../../assets/index';
import { Text } from "../text/text.styles";
import { Worker } from "../../interfaces/userDataInterface";

interface WorkersProps {
    workers : Worker[],
}

const Workers = (props:WorkersProps) => {
 
    return (
        <Container column rounded padding="10px" width="90%" alignItems="center" gap={1}>
            <Text>Pokemon</Text>
            {props.workers[0] !== undefined && props.workers.sort((a,b)=> a.id - b.id).map( worker => {
                return <RowItem icon={Assets.images.pokeball} name={worker.name} price={worker.basePrice} quantity={1} desc={worker.baseIncome.toString()+" / s"}/>
            })}
        </Container>
    );
}

export default Workers;