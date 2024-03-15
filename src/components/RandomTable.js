import React, { useState, useEffect } from 'react';
import app from "../firebaseConfig"
import { getDatabase, ref, get } from "firebase/database"
import { useParams } from "react-router-dom";

function RandomTable() {

    let [item, setItem] = useState({
        itemName: "",
        itemDescription: "",
        itemRarity: ""
    });
    const { id } = useParams();
    const { number } = useParams();
    var selectedItems = []

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "tables/" + id)
        const snapshot = await get(dbRef)

        if (snapshot.exists()) {
            selectedItems = []
            var itemArray = Object.values(snapshot.val());
            for (let i = 0; i < number; i++) {
                var item = itemArray[Math.floor(Math.random() * itemArray.length)];
                selectedItems.push(item)
            }
        } else {
            alert("Error, No Data")
        }
    }

    const randomSelect = async () => {
        await fetchData();
        setItem(selectedItems[Math.floor(Math.random() * selectedItems.length)]);
    }

    useEffect(() => {
        randomSelect();
    }, []);
    return (
        <div class="random-container">
            {item != null ? (item.itemName != "" ? (
                <div class="item-container">
                    <div class={item.itemRarity.toLowerCase()}>
                        <h1>{item.itemName}</h1>
                        <h2><i>{item.itemRarity}</i></h2>
                        <p>{item.itemDescription}</p>
                    </div>
                </div>
            ) : (
                <br />
            )) : (
                console.log("Error Item is Null")
            )}
            <button onClick={randomSelect}>Roll the Pixel</button>
        </div>
    )
}

export default RandomTable