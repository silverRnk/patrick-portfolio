

const LinkIcon = (props:{url:string, icon:string}) => {
    const {icon} = props
  return (
    <div>
        <img src={icon} alt="" />
    </div>
  )
}

export default LinkIcon