import { useNavigate, useLocation } from "react-router"
import "../components/containerStyle.css"

const Container = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const navMenu = [
        {
            label : "Redux",
            page : "/redux"

        },
        {
            label : "State [Array]",
            page : "/state-array"
        },
        {
            label : "State [Object]",
            page : "/state-object"
        },
        {
            label : "Api [Array]",
            page : "/api-array"
        },
            {
            label : "Api [Object]",
            page : "/api-object"
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