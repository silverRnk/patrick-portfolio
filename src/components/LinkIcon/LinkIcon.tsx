import React from 'react'

const LinkIcon = (props:{url:string, icon:string}) => {
    const {url, icon} = props
  return (
    <div>
        <img src={icon} alt="" />
    </div>
  )
}

export default LinkIcon