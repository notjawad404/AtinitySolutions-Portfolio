import React, { Component } from 'react'
import Navbar1 from '../common/Navbar1'
import Footer from '../common/Footer'
import ContactDiv1 from '../contact/ContactDiv1'
import ContactDiv2 from '../contact/ContactDiv2'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar1/>
        <ContactDiv1/>
        <ContactDiv2/>
        <Footer/>

      </div>
    )
  }
}
