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
      <section id="home" style={{ height: "100vh" }}><Home/></section>
      <section id="about me" style={{ height: "100vh" }}><About/></section>
      <section id="journey" style={{ height: "100vh" }}><Journey/></section>
      <section id="skills" style={{ height: "100vh" }}><Skills/></section>
      <section id="projects" style={{ height: "100vh" }}><Projects/></section>
      <section id="lense" style={{ height: "100vh" }}><Lense/></section>
      <section id="contact" style={{ height: "100vh" }}><Contact/></section>
    </>
  )
}

export default App
