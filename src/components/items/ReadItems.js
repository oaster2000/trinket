import React, { useState } from 'react';
import app from "../../firebaseConfig"
import { getDatabase, ref, get } from "firebase/database"


function ReadItems() {

    let [itemArray, setItemArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "tables/items")
        const snapshot = await get(dbRef)

        if (snapshot.exists()) {
            setItemArray(Object.values(snapshot.val()));
        } else {
            alert("Error, No Data")
        }
    }

    return (
        <div>
            <button onClick={fetchData}>Display Data</button>
            {itemArray.map((item) => (
                <div class="item-container">
                    <h1>{item.itemName}</h1>
                    <h2><i>{item.itemRarity}</i></h2>
                    {item.itemDescription}
                </div>
            ))}
        </div>
    )
}

export default ReadItems