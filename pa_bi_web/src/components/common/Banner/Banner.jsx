import { Image, Text, Boxes, Box, TextBox, Main } from "./Banner.style";
import Logo from "./logo.png";
export default function Banner() {
  return (
    <Image>
      <Main>
        <img src={Logo} alt="Pabi" />
        <TextBox>
          <Text>팔고 비우고</Text>
          <Text>중고 경매 플랫폼 파비를 만나보세요</Text>
        </TextBox>
      </Main>
      <Boxes>
        <Box>게시글 작성</Box>
        <Box>진행형 매물</Box>
        <Box>임박 매물</Box>
        <Box>인기 매물</Box>
      </Boxes>
    </Image>
  );
}
