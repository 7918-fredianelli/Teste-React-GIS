import {HeaderContainer} from "./styles"
import {Button} from "./styles";
import {useUrl} from "../../Functions/CustomHooks";

function Header(){

    const [goToHome] = useUrl("/")
    return(
        <HeaderContainer>
            <Button cor={"#FF00FF"} corDeFundo={"white"} onClick={goToHome} >Maria Bonita System</Button>
        </HeaderContainer>
    )
}
export default Header;