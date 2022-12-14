import React from 'react';
import { useState } from "react";
import forCall from '../assets/call.png'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function Contact() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const submitEmail = (e) => {
        e.preventDefault();
    }
    return (
        <div className='mt-12'>
            <form onSubmit={(e) => { submitEmail(e) }} className="bg-white rounded px-8 pt-6 pb-8 mb-4 max-w-md min-w-xs mx-auto sm:max-w-xl xs:w-full">
                <div className="mx-4">
                    <label
                        className="block text-gray-700 text-sm text-left font-bold mb-2"
                        htmlFor="fName"
                    >
                        First Name
                    </label>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        id="fName"
                        autoComplete='new'
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        type="text"
                    />
                </div>
                <div className="mx-4">
                    <label
                        className="block text-gray-700 text-sm text-left font-bold mb-2"
                        htmlFor="lName"
                    >
                        Last Name
                    </label>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        id="lName"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        type="text"
                    />
                </div>
                <div className="mx-4">
                    <label
                        className="block text-gray-700 text-sm text-left font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="email"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder="jane@example.com"
                    />
                </div>
                <div className="mx-4">
                    <label
                        className="block text-gray-700 text-sm text-left font-bold mb-2"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        id="message"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        type="text"
                    />
                </div>
                <div className="mx-4 my-4">
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-50 appearance-none leading-normal"
                        id="submit"
                        type="submit"
                    />
                </div>
                <div className="relative flex py-5 items-center ml-4">
                    <span><img src={forCall} className='h-8 w-15' /></span>
                    <div className='ml-3'>+41 76 736 08 52</div>
                </div>
            </form>
            <div className='bg-black p-6 shadow-xl'>
                <div className='flex content-center justify-center'>
                <SocialIcon style={{width:40,height:40,borderRadius:20}} fgColor="white" bgColor url="https://twitter.com" />
                <SocialIcon style={{width:40,height:40,borderRadius:20}} fgColor="white" bgColor url="https://facebook.com" />
                <SocialIcon style={{width:40,height:40,borderRadius:20}} fgColor="white" bgColor url="https://instagram.com" />
                <SocialIcon style={{width:40,height:40,borderRadius:20}} fgColor="white" bgColor url="https://linkedin.com" />
                </div>
                <div className='text-white tracking-tighter mt-3'>
                    <span className='mx-2 text-lg cursor-pointer'>Terms of use.</span>
                    <span className='mx-2 text-lg cursor-pointer'>Privacy policy</span>
                </div>
            </div>
        </div>
    )
}

export default Contact