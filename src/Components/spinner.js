import React, { Component } from 'react'
import loader from './Spinner-3.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'><img src={loader} alt="" /></div>
    )
  }
}
