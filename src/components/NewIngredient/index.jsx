import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export function NewIngredient({ $isNew, value, onClick, ...rest}) {

return (
  <Container $isNew={$isNew}>
    <input
      type="text"
      value={value}
      readOnly={!$isNew}
      {...rest}
    />

    <button type="button" onClick={onClick}>
      {$isNew ? <FiPlus className="button-add" size={14} /> : <FiX className="button-delete" size={14} />}
    </button>
  </Container>
)
}