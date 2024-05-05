import { PiReceipt } from "react-icons/pi";

import { Container } from "./styles";

export function ButtonIcon({ price, text, order = false, ...rest }) {

  return (
    <Container
      type="button"
      {...rest}
    >
      <PiReceipt size={26} />
      {text} {order ? `(${price})` : `${price}`}
    </Container>
  )
} 