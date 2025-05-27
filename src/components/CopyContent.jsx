import { useState } from "react";
import PopupContent from "./PopupContent";

const CopyContent = () => {

    const [input,setInput] = useState("")
    const [copied, setCopied] = useState(false)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    function handleClick(){

        navigator.clipboard.writeText(input).then(() => {
                
                setCopied(true)
                setTimeout(() => setCopied(false),2000);
            }
        )
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} className="mt-2 border-1 bg-gray-300"/>
            <button 
                className="ml-2 py-0.5 px-1.5 bg-gray-300 rounded-[5px] hover:bg-gray-400 active:bg-gray-500"
                onClick={handleClick}>
                Copy
            </button>
            <PopupContent copied={copied}/>
        </div>
    );
}

export default CopyContent;