'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';

/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param {ContactProps}
 */
const Contact = ({ slice }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('EVENt', e);
    const formSpreeURL = 'https://formspree.io/f/mdoqzqlw';

    try {
      const response = await fetch(formSpreeURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowModal(true);
        console.log('form submitted');
      } else {
        console.error('Error submitting');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.href = '/';
  };

  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="lg:pt-6 h-screen flex md:flex-row flex-col md:items-center justify-center lg:gap-[10rem] gap-[2rem]  mx-auto sm:px-[2rem] lg:px-0"
      >
        <div className="pl-[1rem] pt-[3rem] md:pt-[0rem]">
          <div className="md:pb-12">
            <div className="md:pb-8">
              <h1 className="font-semibold md:text-[1.5rem] text-[1rem]">
                {slice.primary.address_heading}
              </h1>
              <h3 className="font-semibold md:text-[1.5rem] text-[1rem]">
                {slice.primary.address}
              </h3>
            </div>
            <h1 className="font-semibold md:text-[1.5rem] text-[1rem]">
              {slice.primary.contact_heading}
            </h1>
            <p className="font-regular md:text-[1.5rem] text-[1rem]">
              {slice.primary.whatsapp}
            </p>
          </div>
          <h1 className="font-semibold text-[1rem]">
            {slice.primary.contact_us}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="md:px-0 pr-[2rem] pl-[1rem]">
          <div className="pb-8 text-left">
            <h1 className="font-semibold md:text-4xl text-2xl">
              {slice.primary.heading}
            </h1>
          </div>
          <div className="">
            <div className="flex space-x-4">
              <div className="mb-4 flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-600"
                >
                  {slice.primary.first_name}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4 flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-600"
                >
                  {slice.primary.last_name}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                {slice.primary.email}
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="comments"
                className="block text-sm font-semibold text-gray-600"
              >
                {slice.primary.comments}
              </label>
              <input
                type="text"
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#B7C8B5] text-white px-6 py-2 rounded-sm hover:bg-[#6F846C] hover:ease-in-out duration-300"
            >
              {slice.primary.submit}
            </button>
          </div>
        </form>
      </section>
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
};

export default Contact;
