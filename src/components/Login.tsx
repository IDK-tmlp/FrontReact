import { useFetcher, useNavigate } from "react-router-dom";
import { Container } from "./container/container.styles";
import { Button } from "./button/button.styles";

interface LoginProps {
	login:boolean
}

const Login = (props:LoginProps) => {
	const fetcher = useFetcher();
	const navigate = useNavigate()
	return (
		<Container width="100%" justifyContent="center">
			<Container rounded>
				<fetcher.Form  action="true" method="post" style={{display:'flex', flexDirection:'column'}}>
					<Container gap={1} column alignItems="center">
							<label htmlFor="username">Username</label>
							<input type="text" name="username" placeholder="Username"/>
					</Container>
					<Container gap={1} column alignItems="center">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" placeholder="***********" />
					</Container>
					{!props.login &&
						<Container gap={1} column alignItems="center">
							<label htmlFor="confirmPassword">Confirm password</label>
							<input type="password" name="confirmPassword" placeholder="***********" />
						</Container>
					}
					<Container margin="0" justifyContent="center" gap={1}>
						{props.login && <Button onClick={()=> navigate('/ClickerMon/register')}>Register</Button>}
						<Button type="submit">{props.login ? "Login" :"Register"}</Button>
					</Container>
				</fetcher.Form >
			</Container>
		</Container>
	);
}

export default Login;