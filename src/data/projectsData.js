import { FaPaperclip, FaCode, FaGamepad, FaBook } from 'react-icons/fa';

export const projectsData = [
    {
        id: 1,
        title: "Florist Fables",
        name: "Florist Fables",
        description: "Unity-based 2D mobile florist management game",
        category: 'Games',
        tech: ["Unity", "C#", "2D Physics"],
        status: "Live Demo",
        previewType: "image",
        previewUrl: "https://via.placeholder.com/400x250/87CEEB/2d3748?text=2D+Platformer+Game",
        demoUrl: "#",
        codeUrl: "#",
        icon: FaGamepad,
        tags: ['Unity', 'C#', '2D Physics', 'Game Dev'],
        updates: [
            {
                id: 1,
                date: '2024-01-15',
                title: 'Game Concept & Design',
                content: `
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                `,
                readTime: 5,
                status: 'completed'
            },
            {
                id: 2,
                date: '2024-01-20',
                title: 'Game Mechanics Implementation',
                content: `
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                `,
                readTime: 3,
                status: 'completed'
            }
        ]
    },
    {
        id: 2,
        title: "NC News",
        name: "NC News",
        description: "A full-stack app where users can browse articles, post and leave likes and comments",
        category: 'Websites',
        tech: ["React.js", "Node.js", "Express", "PostgreSQL"],
        status: "Live",
        previewType: "image",
        previewUrl: null, // This will be passed as a prop
        demoUrl: "https://connie-nc-news.netlify.app/",
        codeUrl: "https://github.com/Cornie98/NC-News-App",
        icon: FaCode,
        tags: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
        updates: [
            {
                id: 1,
                date: '2024-01-10',
                title: 'Frontend Setup & Design',
                content: `
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                `,
                readTime: 8,
                status: 'completed'
            },
            {
                id: 2,
                date: '2024-01-25',
                title: 'Full-Stack Implementation',
                content: `
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                `,
                readTime: 4,
                status: 'completed'
            }
        ]
    },
    {
        id: 3,
        title: "Scrapi",
        name: "Scrapi",
        description: "A playful digital scrapbook for creative expression and memory keeping.",
        category: 'Websites',
        tech: ["React.js", "Konva.js", "CSS", "Firebase"],
        status: "Live",
        previewType: "image",
        previewUrl: null, 
        demoUrl: "https://scrapibook.netlify.app/",
        codeUrl: "https://github.com/nelsonholtz/Scrapi-fe",
        icon: FaPaperclip,
        tags: ['React.js', 'Konva.js', 'CSS', 'Firebase'],
        updates: [
            {
                id: 1,
                date: '2025-07-01',
                title: 'Ideas Stage',
                content: `
                    <p>At Northcoders, the final project is completed in teams of four to five learners, randomly selected from your cohort. While you've likely met and pair-programmed with your teammates before, working together as a full team still feels like a new experience. My team consisted of four members, and on the first day we came together to brainstorm ideas for our app.</p>
                    
                    <h3>The Ideas</h3>
                    <p>To collaborate, we used Slack to video call and FigJam to write down our ideas. (FigJam later also became a source of inspiration for our app.) As a group we had many ideas for example a 3D virtual gallery space, a town noticeboard app, and a BeReal-style app that uses daily prompts to encourage expression. After getting a few down, we discussed our personal motivations and goals with the project. Through this we discovered we all wanted to make something fun and creative.</p>
                    
                    <p>Some things we had to consider were the scope of the app, the tech stack we wanted to use, and what we could realistically achieve in just a couple of weeks. With that in mind, we narrowed our options down to the final two:</p>
                    
                    <ol>
                        <li><strong>Promptly</strong> - the BeReal-style app that gives users a prompt at the same time every day (e.g., "take a picture of the sky") and lets users compare posts from around the world.</li>
                        <li><strong>Scrapi</strong> - a creative web app for visual journalling, idea boards, and digital scrapbooking. Users can drag, draw, write, and customise elements on a canvas, save their creations, and revisit them through a built-in calendar view.</li>
                    </ol>
                    
                    <p>In the end, we decided to go with <strong>Scrapi</strong>, the digital scrapbooking app.</p>
                `,
                readTime: 1,
                status: 'planning'
            },
            {
                id: 2,
                date: '2025-07-03',
                title: 'Spiking',
                content: `
                    <p>After deciding on Scrapi, we started spiking some of the tech we thought we might use. I mainly focused on <strong>Konva.js</strong> to see how we could make a draggable, customisable canvas for users to draw, drag, and add elements.</p>
                    
                    <p>I played around with different features like drawing shapes, dragging and resizing objects, and layering elements. It was helpful to see what was actually possible and what might be too ambitious for our timeframe.</p>
                    
                    <p>At the same time, we started planning our <strong>MVP</strong> on an app called Trello to figure out the core features we needed for Scrapi to work, without worrying about extras. It really helped us focus and gave us a clear roadmap for the project.</p>
                `,
                readTime: 1,
                status: 'learning'
            },
            {
                id: 3,
                date: '2025-07-08',
                title: 'Development Progress',
                content: `
                    <p>By July 8th, we were deep into building Scrapi and making the canvas actually work. I spent the day fixing some syntax errors in <code>CreateBoard.jsx</code> and making sure the boards were saving correctly for users. We also added image resizing so elements on the boards could be adjusted easily.</p>
                    
                    <p>One of the biggest steps was integrating <strong>Firebase</strong> for our backend. We used it to handle user authentication, save boards, and manage data like images and text elements. We chose Firebase because it was quick to set up, easy to connect to our React frontend, and handled a lot of the heavy lifting like authentication and database management. This let us focus on building the app features rather than spending time on server setup.</p>
                    
                    <p>On top of that, we started integrating a calendar on the /profile page to show boards by date, this was a big step for helping users revisit their creations. We also did some styling, with updates to the login and create-board pages to make everything look cleaner and more user-friendly.</p>
                    
                    <p>We also removed API keys from the repo and added a <code>.env</code> file to keep things secure, which felt like an important milestone for the project setup.</p>
                    
                    <p>It was a big day of merges, small fixes, and Firebase setup, but everything came together nicely and gave us a solid foundation to keep building on.</p>
                `,
                readTime: 1,
                status: 'in-progress'
            },
            {
                id: 4,
                date: '2025-07-09',
                title: 'Adding Features and UI Updates',
                content: `
                    <p>On July 9th, we focused on adding more interactive features and polishing the interface. I integrated a <strong>sticker library</strong> and worked on selecting images so users could customise their boards even more. We also added the ability to upload images, which made the boards much more flexible and personal.</p>
                    
                    <p>On the UI side, we added a <strong>navbar</strong> and some minimal styling to improve navigation across the app. We also updated input types on the sign-in page to use email and password fields, making the forms more user-friendly and functional.</p>
                    
                    <p>This day was also our first experience fixing <strong>merge conflicts</strong>. It was really nerve-wracking at first, but we took it step by step and managed to resolve everything successfully. It felt like a small but important milestone in learning how to work collaboratively on a shared codebase.</p>
                    
                    <p>By the end of the day, the boards were starting to feel much more interactive, and users could really start to play with the creative elements we'd planned for the MVP.</p>
                `,
                readTime: 1,
                status: 'in-progress'
            },
            {
                id: 5,
                date: '2025-07-10',
                title: 'Adding Stickers and Explore Page',
                content: `
                    <p>On July 10th, I focused on expanding the creative options for users. I added a <strong>sticker library</strong> by finding PNGs on Pinterest and carefully cutting out the images to make them usable in the app. I thought it was really important to include a wide range of stickers so users would have a necessary layer of fun and creativity to add to their boards.</p>
                    
                    <p>We also added the <strong>explore page</strong>, which queries Firebase for public boards and displays them in descending date order. This lets users see what other people are creating and get inspiration for their own boards. We also added the ability for users to mark their boards as public or private.</p>
                    
                    <p>On top of that, the toolbar got some updates with styling tweaks and rearranged buttons to make it more intuitive. And, as usual, we had to handle a few merge conflicts along the way, including for the sticker library and explore page branches — it was stressful but a good learning experience!</p>
                    
                    <p>By the end of the day, the app felt much more playful and interactive, with users able to explore, customise, and really start to make the boards their own.</p>
                `,
                readTime: 1,
                status: 'in-progress'
            },
            {
                id: 6,
                date: '2025-07-11',
                title: 'Layering and Editing Features',
                content: `
                    <p>On the final day of week one, I focused on making the boards even more interactive with <strong>layering functionality</strong> and text editing. I added a floating toolbar for elements that lets users change layers or delete selected items, which really improved control over how objects were arranged on their boards.</p>
                    
                    <p>I also added the ability to change fonts for text elements and fixed some lingering image upload issues. There was another round of conflict resolution when merging the layering branch with main, which felt nerve-wracking at first, but by now we were getting more confident at handling merge conflicts smoothly.</p>
                    
                    <p>Additionally, I started looking into an <strong>export button</strong> so users could save their boards as a file, though it was still a work in progress. Overall, the day was all about giving users more creative freedom and polishing the interactive features that make Scrapi fun to use.</p>
                `,
                readTime: 1,
                status: 'in-progress'
            },
            {
                id: 7,
                date: '2025-07-14',
                title: 'Profile Improvements and Export Feature',
                content: `
                    <p>On July 14th, we made some really useful improvements to the profile page and added the much-anticipated export functionality. Users can now view <strong>all their scrapbooks on their profile</strong>, making it easier to revisit and organise their creations.</p>
                    
                    <p>I also updated the default date to always show the current date and added a favicon to the index page, giving the app a more polished feel. For the explore page, I decided to use <strong>Cloudinary preview images</strong> instead of reloading the full Konva stages for each post. This significantly sped up loading times and made browsing other users' boards much smoother.</p>
                    
                    <p>The big highlight was the <strong>export feature</strong>, which allows users to save their boards and download preview images directly from Cloudinary to their devices. This was a key step in letting users take their creative work outside of the app and share it.</p>
                    
                    <p>It was really satisfying to see the app starting to feel complete, with both organisational and functional features coming together for a smoother, more enjoyable user experience.</p>
                `,
                readTime: 1,
                    status: 'in-progress'
            },
            {
                id: 8,
                date: '2025-07-15',
                title: 'Text Formatting, Autosaving, and User Profiles',
                content: `
                    <p>On July 15th, a lot of important user-facing features came together. I added <strong>text formatting</strong> options and fixed some HTML text positioning, so users could customise their text elements more easily and make boards look polished.</p>
                    
                    <p>We also implemented <strong>autosaving</strong> for element positions with optimistic rendering of the last update time. This meant users could work on their boards without worrying about losing changes, and it made the app feel much more reliable.</p>
                    
                    <p>Another big step was improving <strong>user profiles</strong>. I worked on creating profiles, including avatar uploads to Cloudinary, and added usernames on the explore page so users could see who created each board. There was also some styling to make the profiles look cleaner and consistent with the rest of the app.</p>
                    
                    <p>By the end of the day, these updates really helped Scrapi feel like a full-featured creative platform, with user identity, persistence, and polished text tools all in place.</p>
                `,
                readTime: 1,
                status: 'in-progress'
            },
            {
                id: 9,
                date: '2025-07-16',
                title: 'Homepage, Explore Page, and Styling Updates',
                content: `
                    <p>On July 16th, we focused on polishing the app's interface and making the homepage and explore page more functional. I added <strong>sorting on the explore page</strong> and ensured public profiles could fetch other users' public boards. We also updated the routes so that unsigned users couldn't access the create board or explore pages.</p>
                    
                    <p>On the creative side, I organised the Alphabet Collage stickers and added a feature to deselect elements when clicking on the background, making the canvas feel more intuitive to use. I also worked on <strong>styling updates</strong> for the homepage, navbar, and buttons, including hover effects, to make the app visually consistent and user-friendly.</p>
                    
                    <p>By the end of the day, the interface felt much smoother, and the homepage and explore page were starting to look polished and ready for users to interact with the app comfortably.</p>
                `,
                readTime: 1,
                status: 'in-progress'
            },
            {
                id: 10,
                date: '2025-07-17',
                title: 'Final Fixes and Project Wrap-Up',
                content: `
                    <p>On the final day, July 17th, we focused on small but important fixes. I updated <code>App.jsx</code> and added a show/hide password feature to improve usability and make the login experience smoother.</p>
                    
                    <p>The following day, July 18th, we added our names to the app's credits and updated the README file, giving the project a polished finish. We also hosted the app online at <a href="https://scrapibook.netlify.app" target="_blank">https://scrapibook.netlify.app</a>, so anyone can try it out.</p>
                    
                    <p>It was really satisfying to see all of our work come together. From brainstorming ideas to implementing interactive features, styling, and backend integration, we had built a full-featured creative web app.</p>
                    
                    <p>Finishing the project felt like a big milestone. We had not only built a functional MVP but also learned a lot about teamwork, merge conflicts, and creating a web app from scratch.</p>
                `,
                readTime: 1,
                status: 'completed'
            }
        ]
    },
    {
        id: 4,
        title: "Junk Invaders!",
        name: "Junk Invaders!",
        description: "Phaser.js pixel art space invaders clone",
        category: 'Games',
        tech: ["Phaser.js", "React", "WebGL"],
        status: "In Progress",
        previewType: "image",
        previewUrl: "/src/assets/junkInvaders.gif",
        demoUrl: "#",
        codeUrl: "#",
        icon: FaGamepad,
        tags: ['Phaser.js', 'React', 'WebGL', 'Game Dev'],
        updates: [
            {
                id: 1,
                date: '2024-01-01',
                title: 'Space Invaders Clone Development',
                content: `
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                `,
                readTime: 4,
                status: 'in-progress'
            }
        ]
    }
];

export const getProjectById = (id) => {
    return projectsData.find(project => project.id === parseInt(id));
};

export const getAllProjects = () => {
    return projectsData;
};
