import React, { useState } from 'react';
import { motion } from 'framer-motion';

import cover from '/images_1/cover.png';
import homepage from '/images_1/home_page.png';
import products from '/images_1/products.png';
import signup from '/images_1/sign_up.png';
import signin from '/images_1/sign_in.png';
import detailproduct from '/images_1/detail_product.png';
import detailcart from '/images_1/detail_cart.png';
import payment from '/images_1/payment.png';
import orderhistory from '/images_1/order_history.png'
import rating from '/images_1/rating.png';
import chat from '/images_1/chat.png';

import cover2 from '/images_2/cover2.png';
import homepage2 from '/images_2/home_page.png';
import receipts from '/images_2/receipts.png';
import detail from '/images_2/detail_receipt.png';
import detail2 from '/images_2/detail_receipt2.png';
import admin from '/images_2/admin.png';
import add from '/images_2/add_receipt.png';

import cover3 from '/images_3/cover.png';
import signin2 from '/images_3/sign_in.png';
import home from '/images_3/home.png';
import detail_addcart from '/images_3/detail.png';
import manage from '/images_3/manage.png';

import cover4 from '/images_4/cover.png';
import welcome from '/images_4/Welcome.png';
import homepage4 from '/images_4/Home_Page.png';
import homepagedark from '/images_4/Home_Page_Dark.png';
import togglemusic from '/images_4/Home_Togglemusic.png';
import music from '/images_4/Music_Page.png';
import musicdark from '/images_4/Music_Page_Dark.png';
import changemap from '/images_4/Change_Map.png';
import help from '/images_4/Help.png';
import setting from '/images_4/Setting.png';

import cover5 from '/images_5/cover.png';
import w from '/images_5/w.png';

import { FaChevronRight, FaChevronUp } from 'react-icons/fa';


