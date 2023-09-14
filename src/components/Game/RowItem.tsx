import { Button } from "../button/button.styles";
import { Container } from "../container/container.styles";
import { Text } from "../text/text.styles";

interface RowItemProps {
    icon:string,
    name:string,
    desc? : string,
    disabled? : boolean,
    quantity? : number,
    price:number,
    buyable? : boolean,
    onBuyItem : ()=>void,
    
}

const RowItem = (props : RowItemProps) => {

    return (
        <Container rounded alignItems="center" padding="15px" gap={1} justifyContent="space-between" margin="0" width="80%" style={props.disabled ? {opacity:"0.7", backgroundColor: 'gray'} : {}}>
            <Button shadow style={{width:"40px", height:'40px'}}>
                <img src={props.icon} alt={props.name} style={{width:"30px", height:'30px'}}/>
            </Button>
            <Container column gap={0} margin="0">
                <Text>{props.name}</Text>
                {/* TODO : hide if more than x char and show on hover */}
                {props.desc && <Text smaller>{props.desc}</Text>}
            </Container>
            {props.quantity && 
                <Container margin="0">
                    <Text>{props.quantity}</Text>
                </Container>
            }
            <Container margin="0">
                <Button disabled={props.buyable} shadow rounded style={{width:"40px", height:'40px'}}>{props.price}</Button>
            </Container>
        </Container>
    );
}

export default RowItem;