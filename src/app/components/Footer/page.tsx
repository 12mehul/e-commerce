import { MdFacebook} from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600">
          <div className="container pt-9">
            <div className="mb-9 flex justify-center">
              <a href="/https://www.facebook.com/" className="mr-9 text-3xl text-neutral-800 dark:text-neutral-200">
                <MdFacebook />
              </a>
              <a href="/https://www.instagram.com/" className="mr-9 text-3xl text-neutral-800 dark:text-neutral-200">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div
            className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
            © 2023 Copyright
          </div>
        </footer>
    )
 }

  export default Footer
  