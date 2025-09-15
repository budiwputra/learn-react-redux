import { useNavigate, useLocation } from "react-router"
import "../components/containerStyle.css"

const Container = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const navMenu = [
        {
            label : "Home",
            page :"/" 
        },
        {
            label : "Redux",
            page : "/redux"

        },
        {
            label : "State",
            page : "/product"
        },
        {
            label : "Api",
            page : "/api"
        }]
    return (
        <div>
            <div>
                {navMenu.map ((item, index) => (
                    <button key={index}               
                    onClick={() => navigate(item.page)}
                    className={location.pathname === item.page ? "button-active" : "" }>
                        {item.label}
                    </button>
                ))}
            </div>
            {children}
        </div>
    )
}

export default Container