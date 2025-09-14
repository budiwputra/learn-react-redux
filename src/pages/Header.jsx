import { useSelector} from 'react-redux'
const Header = () => {
    const count = useSelector(state => state.counter.value)
    return (
        <div>
            <h2>Header</h2>
            <span>Count : {count}</span>
        </div>
    )
}
export default Header