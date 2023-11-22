import React from "react";
import { Link } from "react-router-dom";
import Icon from "/icon-chatbot.svg";
import {
  BsMoonStarsFill,
  BsSunFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidSend, BiSolidBot, BiSolidUser } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import ImageHero from "/landing-hero.svg";
import CardLink from "../components/CardLink";
import axios from "axios";

const ChatBot = () => {
  const [toggleDark, setToggleDark] = React.useState(false); // State use to manipulation element and darkmode
  const [sideBar, setSideBar] = React.useState(false); // State use for sidebar animation slide
  const [prompt, setPrompt] = React.useState(""); // State for input field
  const [nextId, setNextId] = React.useState(2); // State for id
  const [loading, setLoading] = React.useState(true); // State for loading
  const [error, setError] = React.useState(false); // State for error response
  const [errMessage, setErrorMessage] = React.useState(""); // state for value of error message
  const [listChat, setListChat] = React.useState([
    // State to list of chat
    {
      id: 1,
      type: "bot",
      prompt: "Hai!, Selamat Datang di TRAVBOT. ada yang bisa dibantu?",
    },
  ]);

  const formatApiResponse = (apiResponse) => {
    // Function for formatted response from API
    const formattedResponse = [];
    const categories = apiResponse.match(/(?<=\* )(.*)(?=\n)/g);

    if (categories) {
      categories.forEach((category) => {
        const categoryName = category.trim();
        const destinations = apiResponse
          .split(category)
          .pop()
          .split("\n")
          .filter((destination) => destination.trim() !== "");

        formattedResponse.push({
          category: categoryName,
          destinations: destinations.map((destination) => destination.trim()),
        });
      });
    }

    return formattedResponse;
  };

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

  const getResponseFromAPI = async (prompts) => {
    // function to get response from api
    const api_key =
      import.meta.env.API_KEY || "13389390-dcd1-4eec-ba31-56043782f197";
    const api_url =
      import.meta.env.API_URL || "https://api.sinawardi.com/askme";
    const dataPrompt = {
      prompt: `${prompts}`,
    };
    const dataPayloads = JSON.stringify(dataPrompt);

    const options = {
      method: "POST",
      url: api_url,
      headers: {
        "apikey": `${api_key}`,
        "Content-Type": "application/json",
      },
      data: dataPayloads,
    };

    const dataFromAPI = await axios.request(options);

    return dataFromAPI.data.response;
  };

  const handleResponse = (res) => {
    // Function to handle response from handle submit from user
    const newChat = {
      id: nextId,
      type: "bot",
      prompt: formatApiResponse(res),
    };
    setListChat((chat) => [...chat, newChat]);
    setNextId((prevId) => (prevId += 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newChat = {
      id: nextId,
      type: "user",
      prompt: prompt,
    };
    setListChat((chat) => [...chat, newChat]);
    setPrompt("");
    setNextId((prevId) => (prevId += 1));

    const getData = getResponseFromAPI(prompt);

    getData
      .then((data) => {
        handleResponse(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err.message);
        handleResponse(`Error`);
        setErrorMessage(`Error: ${err.message}`);
        setError(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });

    // Contoh request jika berhasil
    // const dataFromAPI =
    //   "Destinasi wisata di Kota Bandung sangat beragam, mulai dari wisata alam, wisata sejarah, hingga wisata kuliner. Berikut beberapa destinasi wisata yang bisa kamu kunjungi di Kota Bandung:\n\n* Wisata Alam\n    * Kawah Putih\n    * Gunung Tangkuban Perahu\n    * Tebing Keraton\n    * Situ Patenggang\n    * Lembang Wonderland\n* Wisata Sejarah\n    * Gedung Sate\n    * Museum Geologi\n    * Museum Konferensi Asia Afrika\n    * Rumah Tangga Presiden Soekarno\n* Wisata Kuliner\n    * Mie Kocok Bandung\n    * Sate Maranggi\n    * Nasi Goreng Babat Cihapit\n    * Batagor Kingsley\n    * Tahu Gejrot";
  };

  return (
    <React.Fragment>
      <div className='flex justify-between items-center'>
        <div
          className={`sidebar fixed z-[999] ${
            !sideBar ? "-translate-x-[400px]" : "translate-x-0"
          } lg:translate-x-0 left-0 top-0 lg:translate-y-0 flex justify-between items-center flex-col px-6 lg:px-10 py-8 h-screen dark:bg-slate-700 bg-slate-800 border-r-2 dark:border-slate-500 border-slate-200 transition text-white`}
        >
          <div className='title-sidebar'>
            <div className='nav-brand flex justify-center items-center gap-2 sm:gap-5'>
              <img src={Icon} alt='icon' className='w-10 sm:w-[3rem]' />
              <Link
                to='/'
                className='text-lg sm:text-2xl font-semibold uppercase text-white'
              >
                Trav
                <span className='text_orange'>bot</span>
              </Link>
              <IoCloseSharp
                className='text-2xl cursor-pointer lg:hidden'
                onClick={() => setSideBar((prev) => !prev)}
              />
            </div>
          </div>
          <div className='content flex justify-center items-center flex-col gap-3 -translate-y-[3rem] lg:translate-y-0'>
            <img src={ImageHero} alt='hero' className='w-44' />
            <p className='text-sm font-semibold'>Developer Social Media</p>
            <CardLink
              LinkUrl='https://github.com/KarMint26'
              Icon={<BsGithub />}
              CardName='Github'
            />
            <CardLink
              LinkUrl='https://www.linkedin.com/in/karel-trisnanto-utomo-8564ba259'
              Icon={<BsLinkedin />}
              CardName='LinkedIn'
            />
            <CardLink
              LinkUrl='https://instagram.com/foxy_foxh'
              Icon={<BsInstagram />}
              CardName='Instagram'
            />
          </div>
          <footer className='text-xs font-bold -translate-y-[2.5rem] lg:translate-y-0'>
            Supported By{" "}
            <Link to='https://smk.dev' target='_blank' className='text_orange'>
              SMKDEV
            </Link>
          </footer>
        </div>
        {/* Helper to Centering topbar */}
        <div
          className={`sidebar fixed ${
            !sideBar ? "-translate-x-[400px]" : "translate-x-0"
          } lg:translate-x-0 left-0 top-0 lg:translate-y-0 lg:relative hidden lg:flex justify-between items-center flex-col px-6 lg:px-[3.4rem] py-8 h-screen dark:bg-slate-700 bg-slate-800 border-r-2 dark:border-slate-500 border-slate-200 transition text-white`}
        >
          <div className='title-sidebar'>
            <div className='nav-brand flex justify-center items-center gap-2 sm:gap-5'>
              <img src={Icon} alt='icon' className='w-10 sm:w-[3rem]' />
              <Link
                to='/'
                className='text-lg sm:text-2xl font-semibold uppercase text-white'
              >
                Trav
                <span className='text_orange'>bot</span>
              </Link>
              <IoCloseSharp
                className='text-2xl cursor-pointer lg:hidden'
                onClick={() => setSideBar((prev) => !prev)}
              />
            </div>
          </div>
          <div className='content flex justify-center items-center flex-col gap-3 -translate-y-[3rem] lg:translate-y-0'>
            <img src={ImageHero} alt='hero' className='w-44' />
            <p className='text-sm font-semibold'>Developer Social Media</p>
            <CardLink
              LinkUrl='https://github.com/KarMint26'
              Icon={<BsGithub />}
              CardName='Github'
            />
            <CardLink
              LinkUrl='https://www.linkedin.com/in/karel-trisnanto-utomo-8564ba259'
              Icon={<BsLinkedin />}
              CardName='LinkedIn'
            />
            <CardLink
              LinkUrl='https://instagram.com/foxy_foxh'
              Icon={<BsInstagram />}
              CardName='Instagram'
            />
          </div>
          <footer className='text-xs font-bold -translate-y-[2.5rem] lg:translate-y-0'>
            Supported By{" "}
            <Link to='https://smk.dev' target='_blank' className='text_orange'>
              SMKDEV
            </Link>
          </footer>
        </div>
        <div className='chatbot-field self-start w-full'>
          <div className='top-bar sticky top-0 z-[99] flex justify-between items-center py-4 px-5 sm:py-5 sm:px-6 dark:bg-slate-700 bg-white shadow'>
            <div className='left-side flex justify-center items-center gap-4'>
              <FaBars
                className='text-2xl cursor-pointer lg:hidden'
                onClick={() => setSideBar((prev) => !prev)}
              />
              <Link
                to='/'
                className='nav-brand flex justify-center items-center gap-2 sm:gap-5'
              >
                <h1 className='text-lg sm:text-xl font-semibold uppercase'>
                  <span className='sm:inline-block hidden'>Hi! Welcome to</span>{" "}
                  Trav
                  <span className='text_orange'>bot</span>
                </h1>
              </Link>
            </div>
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
          </div>
          <div className='Field-Input px-8 sm:px-20 py-12 pb-40 flex justify-center items-start flex-col'>
            <div className='list-chat flex justify-center items-start gap-6 flex-col'>
              {listChat.map((chat) => (
                <>
                  {chat.type === "bot" ? (
                    <>
                      <div
                        key={chat.id}
                        className='box-chat p-3 rounded-lg flex justify-start items-center gap-3 bg-slate-100 dark:bg-slate-700'
                      >
                        <div className='icon-box self-start p-2 flex justify-center items-center rounded-lg bg-rose-500'>
                          <BiSolidBot className='text-white text-2xl' />
                        </div>
                        <div className='chat-field relative top-0'>
                          <>
                            {Array.isArray(chat.prompt) ? (
                              <>
                                {loading && chat.id === listChat.length - 1 ? (
                                  <>
                                    <div className='flex justify-center item-center gap-2'>
                                      <div className='custom-loader'></div>
                                      <h1 className='leading-[35px]'>
                                        Thinking...
                                      </h1>
                                    </div>
                                  </>
                                ) : error ? (
                                  <>
                                    <h1>{errMessage}</h1>
                                  </>
                                ) : (
                                  <>
                                    {chat.prompt.map((category, index) => (
                                      <div key={index} className='mb-4'>
                                        <p className='text-lg font-semibold'>
                                          {category.category}
                                        </p>
                                        <ul>
                                          {category.destinations.map(
                                            (destination, subIndex) => (
                                              <li key={subIndex}>
                                                {destination}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ))}
                                  </>
                                )}
                              </>
                            ) : (
                              chat.prompt
                            )}
                          </>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        key={chat.id}
                        className='box-chat p-3 rounded-lg flex justify-start items-center gap-3'
                      >
                        <div className='icon-box self-start p-2 flex justify-center items-center rounded-lg bg-amber-500'>
                          <BiSolidUser className='text-white text-2xl' />
                        </div>
                        <div className='chat-field'>{chat.prompt}</div>
                      </div>
                    </>
                  )}
                </>
              ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className='prompt-field dark:bg-black bg-white transition duration-300 fixed bottom-0 w-[84%] sm:w-[79.5%] lg:w-[73%] h-28 z[88]'
            >
              <input
                type='text'
                name='prompt'
                id='prompt'
                placeholder='Your message'
                className='w-full px-5 py-3 pr-10 rounded-2xl outline-none text-black bg-white dark:bg-slate-800 dark:text-white ring-2 ring-slate-400 transition duration-300'
                onChange={({ target }) => setPrompt(target.value)}
                value={prompt}
                autoComplete='off'
              />
              <button
                type='submit'
                disabled={prompt.length >= 1 ? false : true}
              >
                <BiSolidSend
                  className={`absolute dark:text-white text-slate-500 right-4 ${
                    prompt.length >= 1 && "cursor-pointer"
                  } text-2xl top-3`}
                />
              </button>
              <p className='text-center translate-y-7 text-[0.65rem] sm:text-xs'>
                Chatbot for tourist destinations in Bandung
              </p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatBot;
