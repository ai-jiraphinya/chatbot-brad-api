import React from "react";
import { BsMoonStarsFill, BsSunFill, BsGithub } from "react-icons/bs";
import Icon from "/icon-chatbot.svg";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleDark, setToggleDark] = React.useState(false); // State use to manipulation element and darkmode

  React.useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setToggleDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setToggleDark(false);
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, []);

  return (
    <React.Fragment>
      <nav className='nav_style'>
        <Link to='/' className='nav-brand flex justify-center items-center gap-2 sm:gap-5'>
          <img src={Icon} alt='icon' className='w-10 sm:w-[3rem]' />
          <h1 className='text-lg sm:text-2xl font-semibold uppercase'>
            Trav
            <span className='text_orange'>
              bot
            </span>
          </h1>
        </Link>
        <div className='list-nav flex justify-center items-center gap-4 sm:gap-8'>
          <button
            className='dark-mode text-xl sm:text-2xl cursor-pointer'
            onClick={() => {
              setToggleDark((prev) => !prev);
              document.documentElement.classList.toggle("dark");
            }}
          >
            {!toggleDark ? (
              <>
                <BsSunFill />
              </>
            ) : (
              <>
                <BsMoonStarsFill />
              </>
            )}
          </button>
          <Tooltip
            anchorSelect='.dark-mode'
            place='bottom'
            style={{
              backgroundColor: !toggleDark ? "#000" : "rgb(100, 116, 139)",
              borderRadius: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            DarkMode Toggle
          </Tooltip>
          <button
            onClick={() =>
              window.open("https://github.com/KarMint26/travel-chatbot")
            }
            className='github_btn'
          >
            <BsGithub />
            Github
          </button>
          <Tooltip
            anchorSelect='.github_btn'
            place='bottom'
            style={{
              backgroundColor: !toggleDark ? "#000" : "rgb(100, 116, 139)",
              borderRadius: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            Github Repository
          </Tooltip>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
