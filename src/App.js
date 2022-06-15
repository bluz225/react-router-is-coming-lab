import { BrowserRouter, Routes, Route } from "react-router-dom"
import House from "./components/House"
import Houses from "./components/Houses"
import Member from "./components/Member"
import gameOfThrones from "./gameOfThrones"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/houses" element={<Houses 
          gameOfThrones={gameOfThrones}
        />}/>
        <Route path="/houses/:id" element={<House
          gameOfThrones={gameOfThrones}
        />}/>
        <Route path="/houses/:houseId/members/:memberId" element={<Member
          gameOfThrones={gameOfThrones}
        />}/>

    </Routes>
  </BrowserRouter>
  )
}