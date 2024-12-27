import React, { useState } from 'react';
import Layout from '../components/navbar/layout/Layout';

const AddBlog = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        subtitle: '',
        category: '',
        description: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <Layout>
            <div className="mt-6">
                <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                    <div>
                        <h1 className="text-gray-800 text-3xl font-extrabold">CREATE BLOG</h1>
                        <div className="mt-12">
                            <h2 className="text-gray-800 text-base font-bold">Email</h2>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        {/* SVG Email Icon */}
                                    </div>
                                    <span className="text-[#007bff] text-sm ml-4">
                                        <small className="block">Mail</small>
                                        <strong>rainewson36@gmail.com</strong>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                            required
                        />
                        <input
                            name="title"
                            type="text"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                        />
                        <input
                            name="subtitle"
                            type="text"
                            placeholder="Subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                        />
                        <input
                            name="category"
                            type="text"
                            placeholder="Category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                        />
                        <input
                            name="file"
                            type="file"
                            onChange={handleChange}
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                        />
                        <textarea
                            name="description"
                            placeholder="Description"
                            rows="6"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default AddBlog;
