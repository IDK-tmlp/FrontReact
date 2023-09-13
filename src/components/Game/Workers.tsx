import { Container } from "../container/container.styles";
import RowItem from "./RowItem";
import { Assets } from '../../assets/index';
import { Text } from "../text/text.styles";
import { UserWorker, Worker } from "../../interfaces/userDataInterface";

interface WorkersProps {
    workers : Worker[],
    userWorkers : UserWorker[],
}

const Workers = (props:WorkersProps) => {
    const getRealId = (idWorker : string)=>{
        return Number(idWorker.split("/").pop())
    }
 
    return (
        <Container column rounded padding="10px" width="90%" alignItems="center" gap={1}>
            <Text>Pokemon</Text>
            {props.workers[0] !== undefined && 
                props.workers.sort((a,b)=> a.id - b.id).map( worker => {
                    return <RowItem disabled icon={Assets.images.pokeball} name={worker.name} price={worker.basePrice} quantity={getRealId(props.userWorkers[0].idWorker)} desc={worker.baseIncome.toString()+" / s"}/>
            })}
        </Container>
    );
}

export default Workers;