import Container from "./components/Container"
import { Outlet } from "react-router"

const WrapPage = () => {
    return (
        <Container>
            <Outlet/>
        </Container>
    )
}

export default WrapPage