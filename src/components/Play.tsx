import { useNavigate } from "react-router-dom";
import { Button } from "./button/button.styles";
import { Container } from "./container/container.styles";
import { FaPlay } from 'react-icons/fa';
import Assets from "../assets";

const Play = () => {

	const navigate = useNavigate();

	return (
		<Container justifyContent="center" alignItems="center" width="100%" height="100vh" margin="0">
			<img src={Assets.images.playwp} alt="" style={{position:"absolute", zIndex:"0"}} width="100%" height="100%"/>
			<Container style={{zIndex:"1"}}>
				<Button style={{padding:"50px", borderRadius:"50%"}} onClick={()=>navigate("/ClickerMon/login")}><FaPlay size={100}/></Button>
			</Container>
		</Container>
	);
}

export default Play;