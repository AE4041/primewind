import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import {Button} from 'primereact/button'
import "./style.css"

export default function App() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="p-6">
            <Button label="Tailwind Styled"  severity="success"  />
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
