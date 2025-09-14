import { useSelector} from 'react-redux'
const Footer = () => {
    const count = useSelector(state => state.counter.value)
    return (
        <div>
            <h2>Footer</h2>
            <span>Count : {count}</span>
        </div>
    )
}
export default Footer