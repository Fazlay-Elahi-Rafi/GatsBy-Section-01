import React from "react"

import ReactNavbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <>
      <ReactNavbar />
      <main>{children}</main>
      {/* main ar modde amar sob keco ase...nav & footer fix thakbo kinto main change hoibo..Ract-Router ar moto kaj kortace  */}
      <Footer />
    </>
  )
}
