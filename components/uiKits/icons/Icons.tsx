import Icon from './icon'
import IconsList from './IconsList'
const Icons = () => {
  return (
    <div>
      {Object.keys(IconsList).map((name, index) => {
        return (<Icon key={index} name={name} size="40" color="black" />)
      })}
    </div>
  )
}

export default Icons