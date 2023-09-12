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
}

const RowItem = (props : RowItemProps) => {
    return (
        <Container rounded alignItems="center" padding="15px" gap={1} justifyContent="center">
            <Button shadow rounded style={{width:"40px", height:'40px'}}>
                <img src={props.icon} alt={props.name} style={{width:"40px", height:'40px'}}/>
            </Button>
            <Container column gap={0} margin="0">
                <Text>{props.name}</Text>
                {/* TODO : hide if more than x char and show on hover */}
                {props.desc && <Text smaller>{props.desc}</Text>}
            </Container>
            <Container margin="0">
                <Text>{props.quantity}</Text>
            </Container>
            <Container margin="0">
                <Button shadow rounded style={{width:"40px", height:'40px'}}>{props.price}</Button>
            </Container>
        </Container>
    );
}

export default RowItem;