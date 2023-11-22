import LoadingScreenImg from "/loading.gif";

export default function LoadingScreen() {
  return (
    <div className='flex justify-center items-center w-screen h-screen overflow-hidden fixed top-0 left-0 bg-white dark:bg-black z-[999999]'>
      <img src={LoadingScreenImg} alt='loading' />
    </div>
  );
}
