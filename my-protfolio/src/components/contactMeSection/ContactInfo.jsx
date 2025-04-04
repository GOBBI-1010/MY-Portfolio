import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <SingleInfo text="dgobi2002@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7708918912" Image={FiPhone} />
      <SingleInfo text="TRICHY, TAMILNADU
INDIA" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
