import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";

function App() {
  // KODUNUZ BURAYA GELECEK
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/protectedPage"
          element={<ProtectedPage />}
        />
      </Routes>
    </BrowserRouter >
  )
}

const Home = () => {
  // KODUNUZ BURAYA GELECEK
  const [x, setX] = useState(false)
  let navigate = useNavigate();

  const handleCheck = () => {
    if (x) {
      navigate("/protectedPage")
    }
    else {
      alert("Davetsiz misafir")
    }
  }

  console.log(x)

  return (
    <>
      <Captcha handleX={setX} />
      <button className="text-white bg-blue-700  px-5 py-2.5 me-2 mb-2"
        onClick={handleCheck}> Tıkla</button >
    </>)
};

const ProtectedPage = () => {
  //  KODUNUZ BURAYA GELECEK
  return (<div>ProtectedPage</div>)
};

const Captcha = ({ handleX }) => {
  const [id, setId] = useState(1)
  const [c, setC] = useState(false)

  useEffect(() => {
    setId(Math.floor(Math.random() * 5) + 1)
  }, [c])

  const handleClick = (number) => {

    if (number == id) {
      handleX(true)
    }
    else {
      handleX(false)
    }

  }

  const handleChange = (number) => {
    setC(p => !p)
  }

  return (
    <>
      <p className="text-center w-1/4 mt-10">{id} yi seçiniz</p>
      <button className="text-white bg-blue-700 px-2 py-2.5 me-2 mb-2" onClick={handleChange}>Değiştir</button>
      <div className="grid grid-cols-3 m-10 w-1/5">
        <div className="box" onClick={() => handleClick(1)}>1</div>
        <div className="box" onClick={() => handleClick(2)}>2</div>
        <div className="box" onClick={() => handleClick(3)}>3</div>
        <div className="box" onClick={() => handleClick(4)}>4</div>
        <div className="box" onClick={() => handleClick(5)}>5</div>
        <div className="box" onClick={() => handleClick(6)}>6</div>
      </div >

    </>)
};

export default App;
