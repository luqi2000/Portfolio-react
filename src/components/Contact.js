import React, { useState } from "react"; // Importa useState
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    // Aggiungi uno stato per i dati del form
    name: "",
    email: "",
    message: ""
  });

  const sendEmail = e => {
    e.preventDefault();

    const serviceID = "service_cjjuqlb";
    const templateID = "template_l0vjdcd";
    const userID = "YgXvC_S8paTXgIWsh";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(response => {
        console.log("Email inviata con successo!", response);
        // Resetta i dati del form dopo l'invio
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(error => {
        console.error("Errore nell'invio dell'email:", error);
      });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch!</h4>
              <h2 className="text-[45px] lg:text[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={sendEmail}>
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name} // Collega il valore del campo allo stato
              onChange={handleInputChange} // Aggiungi gestore per l'input
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              name="email"
              value={formData.email} // Collega il valore del campo allo stato
              onChange={handleInputChange} // Aggiungi gestore per l'input
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              value={formData.message} // Collega il valore del campo allo stato
              onChange={handleInputChange} // Aggiungi gestore per l'input
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
