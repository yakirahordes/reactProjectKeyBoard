import { useState } from 'react'
import './App.css'
import Input from './components/input'
import Hebrew from './components/Hebrew'
import English from './components/English'
import Language from './components/Language'
import Size from './components/Size'
import Color from './components/Color'
import Special from './components/Special'

function App() {
  const [text, setText] = useState([]);
  const [boolean, setBoolean] = useState(true);
  const [fontSize, setFontSize] = useState('15px')
  const [color, setColor] = useState('black')
  const [textCase, setTextCase] = useState('')
  const [changeCase, setChangeCase] = useState('lowercase')
  const [last, setLast] = useState([])
  return (
    <>
      <Input text = {text} textCase={textCase}/>
      {(boolean) ? <Hebrew setText = {setText} fontSize = {fontSize} color = {color} setLast={setLast}/> : <English setText = {setText} fontSize = {fontSize} color = {color} changeCase = {changeCase} setLast={setLast}/>}
      <Language boolean={boolean} setBoolean={setBoolean} changeCase = {changeCase} setChangeCase = {setChangeCase} text={text} setText = {setText} last={last} setLast={setLast}/>
      <Size setFontSize = {setFontSize} />
      <Color setColor = {setColor} />
      <Special setText={setText} setTextCase = {setTextCase} text={text} setLast={setLast}/>
    </>
  )
}

export default App;
