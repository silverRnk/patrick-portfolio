

const SkillChip = (props:{name:string, color:string}) => {
    const {name, color} = props

  return (
    <button className={`min-w-[75px] h-[60px] px-5 text-xl text-white rounded-md shadow-md shadow-gray`} style={{backgroundColor: `${color}`}}>{name}</button>
  )
}

export default SkillChip