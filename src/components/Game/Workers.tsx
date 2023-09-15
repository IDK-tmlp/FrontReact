import { Container } from "../container/container.styles";
import RowItem from "./RowItem";
import { Assets } from '../../assets/index';
import { Text } from "../text/text.styles";
import { Worker } from "../../interfaces/userDataInterface";
import Data from "../../services/Data";

interface WorkersProps {
	workers: Worker[],
	userWorkers: Array<[Worker, number, number]>,
	money: number,
	setNewMoney : (m:number)=> void
}

const Workers = (props: WorkersProps) => {
	const getUserWorkers = (userW: Array<[Worker, number, number]>) =>{
		return userW.map(wo => {return wo[0]})
	}
	const userWorkerOnly = getUserWorkers(props.userWorkers);

	let totalIncome = (uw: Array<[Worker, number, number]>) => {
		let sum = 0;
		uw.forEach(w => {
			sum += w[1] * w[2]
		})
		return sum;
	}

	const handleBuyNewWorker = (id: number, price : number) => {
		props.setNewMoney(props.money - price);
		const db = Data.getInstance();
		db.addUserWorker(id);
	}
	const handleBuyMoreWorker = (id : number, quantity: number, price :number) => {
		props.userWorkers.forEach(workerData => {workerData[0].id === id && workerData[1]++;});
		props.setNewMoney(props.money - price*quantity);
		const db = Data.getInstance();
		db.patchUserWorker(id, {'quantity' : quantity})
	}

	return (
		<Container column rounded padding="10px" width="90%" alignItems="center" gap={1}>
			<Text>Pokemon</Text>
			{props.workers[0] !== undefined &&
				props.workers.sort((a, b) => a.id - b.id).map((worker, index) => {
					const userWorker = props.userWorkers[index]
					return userWorker !== undefined && userWorker[0].id === worker.id ?
						<RowItem buyable={props.money >= worker.basePrice} onBuyItem={() => {handleBuyMoreWorker(worker.id, 1, worker.basePrice)}} icon={Assets.images.pokeball} name={worker.name} price={worker.basePrice} quantity={userWorker[1]} desc={(userWorker[1] * userWorker[2]).toString() + " / s"} key={worker.id} /> :
						<RowItem buyable={props.money >= worker.basePrice} disabled onBuyItem={() => {handleBuyNewWorker(worker.id, worker.basePrice)}} icon={Assets.images.pokeball} name={worker.name} price={worker.basePrice} quantity={0} desc={worker.baseIncome.toString() + " / s"} key={worker.id} />
				})}
		</Container>
	);
}

export default Workers;