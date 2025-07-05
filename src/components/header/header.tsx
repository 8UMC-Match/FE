import * as H from "../../styles/header/header.styles";
import ArrowLeft from "../../assets/images/header/arrowLeft.png";
import { useNavigate } from "react-router-dom";
import type { HeaderProps } from "../../types/header/header.types";

const Header = ({ text }: HeaderProps) => {
    const navigate = useNavigate();

    const handlePrev = () => {
        navigate(-1);
    }

    return (
        <H.HeaderContainer>
            <H.PrevButtonImg src={ArrowLeft} alt="prev" onClick={handlePrev} />
            <H.HeaderP>{text}</H.HeaderP>
        </H.HeaderContainer>
    )
}

export default Header;