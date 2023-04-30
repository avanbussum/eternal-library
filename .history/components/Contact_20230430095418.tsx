import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [submit, setSubmit] = useState("Submit");

    const sendEmail = (e: any) => {
        e.preventDefault();
    
        const currentForm = form.current;
        // this prevents sending emails if there is no form.
        // in case currentForm cannot possibly ever be null,
        // you could alert the user or throw an Error, here
        if (currentForm == null) return;
    
        // the compiler is smart enough to know that currentForm here is of type HTMLFormElement 
        emailjs.sendForm('service_od6nyub', 'template_g6s540c', currentForm, 'RJKa39PgA97jKYKW1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          currentForm.reset();
      };
  
      return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="grid gap-6 mb-6 mx-10 w-auto bg-gradient-to-r from-[#e9e8e5] to-[#dedbdb] rounded-lg p-5">
                <h1 className='font-bold text-3xl'>Contact Me</h1>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required/>
                </div>
                
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                <button onClick={() => setSubmit("Sent")} type="submit" className="text-white bg-[#d4af37] hover:bg-[#b19331] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">{submit}</button>
            </div>
        </form>
      );
    
};

export default Contact;