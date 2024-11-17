import React, { useState } from 'react';

function AyoForm() {
    const [formData, setFormData] = useState({
        names: [],
        ages: [],
        bios: [],
        subscribe: false,
        gender: '',
        country: '',
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleArrayChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: [...prevData[field], value],
        }));
    };

    const handleOtherChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 border border-gray-300 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Complete Form</h2>

                {/* Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                        Add Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter a name"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleArrayChange('names', e.target.value);
                                e.target.value = ''; // Clear input after adding
                            }
                        }}
                        className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-200"
                    />
                    <p className="text-gray-500 text-sm">Press Enter to add multiple names.</p>
                </div>

                {/* Age Input */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-gray-700">
                        Add Age:
                    </label>
                    <input
                        id="age"
                        type="number"
                        placeholder="Enter an age"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleArrayChange('ages', e.target.value);
                                e.target.value = ''; // Clear input after adding
                            }
                        }}
                        className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-200"
                    />
                    <p className="text-gray-500 text-sm">Press Enter to add multiple ages.</p>
                </div>

                {/* Bio Input */}
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-gray-700">
                        Add Bio:
                    </label>
                    <textarea
                        id="bio"
                        placeholder="Enter a bio"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleArrayChange('bios', e.target.value);
                                e.target.value = ''; // Clear input after adding
                            }
                        }}
                        className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-200"
                    />
                    <p className="text-gray-500 text-sm">Press Enter to add multiple bios.</p>
                </div>

                {/* Checkbox */}
                <div className="mb-4 flex items-center">
                    <input
                        id="subscribe"
                        type="checkbox"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleOtherChange}
                        className="mr-2"
                    />
                    <label htmlFor="subscribe" className="text-gray-700">
                        Subscribe to Newsletter
                    </label>
                </div>

                {/* Radio Buttons */}
                <div className="mb-4">
                    <label className="block text-gray-700">Gender:</label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleOtherChange}
                                className="mr-1"
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleOtherChange}
                                className="mr-1"
                            />
                            Female
                        </label>
                    </div>
                </div>

                {/* Select Input */}
                <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700">
                        Country:
                    </label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleOtherChange}
                        className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-200"
                    >
                        <option value="">Select your country</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                        <option value="india">India</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>

            {/* Display Submitted Data */}
            {submittedData && (
                <div className="mt-6 bg-green-100 text-green-800 p-4 rounded max-w-md w-full">
                    <h3 className="font-semibold">Submitted Information:</h3>
                    <p><strong>Names:</strong> {submittedData.names.join(', ')}</p>
                    <p><strong>Ages:</strong> {submittedData.ages.join(', ')}</p>
                    <p><strong>Bios:</strong> {submittedData.bios.join('; ')}</p>
                    <p><strong>Subscribed:</strong> {submittedData.subscribe ? 'Yes' : 'No'}</p>
                    <p><strong>Gender:</strong> {submittedData.gender}</p>
                    <p><strong>Country:</strong> {submittedData.country}</p>
                </div>
            )}
        </div>
    );
}

export default AyoForm;
