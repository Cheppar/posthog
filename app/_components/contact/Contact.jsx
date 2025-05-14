"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Static content for the contact page
const staticContent = {
  tag: "Get in Touch",
  mainTitle: "Contact Us",
  description: "We’re here to help! Fill out the form below, and our team will get back to you as soon as possible.",
};

// Animation variants for Typeform-like feel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#f59e0b", // Slightly darker amber on hover
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    problem: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., send to API or email service)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", problem: "", subject: "", message: "" });
  };

  // Helper to check if a field is filled
  const isNameFilled = formData.name.trim().length > 0;
  const isProblemSelected = formData.problem !== "";
  const isSubjectFilled = formData.subject.trim().length > 0;
  const isMessageFilled = formData.message.trim().length > 0;

  return (
    <div>
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative min-h-screen">
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-opacity-20 bg-black"></div>

        <div className="container max-w-3xl mx-auto relative z-10 px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Tag */}
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1 mb-4 text-sm font-semibold bg-amber-500 text-gray-900 rounded-full"
            >
              {staticContent.tag}
            </motion.span>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-4"
            >
              {staticContent.mainTitle}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-8"
            >
              {staticContent.description}
            </motion.p>
          </motion.div>

          {/* Form with progressive disclosure */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence>
              {/* Name Input */}
              <motion.div
                key="name"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  placeholder="Enter your name"
                  autoFocus
                />
              </motion.div>

              {/* Problem Dropdown (shown only if name is filled) */}
              {isNameFilled && (
                <motion.div
                  key="problem"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <label
                    htmlFor="problem"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    What’s the issue?
                  </label>
                  <select
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="billing">Billing</option>
                    <option value="orders">Orders</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="others">Others</option>
                  </select>
                </motion.div>
              )}

              {/* Subject Input (shown only if problem is selected) */}
              {isProblemSelected && (
                <motion.div
                  key="subject"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                    placeholder="Enter the subject of your message"
                  />
                </motion.div>
              )}

              {/* Message Textarea (shown only if subject is filled) */}
              {isSubjectFilled && (
                <motion.div
                  key="message"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Explain Your Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                    placeholder="Describe your issue in detail"
                  />
                </motion.div>
              )}

              {/* Submit Button (shown only if message is filled) */}
              {isMessageFilled && (
                <motion.div
                  key="submit"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.button
                    type="submit"
                    variants={buttonVariants}
                    whileHover="hover"
                    className="w-full px-8 py-3 text-base font-medium bg-amber-500 text-gray-900 rounded-lg transition-colors"
                  >
                    Submit
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;