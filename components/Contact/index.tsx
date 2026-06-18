"use client"

import { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { MotionValue } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { styles } from "../../utils/styles";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { GithubOutlined } from "@/icons/GithubOutlined";
import { LinkedinOutlined } from "@/icons/LinkedinOutlined";

type ContactProps = {
  formX?: MotionValue<string>;
  scale?: MotionValue<number>;
  progress?: MotionValue<number>;
  innerOpacity?: MotionValue<number>;
};

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
      className={` flex lg:flex-row flex-col-reverse lg:gap-10 py-10`}
    >
      <motion.div
        style={{
          scale: scale
        }}
        className="flex-[0.75] bg-black/30 backdrop-blur-sm p-8 max-sm:px-4 rounded-2xl min-w-[512px] max-sm:min-w-full"
      >
        <div className="flex w-full justify-between">
          <p className={styles.sectionSubText}>Get in touch</p>
          <div className=" w-fit right-0 top-0 h-full flex items-center text-[22px] gap-3 px-4">
            <Link
              href="http://github.com/Arsjj"
              target="_blank"
              className="fill-white/80 hover:fill-white/70"
              aria-label="githab link"
            >
              <GithubOutlined />
            </Link>
            <Link
              href="http://www.linkedin.com/in/arsen-abrahamyan-23269a248/"
              target="_blank"
              className="fill-white/80 hover:fill-white/70"
              aria-label="linkedin link"
            >
              <LinkedinOutlined />
            </Link>
          </div>
        </div>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-6"
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
              rows={5}
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
        xl:flex-1 xl:h-auto h-[550px] w-full
  `}
      >
        <EarthCanvas />
      </div>
    </div >
  );
};

export default SectionWrapper(Contact, "contact");
