import { useNavigate } from "react-router-dom";
import Assets from "../assets";
import { Button } from "./button/button.styles";
import { Container } from "./container/container.styles";
import { Text } from "./text/text.styles";

const Credits = () => {
	const navigate = useNavigate();
	return (
		<Container gap={0} main height="100vh" width="100%" margin="0" justifyContent="center" alignItems="center">
			<img src={Assets.images.pikachuApple} alt="" style={{position:"absolute", zIndex:"0"}} width="100%" height="100%"/>
			<Container gap={2} rounded style={{zIndex:"1"}} column height="fit-content">
				<h1>Credits</h1>
				<Text>Code : IDK</Text>
				<Text>Profs et tuteurs : Yvan, Hervé et Emanuel</Text>
				<Text>Ecole : Diginamic</Text>
				<Text>Créateur de pokémon : Satoshi Tajiri</Text>
				<Text>Créateur Cookie Clicker : Julien « Orteil » Thiennot</Text>
				<Button style={{alignSelf:"left", width:"fit-content"}} onClick={()=>navigate('/ClickerMon')}>Back</Button>
			</Container>
		</Container>
	);
}

export default Credits;