// Danh sách dự án
const projectList = [
    {
        id: 1,
        title: "My Portfolio",
        year: "Feb 2025",
        description: "This website is introduce myself and provide comprehensive information about me, including my personal profile, professional skills, work experience, and the projects I have worked on. All of this is the result of my academic learning in school as well as my self-study efforts. <br> <br> This website is built using React combined with TailwindCSS and Framer Motion, creating a modern, optimized, and flexible user interface. The entire project is deployed on the Vercel platform, ensuring high performance and fast loading speeds.",
        cover: cover5,
        images: [
            { src: w, caption: "If you have any feedback or questions, feel free to reach out to me. I'm always open to discussions and collaborations!" }
        ],
        techStack: ["ReactJs", "Framer Motion", "Tailwind CSS"],
        link: "https://vien-portfolio.vercel.app"
    },
    {
        id: 2,
        title: "Website For Managing And Selling Fashion Accessories",
        year: "Dec 2024",
        description: "This is my Project- Specialized Topics and after that I develop additional to the Thesis. The website utilizes technologies such as MongoDB, ExpressJS, ReactJS, and NodeJS. Allows Administrators to efficiently manage products, orders, customers, blog posts, and inventory,… and users can shop, track orders, review products, create blog posts, interact with blog content, and more. <br> <br> Before proceeding with the project, I design the interface and create prototypes using Figma to finalize the idea of ​​how my website would look and function.",
        cover: cover,
        link_code: "https://github.com/vien1211/LuanVan_FashionAccessEcommerce.git",
        link_prototype: "https://www.figma.com/proto/JebnZBiP4vbM0dRZxfmOQj/Thesis_Prototype_Tr%C6%B0%C6%A1ng-Ng%E1%BB%8Dc-Vi%C3%AAn?node-id=0-1&t=dHqnGM94gwEzh24U-1",
        images: [
            { src: homepage, caption: "On the Home page interface, customers can easily access and browse Best Seller products, new products, product categories, product brands or all products,... The function of quickly adding products to the shopping cart, here by default only 1 product is added. And there is a function of adding products to the list of favorite products." },
            { src: products, caption: "The products page, page shows all the products of the Store, only customers who sign in can add products to their cart and pay." },
            { src: signup, caption: "At the Sign-Up interface, users need to provide their full name, phone number, email and password to register. Phone number and email must be in the correct format, password must be at least 6 characters. In addition, users can use their Google account to quickly register/login." },
            { src: signin, caption: "After successfully registering an account, users can use the registered Email and password to log in to the system.." },
            { src: detailproduct, caption: "Here, customers can choose color, quantity, add products to cart, rate products and be shown related products" },
            { src: detailcart, caption: "The Cart Details page displays the product, product quantity along with the amount including the product amount, shipping amount and total amount, the shipping amount will change according to the order value. Customers can increase or decrease the product quantity or delete the product." },
            { src: payment, caption: "The checkout page has payment options like cash on delivery and Paypal. Here the Customer can enter a Discount Code for the order, optionally or not." },
            { src: orderhistory, caption: "Orders that have been placed will be displayed here, Customers can cancel orders when the order is in “Waiting for confirmation” status, can search for orders by order status." },
            { src: rating, caption: "When the customer confirms “Received”, the “Perform review” button will appear." },
            { src: chat, caption: "Chatbot and real-time chat with the admin" }
        ],
        video: "videos_1/Vieen's_Store_Admin_Dashboard.mp4",
        techStack: ["MERN Stack", "Javascript", "Tailwind CSS", "Figma", "HTML"]
    },

    {
        id: 3,
        title: "Milk Tea Shop Management App",
        year: "Apr 2024",
        description: "Milk Tea Shop Management App is a group 2 members done in Mobile Development subject, a mobile application designed to provide ordering, product management and customer interaction in an intuitive and easy-to-use way. <br> <br> Using Flutter to develop the application and Firebase to store user data, manage login and authentication, as well as manage product and order data. The application will create an easy and convenient shopping experience with a beautiful, pleasant and easy-to-use interface.",
        cover: cover3,

        images: [
            { src: signin2, caption: "Users enter their registered email and password to log into the application. To create an account, users must enter their email, password, and confirm their password. Administrators use the provided email and password to log into the application." },
            { src: home, caption: "The home page interface displays advertising images and all products for users to choose products. Users can add products to the cart right on the Home page and can add products to the list of favorite products. On the AppBar, users can choose how to display products such as: “All Products” or “Only favorite products”, not only that, the AppBar also has a “Cart” for users to access the cart. BottomNavigationBar, helps users easily move back and forth to view order information, personal page and home page." },
            { src: detail_addcart, caption: "The interface displays detailed product information, helping users easily view product information, update quantity and add products to the cart to place an order. Then users can go to the cart to view the products that the user has added to the cart, and users can “Order Now” those products." },
            { src: manage, caption: "Administrators can add, edit, and delete products here." },
        ],

        techStack: ["Dart", "Flutter", "Firebase"]
    },
    {
        id: 4,
        title: "Website Food Receipts",
        year: "Nov 2023",
        description: "Group project (2 members) done in Web Technology subject, using PHP and MVC model to implement. Help users find suitable recipes and share their results, along with admin can manage the posted recipes. I contributed to creating some backend logic, designing the interface and implementing them.",
        cover: cover2,
        link_code: "https://github.com/vien1211/ct27502-project-vien1211.git",
        images: [
            { src: homepage2, caption: "The Home page displays products by category. When you click on the “See more” button, the recipes of that category will be displayed. When you click on the “Details” button, the recipe details page will be displayed. Users can interact with the Navigation bar to view recipes by category, all recipes, and the introduction page." },
            { src: receipts, caption: "All recipe here!" },
            { src: detail, caption: "" },
            { src: detail2, caption: "On the detail page, detailed steps from ingredients to preparation are displayed fully and in detail, meeting the user's need to find a complete recipe." },
            { src: admin, caption: "The admin workspace is where they can add, edit, delete receipts and more." },
            { src: add, caption: "Admin add new recipe in here." },
        ],
        techStack: ["PHP", "Bootstrap", "CSS", "Javasrcipt"]
    },

    {
        id: 5,
        title: "Car Infotainment System “PKTV - IVIS”",
        year: "May 2023",
        description: "This Group project (4 members) developed in the subject named “Human-Computer Interaction”, use the Figma to design the interface. In this project, the system describes the map viewing and music listening activities of the vehicle's infotainment system. <br> <br> My responsibilities include creating components for Play/Pause, Favorites, Sound Bar Adjustment, Song Search, and Spinning Disc Animation on the “Music” page, as well as designing the “Help Center”, “Music” page.",
        cover: cover4,
        link_prototype: "https://www.figma.com/file/xnEhlyaTv8BRZsKZWW6CsN/PKTV-IVIS?type=design&mode=dev&t=PQjzNvwdqETkqswU-1",
        images: [
            { src: welcome, caption: "Welcome to IVIS system!" },
            { src: homepage4, caption: "The home page is displayed visually, users can use the map and turn music on and off. Also has location search feature." },
            { src: homepagedark, caption: "The system also has a dark mode feature that makes it easy to switch between light and dark interfaces." },
            { src: changemap, caption: "The map display has 2 forms including traffic normal and satellite, easily to change the mode you want." },
            { src: togglemusic, caption: "You can play the music, change the next song you love, adjust feature random and replay the song, and expand the toggle music bar to choose detailed song to play." },
            { src: music, caption: "The music player page provides full features for playing music, here users can choose to add songs to favorites or search for songs." },
            { src: musicdark, caption: "Music page in dark mode!" },
            { src: setting, caption: "The setting page helps users make settings for wifi connection, bluetooth or darkmode display mode." },
            { src: help, caption: "Help center helps answer questions about how to use the system." },
        ],
        techStack: ["Figma", "Prototype", "UX/UI Design"]
    },
];

