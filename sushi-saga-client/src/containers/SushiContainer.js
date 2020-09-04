import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)

  const renderSushi = () => {
    return props.chooseFourSushis.map(sushi => {
      return <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} />
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer