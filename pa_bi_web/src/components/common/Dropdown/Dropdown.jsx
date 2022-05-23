import { Box, Item } from "./Dropdown.style";

const OPTIONS = [
  { value: "latest", name: "최신순" },
  { value: "popular", name: "인기순" },
  { value: "high", name: "가격높은순" },
  { value: "low", name: "가격낮은순" },
  { value: "distance", name: "거리순" },
];

export default function Dropdown() {
  return (
    <Box>
      <Item></Item>
    </Box>
  );
}
