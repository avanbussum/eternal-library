import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [submit, setSubmit] = useState("Submit");
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs.sendForm('service_od6nyub', 'template_g6s540c', currentForm, 'RJKa39PgA97jKYKW1')
      .then((result) => {
        console.log(result.text);
        setSubmit("Sent");
        setIsSent(true);  // Disable the button and show "Sent"
        currentForm.reset();  // Clear the form
      }, (error) => {
        console.log(error.text);
        setSubmit("Error! Try again");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h1 className='font-bold text-4xl flex items-center justify-center mb-6'>Contact Me</h1>
      <div className="grid gap-8 mb-6 mx-10 w-auto bg-gradient-to-r from-[#e9e8e5] to-[#dedbdb] rounded-lg p-5">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Name</label>
          <input type="text" name="user_name" className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required/>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400 ">Email</label>
          <input type="email" name="user_email" className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required/>
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
          <textarea name="message" className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write your thoughts here..."></textarea>
        </div>
        <button
          type="submit"
          disabled={isSent}
          className={`text-white ${isSent ? 'bg-green-500 hover:bg-green-500' : 'bg-[#d4af37]'} hover:bg-[#b19331] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-4 text-center`}
        >
          {submit}
        </button>
      </div>
    </form>
  );
}

export default Contact;
