import './App.css'
import TopNavBar from './components/TopNavBar';
import InputBox from './components/InputBox';
import CardList from './components/CardList';
import ComboBox from './components/ComboBox';
import { useState } from 'react'

export type Color = {
  label: string;
  value: string;
};

const initialColors: Color[] = [
  { label: "red", value: "red" },
  { label: "orange", value: "orange" },
  { label: "green", value: "green" },
  { label: "blue", value: "blue" },
  { label: "violet", value: "violet" },
  { label: "chartreuse", value: "chartreuse" },
  { label: "black", value: "black" },
  { label: "white", value: "white" },
  { label: "purple", value: "purple" },
] as const

function App() {
  const [colors, setColors] = useState<Color[]>(initialColors);
  

  return (
    <div>
      <header className="sticky top-0 z-50 w-full h-14 px-4">
        <TopNavBar />
      </header>
      <div className='h-svh grid grid-cols-2 grid-rows-10 container w-2/3'>
        <div className="col-span-2 row-span-2 mt-12">
          <InputBox setColors={setColors} />
        </div>
        <div className="row-span-6 col-span-1 ">
          <CardList colors={colors}/>
        </div>
        <div className="row-span-6 col-span-1 mx-auto">
          <ComboBox colors={colors} />
        </div>
      </div>
    </div>
  )
}

export default App