const ScrollReveal = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Projects = () => {
    const [openProject, setOpenProject] = useState({});

    const toggleProject = (id) => {
        setOpenProject((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    };

    return (
        <div id="project" className="flex flex-col min-h-screen w-full items-center justify-center gap-16 p-4 md:px-14 md:py-24">
            <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-light text-center text-[#45625e]">My Projects</h1>
            </ScrollReveal>

            <div className="flex flex-col w-full max-w-[800px] gap-10">
                {projectList.map((project) => (
                    <div key={project.id}>
                        <ScrollReveal
                            className="bg-[#D0D9D3] p-5 rounded-3xl shadow-lg"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-center">
                                <img
                                    src={project.cover}
                                    alt={`Cover ${project.title}`}
                                    onContextMenu={(e) => e.preventDefault()}
                                    className="w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-105 md:w-[250px] md:h-[180px] shadow-lg"
                                />

                                <div className="flex flex-col w-full">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-semibold text-[#45625e]">{project.title}</h3>

                                        <button
                                            onClick={() => toggleProject(project.id)}
                                            className="text-[#45625e] px-3 py-1 rounded-md transition cursor-pointer"
                                        >
                                            {openProject[project.id] ? <FaChevronUp /> : <FaChevronRight />}
                                        </button>
                                    </div>
                                    <h3 className="text-md font-light text-[#45625e] mt-1">{project.year}</h3>

                                    {!openProject[project.id] && (
                                        <p className="text-gray-700 mt-2 line-clamp-3">
                                            {project.description}
                                        </p>
                                    )}

                                    {openProject[project.id] && project.link_code && (
                                        <a
                                            href={project.link_code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-700 cursor-pointer hover:underline mt-2"
                                        >
                                            🔗 Source Code GitHub
                                        </a>
                                    )}

                                    {openProject[project.id] && project.link_prototype && (
                                        <a
                                            href={project.link_prototype}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-700 cursor-pointer hover:underline mt-2"
                                        >
                                            🔗 Demo Figma Prototype
                                        </a>
                                    )}

                                    {openProject[project.id] && project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-700 cursor-pointer hover:underline mt-2"
                                        >
                                            🔗 Link Deploy 
                                        </a>
                                    )}

                                    <ScrollReveal>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-[#6D8777] text-white text-xs px-3 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>

                            {/* Hiển thị chi tiết khi mở */}
                            {openProject[project.id] && (

                                <motion.div
                                    className="mt-6"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: project.description }}></p>

                                    <div className="grid grid-cols-1 gap-4 mt-4">
                                        {project.images.map((img, index) => (
                                            <div key={index} className="flex flex-col">
                                                <img
                                                    src={img.src}
                                                    alt={`Project ${index}`}
                                                    onContextMenu={(e) => e.preventDefault()}
                                                    className="w-full h-full object-cover rounded-2xl shadow-md"
                                                />
                                                <p className="text-sm text-gray-500 mt-2">{img.caption}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {project.video && (
                                        <div className="w-full flex flex-col justify-center items-center mt-4">
                                            <video className="w-full max-w-[700px] rounded-xl shadow-md" controls controlsList='nodownload' onContextMenu={(e) => e.preventDefault()} muted>
                                                <source src={project.video} type="video/mp4" />
                                                Trình duyệt của bạn không hỗ trợ video.
                                            </video>
                                            <p className="text-sm text-gray-500 mt-2">This is Admin Dashboard</p>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </ScrollReveal>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
