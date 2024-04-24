import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Services from "./services"
import Tours from "./tours"
import Footer from "./footer"
import ABout from "./About"
import "./css/styles.css"
// ********** set date ************
// select span
// const date = (document.getElementById('date').innerHTML =
//   new Date().getFullYear())

// // ********** nav toggle ************
// // select button and links
// const navBtn = document.getElementById('nav-toggle')
// const links = document.getElementById('nav-links')
// // add event listener
// navBtn.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

// ********** smooth scroll ************
// select links
function App() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <ABout/>
       <Services/>
       <Tours/>
       <Footer/>
    </>
  )
}

export default App;