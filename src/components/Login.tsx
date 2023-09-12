import { useFetcher, useNavigate } from "react-router-dom";
import Assets from "../assets";
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
                    <Container gap={1}>
                            <label htmlFor="username">Username : </label>
                            <input type="text" name="username" placeholder="Username"/>
                    </Container>
                    <Container gap={1}>
                        <label htmlFor="password">Password : </label>
                        <input type="password" name="password" placeholder="***********" />
                    </Container>
                    {!props.login &&
                        <Container gap={1}>
                            <label htmlFor="confirmPassword">Confirm password : </label>
                            <input type="password" name="confirmPassword" placeholder="***********" />
                        </Container>
                    }
                    <Button type="submit">{props.login ? "Login" :"Register"}</Button>
                </fetcher.Form >
            </Container>
        </Container>
    );
}

export default Login;