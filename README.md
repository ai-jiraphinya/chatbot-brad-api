# TRAVEL CHATBOT API SHOWCASE

## CODING CHALLENGE FROM SMKDEV COMMUNITY PROJECT BASED

### **LINK URL WEBSITE** : https://travel-chatbot-smkdev.netlify.app/

### Dependency That Used

#### Dependencies
1. [react](https://react.dev)
2. [react-dom](https://babeljs.io/)
3. [react-router-dom](https://reactrouter.com/en/main)

#### Development Dependencies
1. [@types/react](https://www.npmjs.com/package/@types/react)
2. [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
3. [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
4. [autoprefixer](https://www.npmjs.com/package/autoprefixer)
5. [axios](https://www.npmjs.com/package/axios)
6. [eslint](https://www.npmjs.com/package/exlint)
7. [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
8. [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
9. [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
10. [postcss](https://www.npmjs.com/package/postcss)
11. [react-icons](https://react-icons.github.io/react-icons/)
12. [react-tooltip](https://react-tooltip.com/)
13. [tailwindcss](https://tailwindcss.com)
14. [vite](https://vitejs.dev/)

### Overview of website workflow:
1. Enter the website: open a browser such as google chrome and type the url of this website: "https://travel-chatbot-smkdev.netlify.app/", then the loading screen appears until all images have been downloaded after that the website landing page can be seen
2. Press the dark mode button on the top right side to change the website theme to dark or light mode, then there is also a github button to lead to the github repository of this website project. After that, press the "Get Started" button to enter the "https://travel-chatbot-smkdev.netlify.app/chatbot" page
3. Ask Chatbot: after entering the chatbot page, you can type what you want to ask about destinations in the Bandung area in the text input field at the bottom of the website.
4. Get Answer: after you enter the value of the input in the input field, then the loading component will appear on the chatbot answer, after the loading component is complete, the answer response will appear.

### Project Structure Travel Chatbot
1. **node_modules** = all libraries and modules installed by the package manager and ready to be used in the project
2. **public** =  directory that contains a collection of images used in this project
3. **src** = contains a set of react javascript files and also css as styling.
   - **components** = directory used to store reusable react components
   - **layouts** = directory used to store reusable layouts react components
   - **pages** = directory used to store react components used as navigation pages on react-router-dom
   - **App.jsx** = is the main component that serves as a container for all other components in the application
   - **globals.css** = css file that is used as a global styling of all pages
   - **main.jsx** = is the file responsible for loading and rendering the main components of the application
4. **.env** = The files used to store environment variables are confidential such as api keys and urls, in this project repository I did not include env because that's secret. In production and hosted on netlify, I include environment variables separately from the github repository.
5. **.eslintrc.cjs** = this file is used to set linting rules, plugins, and other options used by ESLint in JavaScript projects
6. **.gitignore** = git ignore documentations for react javascript
7. **index.html** = the html file used to render the react-dom
8. **package.json** = this file contains information about the project title, description, version, scripts, and dependencies required by the project.
9. **postcss.config.js** = postcss file configuration
10. **README.md** = projects documentations
11. **tailwind.config.js** = tailwindcss file configuration
12. **vite.config.js** = vitejs file configuration
13. **yarn.lock** = this file contains information about the versions of packages in current use and the versions of dependencies required by those packages.

### Installing Modules and Running This Project
1. Check npm version for already installed
    ```
    npm --version
    ```
2. Global installing yarn for package manager
    ```
    npm install -g yarn
    ```
3. Install modules with yarn
    ```
    yarn install
    ```
4. Running this project on localhost:5173
    ```
    yarn dev
    ```
5. If you want to access with vite server in same network (example: 192.168.1.6:5173)
    ```
    yarn dev --host
    ```

### How to use

1. Open git bash or CMD for windows (I recommend git bash) or terminal (Linux OS)
2. Copy url of github repository, write this command "git clone https://github.com/KarMint26/travel-chatbot.git" in the directory that you want, for example in Documents or Downloads
2. After cloning is done, go to project directory with "cd" command, for example "cd Documents/travel-chatbot"
3. if yarn is already installed, write command "yarn install && yarn dev", but if not installed please install yarn first with command "npm install -g yarn" for globally install
4. After the vite server running on your local computer, you have already to open the browser and write url "localhost:5173" for seeing the lookup of this project

### Features and Advantages :
1. Chatbot 
    - This website can answer user questions about destinations in the Bandung area, West Java. The API used by this website is supported by SMKDEV Community.

2. Dark Mode
   - The website created has a darkmode feature to switch themes on the website or depend on the theme on your operating system. This feature can be accessed and used by pressing the dark mode button on the top navigation bar of the website.

3. Single Pages Application
    - The SPA feature on this website allows you to switch pages without having to reload the website, which is an advantage of the react framework.

4. Responsive User Interface
    - By using tailwindcss as ui frameworks, the display on this website has become a responsive display and is good on desktop, tablet, or mobile displays. 

5. Good Quality Asset Images
    - This website has image assets that have good quality, because it uses svg or vector type images.

6. Open Graph Meta
   - By using the open graph meta tag, the website can be SEO-friendly which includes a preview image when the link is shared and also the description.

7. Loading Screen
    - This website will run a loading screen when the image on this website has not been fully downloaded by the user so that when the image is finished being downloaded by the user, the website display is maximized with the downloaded image.