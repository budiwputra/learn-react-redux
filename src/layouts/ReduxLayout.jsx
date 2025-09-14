import Header from "../pages/Header"
import Footer from "../pages/Footer"
import { Outlet } from "react-router"

const ReduxLayout = () => {
    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    )
}
export default ReduxLayout