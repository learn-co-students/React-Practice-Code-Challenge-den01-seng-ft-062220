import React from 'react'

const MoreButton = (props) => {

    const handleClick = () => {
      props.moreSushi()
    }

    return <button onClick={handleClick}>
              More sushi!
          </button>
}

export default MoreButton