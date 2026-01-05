import { useState } from 'react'
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Journey from './components/journey';
import Skills from './components/skills';
import Projects from './components/projects';
import Lense from './components/lense';
import Contact from './components/contact';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <section id="home" style={{scrollMarginTop: "80px", minHeight: "87vh" }}><Home/></section>
      <section id="about" style={{scrollMarginTop: "80px", minHeight: "87vh" }}><About/></section>
      <section id="journey" style={{scrollMarginTop: "80px", minHeight: "100vh" }}><Journey/></section>
      <section id="skills" style={{scrollMarginTop: "80px", minHeight: "100vh" }}><Skills/></section>
      <section id="projects" style={{scrollMarginTop: "80px", minHeight: "100vh" }}><Projects/></section>
      <section id="lense" style={{scrollMarginTop: "80px", minHeight: "100vh" }}><Lense/></section>
      <section id="contact" style={{scrollMarginTop: "80px", minHeight: "100vh" }}><Contact/></section>
    </>
  )
}

export default App
