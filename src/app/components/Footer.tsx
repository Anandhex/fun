interface Props {}

import Image from "next/image";
import linkdin from "@/app/assets/icons/linkdin.svg";
import github from "@/app/assets/icons/github.svg";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer: React.FC<Props> = () => {
  const currentDate = new Date();

  return (
    <footer className="flex flex-wrap justify-center  p-4 xl:p-8 text-bg items-end gap-y-4 md:justify-between bg-primary ">
      <div className="text-secondary">
        <ul className="flex gap-4">
          <li>
            <a
              className="flex items-end gap-4"
              href="https://www.linkedin.com/in/anand-patil-67a7b5169/"
            >
              <Image className="block" src={linkdin} alt="linkdin" />
              <span className="block">Linkdin</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-end gap-4"
              href="https://github.com/Anandhex"
            >
              <Image className="block" src={github} alt="github" />
              <span className="block">Github</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-secondary">
          <a
            href="https://drive.google.com/file/d/1rZCkw-VSL5AbYSO1vwA3NUttA9GP6bNR/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Résumé
          </a>
        </div>
        <p className="text-secondary flex items-center">
          © Anand Patil 2024{" "}
          {currentDate.getFullYear() != 2024
            ? ` - ${currentDate.getFullYear()}`
            : ""}
        </p>
        <ScrollToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
