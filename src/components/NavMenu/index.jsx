import Link from "next/link";
import { BsCodeSquare } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { PiCompassTool } from "react-icons/pi";

const NavMenu = () => {
  return (
    <>
      <div className="lg:hidden btm-nav bg-white">
        <Link href="/">
          <button>
            <HiOutlineHome className="text-gray-700 w-6 h-6" />
          </button>
        </Link>
        <Link href="/about">
          <button>
            <BsInfoCircle className="text-gray-700 w-5 h-5" />
          </button>
        </Link>
        <Link href="/skills">
          <button>
            <BsCodeSquare className="text-gray-700 w-5 h-5" />
          </button>
        </Link>
        <Link href="/projects">
          <button>
            <PiCompassTool className="text-gray-700 w-6 h-6" />
          </button>
        </Link>
        <Link href="/blogs">
          <button>
            <GoProjectRoadmap className="text-gray-700 w-6 h-6" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavMenu;
