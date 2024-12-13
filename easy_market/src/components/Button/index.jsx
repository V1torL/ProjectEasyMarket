import { Spin } from "../Spin"
import { Container } from "./styles"

export function Button({
    title,
    loading = false,
    icon: Icon,
    classSpin,
    ...rest
}){
    return (
        <Container {...rest} $disabled={loading}>
        {Icon && <Icon />}
        <button disabled={loading}>{title}</button>

        {loading && <Spin className={classSpin} />}
        </Container>
    )
}
