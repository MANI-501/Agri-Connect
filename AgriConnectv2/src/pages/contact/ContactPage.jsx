import Layout from "../../components/layout/Layout";
import "./ContactPage.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const ContactPage = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_8tkwse5', 'template_7803k3h', form.current, 'NTXQlWWBFRnbGMLmD')
            .then((response) => {
                toast.success("Message Sent !")
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                toast.error("Failed to send message !")
                console.log('FAILED...', error);
            }).finally(()=>{
                setLoading(false);
            });
    };

    const validateForm = () => {
        const { name, email, message } = form.current.elements;
        if (!name.value || !email.value || !message.value) {
            toast.error('All fields are required');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendEmail(e);
        }
    };
    return (
        <Layout>
            <section id='contact' className="min-h-screen flex justify-center items-center">
                <div className='w-full max-w-md bg-orange-50 px-8 py-6 border border-orange-100 rounded-xl shadow-md'>
                    <h5 className="text-center text-2xl font-bold text-orange-500 mb-5">Get In Touch</h5>
                    <form ref={form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder='Your Full Name'
                            required
                            className='bg-orange-50 border border-orange-200 px-2 py-2 w-full mb-3 rounded-md outline-none placeholder-orange-200'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Your Email'
                            required
                            className='bg-orange-50 border border-orange-200 px-2 py-2 w-full mb-3 rounded-md outline-none placeholder-orange-200'
                        />
                        <textarea
                            name="message"
                            rows='7'
                            placeholder='Your Message'
                            required
                            className='bg-orange-50 border border-orange-200 px-2 py-2 w-full mb-3 rounded-md outline-none placeholder-orange-200'
                        ></textarea>
                        <button
                            type='submit'
                            className={`bg-orange-500 hover:bg-orange-600 w-full py-2 text-white text-center font-bold rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                    </form>
                </div>
            </section>
        </Layout>
    )

}

export default ContactPage;
