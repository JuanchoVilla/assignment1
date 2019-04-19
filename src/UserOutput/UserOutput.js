import React from 'react'

const userOutput = (props) => {
  return(
    <div className='UserOutput'>
      <p>User: {props.username}</p>
      <p>Bio: {props.username} was recruited back in '66. Ever since the chief joined we've all had him to thank, for... well, everything.</p>
    </div>
  )
}

export default userOutput;