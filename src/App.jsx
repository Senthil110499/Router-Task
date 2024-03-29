import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import All from './Components/All';
import FullStack from './Components/FullStack';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Career from './Components/Career';

const App = () => {
  let data = [{
    id:"1",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "Comprehensive List of Project Ideas for Frontend Development [2024]",
    content2:"During your college days, you must’ve been bombarded with lots of projects and at that point, you will be clueless about why they are forcing us to do projects.the creators behind transforming the raw data into edible data insights.",
    date: "16",
    month:"February 2024", 
  },
    {
    id:"2",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
    course: "DATA SCIENCE",
    content1: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    content2:"Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary?the creators behind transforming the raw data into edible data insights. ",
    date: "11",
    month:"February 2024", 
    },
    {
    id:"3",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp',
    course: "DATA SCIENCE",
    content1: "Impact of Certification Programs on Hiring Data Scientists",
    content2:"Data scientists are the creators behind transforming the raw data into edible data insights. These data insights are supplements for the growth of modern businesses today the creators behind transforming the raw data into edible data insights.",
    date: "15",
    month:"November 2023", 
    },
    {
    id:"4",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
    course: "CYBER SECURITY",
    content1: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    content2:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.the creators behind transforming the raw data into edible data insights.",
    date: "4",
    month:"December 2023", 
    },
    {
    id:"5",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
    course: "CYBER SECURITY",
    content1: "What Is Hacking? Types of Hacking & More",
    content2:"Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary.the creators behind transforming the raw data into edible data insights.",
    date: "6",
    month:"January 2023", 
    },
    {
    id:"6",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Development-Roadmap-A-Complete-Guide.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "Backend Development Roadmap: A Complete Guide 2024",
    content2:"In the swiftly evolving landscape of technology, backend development stands as an important foundation that powers the web and mobile applications we rely on daily.the creators behind transforming the raw data into edible data insights. ",
    date: "26",
    month:"January 2024", 
    },
    {
    id:"7",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "Frontend vs Backend Development: Top 7 Differences",
    content2:"In today’s digital age, web development has become a crucial component of the IT industry. Aspiring developers often come across the terms “frontend” and “backend” while exploring the realm of web development.the creators behind transforming the raw data into edible data insights.",
    date: "16",
    month:"Feburary 2024", 
    },
    {
    id:"8",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp',
    course: "CAREER",
    content1: "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
    content2:"Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap? Want to know what are the skills and technologies required to become a front-end developer? the creators behind transforming the raw data into edible data insights.",
    date: "2",
    month:"February 2024", 
    },
    {
    id:"9",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp',
    course: "CAREER",
    content1: "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
    content2:"If your New Year resolution consists of building a successful tech career in 2024, then you need a few more weapons in your arsenal to achieve your goal. the creators behind transforming the raw data into edible data insights.",
    date: "19",
    month:"January 2024", 
    },
    {
    id:"10",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
    course: "CAREER",
    content1: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
    content2:"With the rapid advancement of technology, the demand for IT professionals has soared in recent years.the creators behind transforming the raw data into edible data insights.",
    date: "2",
    month:"December 2023", 
    },
    {
    id:"11",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Best-Frontend-Development-Frameworks.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "10 Best Frontend Development Frameworks",
    content2:"Frontend development frameworks are the backbone of user interface development, enabling developers to build seamless, interactive, and visually appealing web applications efficiently and easily.",
    date: "16",
    month:"February 2024", 
    },
    {
    id:"12",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/feature_image-768x402.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "Top 6 Backend Frameworks That You Should Know in 2024",
    content2:"If you are looking to ace the field of backend development, you must be able to create websites that are more intuitive and especially should stand out from all the other billion websites out there.",
    date: "15",
    month:"February 2024", 
    },
    {
    id:"13",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "Backend Developer Salary in India & USA [2024]",
    content2:"If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious about how much backend developers make, especially in places like India and the USA in 2024. ",
    date: "15",
    month:"February 2024", 
    },
    {
    id:"14",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "What Does a Top Backend Developer Do? The Ultimate Guide",
    content2:"Backend development plays a vital role in the functioning of websites and web applications. ",
    date: "15",
    month:"February 2024", 
    },
    {
    id:"15",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer-768x402.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "What is Frontend Development? Roles, Responsibilities, Skills & Salary",
    content2:"Frontend development is all about making websites that look good and work well for people who use them. It’s the job of frontend developers to turn designs into real, clickable websites you can visit on your internet browser. ",
    date: "15",
    month:"February 2024", 
    },
    {
    id:"16",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "Top Full Stack Development Trends for 2024: What to Expect",
    content2:"In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full stack development",
    date: "9",
    month:"February 2024", 
    },
    {
    id:"17",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "Top 11 CSS Frameworks for Front-End Developers: A Comprehensive Guide",
    content2:"In the world of web development, Cascading Style Sheets (CSS) play a crucial role in controlling the appearance and layout of web pages. ",
    date: "8",
    month:"February 2024", 
    },
    {
    id:"18",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp',
    course: "FULL STACK DEVELOPMENT",
    content1: "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
    content2:"Creating a website on our own must have been on everyone’s bucket list since the dawn of the internet.",
    date: "22",
    month:"January 2024", 
    },
    {
    id:"19",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp',
    course: "DATA SCIENCE",
    content1: "Top Product-Based Companies for Data Science Freshers",
    content2:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing the power of data to gain valuable insights and make informed decisions.",
    date: "10",
    month:"November 2023", 
    },
    {
    id:"20",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp',
    course: "DATA SCIENCE",
    content1: "What is the Difference between Data Science and Data Engineering?",
    content2:"India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles. And this isn’t just a passing trend. ",
    date: "8",
    month:"November 2023", 
    },
    {
    id:"21",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp',
    course: "DATA SCIENCE",
    content1: "Top 10 Data Science Tools in 2024",
    content2:"Data Science is an in-demand profession and will continue growing in the coming years.",
    date: "1",
    month:"November 2023", 
    },
    {
    id:"22",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp',
    course: "DATA SCIENCE",
    content1: "Best Data Science Books to Learn in 2024",
    content2:"Today, we’re going to talk about something really cool: data science. It’s all about using data to make smart decisions and create amazing things.",
    date: "26",
    month:"October 2023", 
    },
    {
    id:"23",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp',
    course: "DATA SCIENCE",
    content1: "Top Product-Based Companies for Data Scientists in 2024",
    content2:"We all know about the kind of buzz surrounding data science right now, it is The tech career of this decade and that’s saying a lot! ",
    date: "5",
    month:"October 2023", 
    },
    {
    id:"24",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp',
    course: "DATA SCIENCE",
    content1: "Useful Python Libraries & Tools for Data Science Beginners",
    content2:"In a world filled with information, knowing how to understand and use data is super important. ",
    date: "29",
    month:"September 2023", 
    },
    {
    id:"25",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp',
    course: "DATA SCIENCE",
    content1: "Extraordinary Data Science Projects for Beginners As Well as Veterans",
    content2:"As the demand for data and the people that can conquer it, i.e. Data Scientists continues to soar, it has become crucial for aspiring professionals to stand out from the crowd by showcasing their skills through real-world projects.",
    date: "28",
    month:"August 2023", 
    },
    {
    id:"26",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-768x402.webp',
    course: "DATA SCIENCE",
    content1: "Data Science Webinars and Workshops",
    content2:"In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data science. ",
    date: "9",
    month:"August 2023", 
    },
    {
    id:"27",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.webp',
    course: "CYBER SECURITY",
    content1: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    content2:"Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.",
    date: "27",
    month:"December 20222", 
    },
    {
    id:"28",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer-768x402.webp',
    course: "CYBER SECURITY",
    content1: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    content2:"Look around today, you will witness that we are more reliant on technology and devices than ever before. ",
    date: "20",
    month:"December 2022", 
    },
    {
    id:"29",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.webp',
    course: "CYBER SECURITY",
    content1: "8 Different Types of Cybersecurity and Threats Involved",
    content2:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc. ",
    date: "9",
    month:"November 2022", 
    },
    {
    id:"30",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer-768x402.webp',
    course: "CYBER SECURITY",
    content1: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    content2:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well",
    date: "22",
    month:"June 2022", 
  },
  {
    id:"31",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.webp',
    course: "CYBER SECURITY",
    content1: "Top 7 Cyber Security Attacks in Real Life",
    content2:"Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through unauthorized access to computer systems.",
    date: "10",
    month:"June 2022", 
  },
  {
    id:"32",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer-768x402.webp',
    course: "CYBER SECURITY",
    content1: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
    content2:"There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism.",
    date: "1",
    month:"March 2021", 
  },
  {
    id:"33",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners-1200x571.webp',
    course: "CYBER SECURITY",
    content1: "The Ultimate Cybersecurity Roadmap for Beginners",
    content2:"Cybersecurity jobs are also one of the most handsomely paying jobs in recent times.",
    date: "1",
    month:"March 2021", 
  },
  {
    id:"34",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.webp',
    course: "CYBER SECURITY",
    content1: "How Is Cyber Security Important To Our Lives?",
    content2:"Cybersecurity is an exact solution that is sought either by a billionaire with a massive business or an innovator with a small start-up or even an individual who risks personal data online. Let’s see more.",
    date: "10",
    month:"November 2020", 
    },
  {
    id:"35",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp',
    course: "CAREER",
    content1: "UI/UX Designer Job Description and Roles & Responsibilities",
    content2:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially in the past decade.",
    date: "13",
    month:"December 2023", 
    },
  {
    id:"36",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp',
    course: "CAREER",
    content1: "Top 5 IT Jobs for Economics Students",
    content2:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics.",
    date: "4",
    month:"December 2023", 
    },
  {
    id:"37",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
    course: "CAREER",
    content1: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
    content2:"With the rapid advancement of technology, the demand for IT professionals has soared in recent years. ",
    date: "2",
    month:"December 2023", 
    },
  {
    id:"38",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp',
    course: "CAREER",
    content1: "Automation Test Engineer Resume: 10 Important Things To Consider",
    content2:"The world is moving towards automating the testing of products in order to increase work efficiency. ",
    date: "1",
    month:"December 2023", 
    },
  {
    id:"39",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-1200x628.webp',
    course: "CAREER",
    content1: "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
    content2:"The world is moving towards modernization leading to an increase in the popularity of civil engineering.",
    date: "1",
    month:"December 2023", 
    },
  {
    id:"40",
    image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-1200x628.webp',
    course: "CAREER",
    content1: "9 Best Product-Based Companies for Project Management",
    content2:"In today’s tech-driven world, the demand for project managers is higher than before. ",
    date: "1",
    month:"December 2023", 
    },
  ]
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<All data={data} />} />
          <Route path='/FullStack' element={<FullStack data={data}/>} />
          <Route path='/DataScience' element={<DataScience data={data}/>} />
          <Route path='/CyberSecurity' element={<CyberSecurity data={data} />} />
          <Route path='/Career' element={<Career data={data}/>} />  
          
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
