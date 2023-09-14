import { Container } from "../container/container.styles";
import RowItem from "./RowItem";
import { Assets } from '../../assets/index';
import { Text } from "../text/text.styles";
import { Worker } from "../../interfaces/userDataInterface";

interface WorkersProps {
	workers : Worker[],
	userWorkers :Array<[Worker, number,number]>,
}

const Workers = (props:WorkersProps) => {
	
	// const getRealId = (idWorker : string)=>{
	//     return Number(idWorker.split("/").pop())
	// }

	let income  = (uw : Array<[Worker, number,number]>)=>{
		let sum = 0;
		uw.forEach(w => {
			sum += w[1]*w[2]
		})
		return sum;
	}
	console.log(income(props.userWorkers));
	
	return (
		<Container column rounded padding="10px" width="90%" alignItems="center" gap={1}>
			<Text>Pokemon</Text>
			{props.workers[0] !== undefined && 
				props.workers.sort((a,b)=> a.id - b.id).map((worker,index) => {
					const userWorker = props.userWorkers[index]
					return userWorker !==undefined && userWorker[0].id === worker.id ? 
						<RowItem buyable={true} onBuyItem={()=>{}} icon={Assets.images.pokeball} name={worker.name} price={worker.basePrice} quantity={userWorker[1]} desc={(userWorker[1]*userWorker[2]).toString()+" / s"}/>:
						<RowItem disabled onBuyItem={()=>{}} icon={Assets.images.pokeball} name={worker.name} price={worker.basePrice} quantity={0} desc={worker.baseIncome.toString()+" / s"}/>
			})}
		</Container>
	);
}

export default Workers;