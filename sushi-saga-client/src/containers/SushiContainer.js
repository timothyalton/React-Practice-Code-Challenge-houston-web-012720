import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props)


  return (
    <Fragment>
      <div className="belt">
        {
        //  props.sushiList ? props.sushiList.map(sushi => <Sushi sushi={sushi}/>) : "Loading..."
         props.displaySushiList ? props.displaySushiList.slice(props.sliceStart, props.sliceEnd).map(sushi => <Sushi sushi={sushi} deleteSushi={props.deleteSushi} money={props.money}/>) : "Loading..."
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer