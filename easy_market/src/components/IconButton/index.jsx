import { Container } from "./styles"

export function IconButton({ icon: Icon, disabled, ...rest }) {
  return (
    <Container disabled={disabled} type="button" {...rest}>
      {Icon && <Icon />}
    </Container>
  )
}
