import { useState } from 'react'
function FormComponent() {
    const [inputValue, setInputValue,] = useState('content');
    const [selectValue, setSelectValue] = useState('');
    const [formData, setFormData] = useState('');
    const handleSubmit = () => {
        e.preventDefault();
        alert(`Submitted: ${formData}`);
    };
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <label className='text-lg font-bold ' for="Input">Enter Name:</label>
            <input className='border border-2 border-black border-solid  bg-transparent text-white' id="Input" type='text' value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
            <p>ValueName::{inputValue}</p><br></br>


            <label for="language">Select language</label><br></br>
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)} name="language" id="language">
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
                <option value="chinese">Chinese</option>
                <option value="hindi">Hindi</option>
            </select>
            <p>{selectValue}</p>
            <input type='text' value={formData} onClick={(e) => setFormData(e.target.value)} />
            <button onClick={handleSubmit} className='bg-blue-500  text-white p-2 rounded-md border=\'>Submit</button>
            <p>{}</p>

        </div>
    );

}


export default FormComponent;