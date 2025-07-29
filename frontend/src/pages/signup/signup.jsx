import { useState } from 'react';
import './Signup.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Signup({ onToggle }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    // handle on change

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await axios.post('http://localhost:3000/signup', { email: formData.email, password: formData.password, firstname: formData.firstName, lastname: formData.lastName }, {
            headers: {
                'Content-Type': 'application/json',

            },
        })
        try {
            if (res) {
                setTimeout(() => {
                    console.log(res);
                    setFormData({
                        email: '',
                        password: '',
                        firstName: '',
                        lastName: '',
                        confirmPassword: '',
                    })
                    navigate('/login');
                       Swal.fire({
                                title: "Good job!",
                                text: "You just created an account!",
                                icon: "success"
                              });
                }, 2000)
            }
        }
        catch (err) {
            setIsLoading(false);
            console.log(err)
        }


        // Simulate API call

    };



    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden ">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full opacity-20"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
            <div className="signup-container bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="signup-header">
                    <h2>Create Account</h2>
                    <p>Join us today and get started</p>
                </div>

                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="name-row">
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`form-input ${formData.firstName ? 'has-value' : ''}`}
                                required
                            />
                            <label className="form-label">First Name</label>

                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`form-input ${formData.lastName ? 'has-value' : ''}`}
                                required
                            />
                            <label className="form-label">Last Name</label>

                        </div>
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${formData.email ? 'has-value' : ''}`}
                            required
                        />
                        <label className="form-label">Email Address</label>

                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`form-input ${formData.password ? 'has-value' : ''}`}
                            required
                        />
                        <label className="form-label">Password</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`form-input ${formData.confirmPassword ? 'has-value' : ''}`}
                            required
                        />
                        <label className="form-label">Confirm Password</label>

                    </div>

                    <div className="terms-group">
                        <label className="checkbox-container">
                            <input type="checkbox" required />
                            <span className="checkmark"></span>
                            I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
                        </label>
                    </div>

                    <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <span className="spinner"></span>
                                Creating Account...
                            </>
                        ) : (
                            'Create Account'
                        )}
                    </button>
                </form>

                <div className="form-footer">
                    <p>Already have an account?
                        <Link to={'/login'} className="toggle-btn">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;