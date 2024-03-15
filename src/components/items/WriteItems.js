import React, {useState} from 'react';
import app from "../../firebaseConfig"
import { getDatabase, ref, set, push} from "firebase/database"

function WriteItems() {
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  let [inputValue3, setInputValue3] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "tables/items"))
    set(newDocRef, {
      itemName: inputValue1, 
      itemDescription: inputValue2, 
      itemRarity: inputValue3, 
    }).then( () => {
      alert("data saved successfully")
      setInputValue1("")
      setInputValue2("")
      setInputValue3("")
    }).catch((error) => {
      alert("error: ", error.message)
    })
  }

  return (
    <div>
      Name: <br />
      <input type='text' value={inputValue1} 
      onChange={(e) => setInputValue1(e.target.value)}/> <br />

      Description: <br />
      <input type='text' value={inputValue2} 
      onChange={(e) => setInputValue2(e.target.value)}/> <br />

      Rarity: <br />
      <input type='text' value={inputValue3} 
      onChange={(e) => setInputValue3(e.target.value)}/> <br />

      <button onClick={saveData}>Save Data</button>
    </div>
  )
}

export default WriteItems