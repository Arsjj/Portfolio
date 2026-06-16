"use client"

import React, { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MotionValue } from "framer-motion";

type ContactProps = {
  formX?: MotionValue<string>;
  scale?: MotionValue<number>;
  progress?: MotionValue<number>;
  innerOpacity?: MotionValue<number>;
};

import { styles } from "../../utils/styles";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { toast } from "react-hot-toast";

const Contact = ({ scale }: ContactProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const earthRef = useRef<HTMLDivElement>(null);
  const [earthVisible, setEarthVisible] = useState(false);

  useEffect(() => {
    const el = earthRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEarthVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templete = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);


    if (!form.name && !form.email && !form.message) {
      toast.error("This trick isn't working")
      setLoading(false);
      return
    }

    if (!form.name || !form.email || !form.message) {
      toast.error("Sorry there are unfilled fields")
      setLoading(false);
      return
    }

    if (
      service &&
      templete &&
      key
    ) {
      emailjs
        .send(
          service,
          templete,
          {
            from_name: form.name,
            to_name: "Arsen",
            from_email: form.email,
            to_email: "arsjj7@gmail.com",
            message: form.message,
          },
          key
        )
        .then(
          () => {
            setLoading(false);
            toast.success("Thank you. We will get back to you as soon as possible.");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            toast.error("Ahh, something went wrong. Please try again.");
          }
        );
    }
    setLoading(false);
  };


  return (
    <div
      id="contact"
      className={` flex xl:flex-row flex-col-reverse gap-10 pb-10 overflow-hidden`}
    >
      <motion.div
        style={{
          scale: scale
        }}
        // variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black/30 backdrop-blur-sm p-8 max-sm:px-4 rounded-2xl min-w-[512px] max-sm:min-w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 border border-[#ffffff14] focus:border-white/70 duration-200 text-white rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 border border-[#ffffff14] focus:border-white/70 duration-200 text-white rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 border border-[#ffffff14] focus:border-white/70 duration-200 text-white rounded-lg outline-none font-medium"
            />
          </label>

          <button
            type="submit"
            style={{ border: "1px solid #ffffff14" }}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold active:bg-white/10"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      </motion.div>
      <div
        className={`
        xl:flex-1 xl:h-auto md:h-[550px] h-[350px]
  `}
      >
        <EarthCanvas />
      </div>
      {/* </motion.div> */}
    </div >
  );
};

export default SectionWrapper(Contact, "contact");
