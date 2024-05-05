import { BiSearch } from "react-icons/bi";

import { Container } from "./styles";

export function Input({ ...rest }) {
  return (
    <Container >
      <BiSearch size={24}/>
      <input type="text" {...rest}/>
    </Container>
  )
}