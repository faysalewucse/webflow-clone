import webflowWhite from "/webflowWhite.png";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="mb-5">
      <p className="font-semibold mb-3">SOCIAL</p>
      <div className="flex items-center text-xl gap-2 text-dark2">
        <img
          src={webflowWhite}
          className="w-6 opacity-40 hover:opacity-100"
          alt="site_logo"
        />
        <FaYoutube className="hover:text-white transition" />
        <FaFacebook className="hover:text-white transition" />
        <FaXTwitter className="hover:text-white transition" />
        <IoLogoInstagram className="hover:text-white transition" />
        <FaTiktok className="hover:text-white transition" />
      </div>
    </div>
  );
};

export default SocialMedia;
