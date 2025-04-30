import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Checkbox } from "primereact/checkbox";


export default function App() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4 text-red-400">PrimeReact + Tailwind Test</h1>
            <Button label="Tailwind Styled"   severity='info' outlined  />
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
            
        </div>
    )
}
