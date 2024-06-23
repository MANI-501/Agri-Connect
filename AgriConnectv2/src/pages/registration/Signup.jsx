/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import Layout from "../../components/layout/Layout";
import axios from 'axios';

const Signup = () => {

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",
        identificationNumber: "",
        address: "",
        mobileNumber: "",
        products: ""
    });

    // Active Tab State
    const [activeTab, setActiveTab] = useState("customer");

    // Handle Tab Click
    const handleTabClick = (role) => {
        setActiveTab(role);
        setUserSignup({ ...userSignup, role });
    };

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required");
            return;
        }
        if (activeTab === "farmer") {
            if (
                userSignup.identificationNumber === "" ||
                userSignup.address === "" ||
                userSignup.mobileNumber === "" ||
                userSignup.products === ""
            ) {
                toast.error("All Fields are required for Farmer");
                return;
            }
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                ),
                identificationNumber: userSignup.identificationNumber,
                address: userSignup.address,
                mobileNumber: userSignup.mobileNumber,
                products: userSignup.products
            };

            // create user Refrence
            const userRefrence = collection(fireDB, "user");

            // Add User Detail
            await addDoc(userRefrence, user);
            // Send Welcome Email
            sendWelcomeEmail(userSignup.email, userSignup.name, userSignup.role);

            setUserSignup({
                name: "",
                email: "",
                password: "",
                role: "customer",
                identificationNumber: "",
                address: "",
                mobileNumber: "",
                products: ""
            });

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    /**========================================================================
     *                        Send Welcome Email Function 
    *========================================================================**/

    // Ensure the frontend sends the correct payload
    const sendWelcomeEmail = (email, name, role) => {
        const roleMessage = role === "customer"
            ? "Welcome to our platform! You have successfully signed up as a customer."
            : role === "farmer"
                ? "Welcome to our platform! You have successfully signed up as a farmer."
                : "Welcome to our platform! You have successfully signed up as an admin.";

        const mailOptions = {
            from: 'msskumargaddam@gail.com', // sender address
            to: email, // receiver's email
            subject: 'Welcome to Our Platform', // Subject line
            text: roleMessage, // Email body (plain text)
            envelope: {
                from: 'msskumargaddam@gail.com', // 'Sender Name <sender@example.com>'
                to: email  // 'Recipient Name <recipient@example.com>'
            }

        };

        axios.post('http://localhost:5000/api/user/signup', { message: mailOptions })
            .then(response => {
                console.log('Email sent:', response.data);
            })
            .catch(error => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <Layout>
            <div className='flex justify-center items-center' style={{ minHeight: "600px" }}>
                {loading && <Loader />}
                {/* Login Form  */}
                <div className="login_Form bg-orange-50 px-8 py-6 border border-orange-100 rounded-xl shadow-md">

                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-orange-500 '>
                            Signup
                        </h2>
                    </div>

                    {/* Tabs  */}
                    <div className="mb-5 flex justify-center">
                        <button
                            className={`px-4 py-2 mx-1 rounded ${activeTab === "customer" ? "bg-orange-500 text-white" : "bg-orange-200 text-orange-500"}`}
                            onClick={() => handleTabClick("customer")}
                        >
                            Customer
                        </button>
                        <button
                            className={`px-4 py-2 mx-1 rounded ${activeTab === "farmer" ? "bg-orange-500 text-white" : "bg-orange-200 text-orange-500"}`}
                            onClick={() => handleTabClick("farmer")}
                        >
                            Farmer
                        </button>
                        <button
                            className={`px-4 py-2 mx-1 rounded ${activeTab === "admin" ? "bg-orange-500 text-white" : "bg-orange-200 text-orange-500"}`}
                            onClick={() => handleTabClick("admin")}
                        >
                            Admin
                        </button>
                    </div>

                    {/* Input One  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Full Name'
                            value={userSignup.name}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    name: e.target.value
                                });
                            }}
                            className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200'
                        />
                    </div>

                    {/* Input Two  */}
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder='Email Address'
                            value={userSignup.email}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    email: e.target.value
                                });
                            }}
                            className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200'
                        />
                    </div>

                    {/* Input Three  */}
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder='Password'
                            value={userSignup.password}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    password: e.target.value
                                });
                            }}
                            className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200'
                        />
                    </div>

                    {activeTab === "farmer" && (
                        <>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Identification Number'
                                    value={userSignup.identificationNumber}
                                    onChange={(e) => {
                                        setUserSignup({
                                            ...userSignup,
                                            identificationNumber: e.target.value
                                        });
                                    }}
                                    className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200'
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Address'
                                    value={userSignup.address}
                                    onChange={(e) => {
                                        setUserSignup({
                                            ...userSignup,
                                            address: e.target.value
                                        });
                                    }}
                                    className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200'
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Mobile Number'
                                    value={userSignup.mobileNumber}
                                    onChange={(e) => {
                                        setUserSignup({
                                            ...userSignup,
                                            mobileNumber: e.target.value
                                        });
                                    }}
                                    className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200'
                                />
                            </div>
                            <div className="mb-5">
                                <textarea
                                    placeholder='Products'
                                    value={userSignup.products}
                                    onChange={(e) => {
                                        setUserSignup({
                                            ...userSignup,
                                            products: e.target.value
                                        });
                                    }}
                                    className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200 h-24'
                                />
                            </div>
                        </>
                    )}

                    {/* Signup Button  */}
                    <div className="mb-5">
                        <button
                            type='button'
                            onClick={userSignupFunction}
                            className='bg-orange-500 hover:bg-orange-600 w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Signup
                        </button>
                    </div>

                    <div>
                        <h2 className='text-black'>Have an account <Link className=' text-orange-500 font-bold' to={'/login'}>Login</Link></h2>
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default Signup;
