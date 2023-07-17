import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const message = `
          Name: ${values.name}
          Email: ${values.email}
          Message: ${values.message}
        `;
        
        await axios.post('https://formsubmit.co/f12b5f4df06a24acdacf112f931219ca', { message });
        resetForm();
        alert('Thank you for your message!');
      } catch (error) {
        console.error('An error occurred while submitting the form:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && <div className="error">{formik.errors.message}</div>}
        </div>
        <div className="form-group">
          
            <button type="submit" disabled={formik.isSubmitting}>
              Submit
            </button>
          
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
