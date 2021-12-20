import store from '../store'
import Add from './Add'
import {useState} from 'react'

export default function Index(){

    const [currentState, setCurrentState] = useState([])
    
    store.subscribe(()=>{
        setCurrentState(store.getState())
    })

    return (
        <>
            <Add />
            <div>
                {
                    currentState.map(e=><li key={e.id}>{e.id}</li>)
                }
            </div>
        </>
    )
}
