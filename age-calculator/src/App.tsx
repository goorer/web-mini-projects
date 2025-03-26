import { useState } from 'react'

function App() {
  const [age, setAge] = useState(0)
  const [birthDay, setBirthDay] = useState('')

  const calculateAge = (birthDay: string) => {
    const today = new Date()
    const birthDate = new Date(birthDay)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    setAge(age)
  }

  return (
    <>
      <input type="date" value={birthDay} onChange={(e) => setBirthDay(e.target.value)} />
      <button onClick={() => calculateAge(birthDay)}>Calculate Age</button>
      <p>Your age is {age}</p>
    </>
  )
}

export default App
