import { useState } from 'react';

function Form2() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${username}, Email: ${email}`);
    };

    return (
        <div className='max-w-md mx-auto p-4 bg-white rounded shadow-md'>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <label className='block text-sm font-medium text-grey-700'>
                    Username
                    <input
                        type='text'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className='mt-1 block w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-indigo-500 focus:border-indigo-500'
                    />
                </label>
                <label>
                    Email
                    <input
                        type='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className='mt-1 text-black bg-red-700 block w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-indigo-500 focus:border-indigo-500'
                    />
                </label>
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Submit
                </button>
            </form>
        </div>
    );
}

export default Form2;