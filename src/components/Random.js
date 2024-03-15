import React, { useState, useEffect } from 'react';
import app from "../firebaseConfig"
import { getDatabase, ref, get } from "firebase/database"
import { useParams } from "react-router-dom";

function Random() {

    let [item, setItem] = useState({
        itemName: "",
        itemDescription: "",
        itemRarity: ""
    });
    const { id } = useParams();

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "tables/" + id)
        const snapshot = await get(dbRef)

        if (snapshot.exists()) {
            var itemArray = Object.values(snapshot.val());
            setItem(itemArray[Math.floor(Math.random() * itemArray.length)]);
        } else {
            alert("Error, No Data")
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div class="random-container">
            <div class="item-container">
                <div class={item.itemRarity.toLowerCase()}>
                    <h1>{item.itemName}</h1>
                    <h2><i>{item.itemRarity}</i></h2>
                    <p>{item.itemDescription}</p>
                </div>
            </div>

            <button onClick={fetchData}>Roll Pixel</button>
        </div>
    )
}

export default Random