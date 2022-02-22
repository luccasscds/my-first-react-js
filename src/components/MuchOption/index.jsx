import { Wrapper, Img, Text, Title } from "./styles";
// Images
import next from "../../assets/images/next.png";

export function MuchOption(props) {
    return(
        <Wrapper>
            <Img src={props.icons} />
            <Title>
                <Text fontSize={1.5} fw="bolder" >{props?.text[0]}</Text>
                <Img src={next} />
            </Title>
            <Text fontSize={1.3} color="#6e7176" >{props?.text[1]}</Text>
            <Text className={"isHide"} fontSize={1.3} color="#6e7176" >{props?.text[2]}</Text>
        </Wrapper>
    );
}