import ContactItem from "./ContactItem";
import { BsTelegram, BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

let data = [
  {
    icon: BsTelephoneFill,
    text: "+99893-595-66-64",
  },
  {
    icon: BsTelegram,
    text: "https://t.me/JalolovManguberdi",
  },
  {
    icon: MdEmail,
    text: "jalolovmanguberdi00@gmail.com",
  },
  {
    icon: MdLocationOn,
    text: "Tashkent, Uzbekistan",
  },
];
const Contact = () => {
  return (
    <div className="contact bg-dark py-4 text-light">
      <div className="container-lg">
        <h2 className="text-center">CONTACT</h2>
        <div className="contact-items row">
          {data.map((item, key) => (
            <ContactItem key={key} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
