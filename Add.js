import React, {useState} from 'react'
import store from '../store'

export default function Add() {
    
    const [description, setDescription] = useState("")

    const handleAdd = () => {
        store.dispatch({
            type: "add",
            payload:{
                description : description
            }
        })
    }

    return (
        <div>
            <input type="text" name="description" value={description} onChange={e=>setDescription(e.target.value)} />
            <button onClick={handleAdd} >Add</button>
        </div>
    )
}
