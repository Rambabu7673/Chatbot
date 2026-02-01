import { User } from "../Models/user.model.js";
import { Bot } from "../Models/boot.model.js";

export const Message = async (req, res) => {
  try {
    const { text } = req.body;
    console.log(text);
    if (!text?.trim()) {
      return res.status(400).json({ message: "text can not be empthy" });
    }
    const user = await User.create({
      sender: "user",
      text,
    });
    // Data
    const botResponses = {
      hello: "Hi, How I can help you!!",
      "can we become friend": "Yes",
      "how are you": "I'm just a bot, but I'm doing great! How about you?",
      "what is your name?": "I’m ChatBot, your virtual assistant.",
      "who made you":
        "I was created by developers to help answer your questions.",
      "tell me a joke":
        "Why don’t skeletons fight each other? They don’t have the guts!",
      "what is the time": "I can’t see a clock, but your device should know.",
      bye: "Goodbye! Have a great day.",
      "thank you": "You’re welcome!",
      "i love you": "That’s sweet! I’m here to help you anytime 🥰🥰🥰.",
      "where are you from": "I live in the cloud — no rent, no bills!",
      "what can you do":
        "I can chat with you, answer questions, and keep you company.",

      "what is python":
        "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",

      "what is java":
        "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",

      "what is recursion":
        "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a **base condition** to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",
      "what is a function":
        "A function is a block of code that performs a specific task and can be reused.",
      "what is a variable":
        "A variable is used to store data values in memory.",
      "what is an array":
        "An array stores multiple values of the same type in a single variable.",
      "what is a loop": "A loop is used to execute a block of code repeatedly.",
      "what is conditional statement":
        "It executes code based on conditions like if, else.",
      "what is an algorithm":
        "An algorithm is a step-by-step method to solve a problem.",

      "what is debugging":
        "Debugging is the process of finding and fixing errors in code.",

      "what is syntax": "Syntax is the set of rules for writing correct code.",

      "what is compiler": "A compiler converts source code into machine code.",
      "what is compiler":
        "A compiler converts high-level source code into machine code.",

      "what is javascript":
        "JavaScript is a programming language used to create interactive web applications.",

      "what is hoisting":
        "Hoisting allows variables and functions to be used before they are declared.",

      "what is closure":
        "A closure is a function that remembers variables from its outer scope.",

      "what is promise":
        "A promise represents the result of an asynchronous operation.",

      "what is async await":
        "Async and await are used to write asynchronous code in a synchronous style.",

      "what is dom":
        "DOM stands for Document Object Model and represents the structure of a web page.",

      "what is event":
        "An event is an action performed by the user like click or keypress.",

      "what is callback":
        "A callback is a function passed as an argument to another function.",

      "what is json":
        "JSON is a lightweight data-interchange format used between client and server.",

      "what is rest api":
        "A REST API allows communication between client and server using HTTP methods.",

      "what is database":
        "A database is used to store and manage data efficiently.",

      "what is mongodb":
        "MongoDB is a NoSQL database that stores data in document format.",

      "what is schema": "A schema defines the structure of data in a database.",

      "what is crud":
        "CRUD stands for Create, Read, Update, and Delete operations.",

      "what is middleware":
        "Middleware is a function that runs between request and response.",

      "what is authentication":
        "Authentication verifies the identity of a user.",

      "what is authorization":
        "Authorization determines what a user can access.",

      "what is mern stack":
        "MERN stack consists of MongoDB, Express, React, and Node.js.",

      "what is node js": "Node.js allows JavaScript to run on the server side.",

      "what is express js":
        "Express is a Node.js framework used to build APIs.",

      "what is react":
        "React is a JavaScript library for building user interfaces.",

      "what is component": "A component is a reusable piece of UI in React.",

      "what is state": "State stores dynamic data in a React component.",

      "what is props":
        "Props are used to pass data from one component to another.",

      "what is jsx": "JSX allows HTML to be written inside JavaScript.",

      "what is virtual dom":
        "Virtual DOM improves performance by minimizing real DOM updates.",

      "what is api endpoint":
        "An API endpoint is a URL that handles client requests.",

      "what is stack": "Stack is a data structure that follows LIFO principle.",

      "what is queue": "Queue is a data structure that follows FIFO principle.",

      "what is linked list":
        "Linked list is a collection of nodes connected using pointers.",

      "what is tree": "Tree is a hierarchical data structure.",

      "what is graph": "Graph consists of nodes and edges.",

      "what is sorting": "Sorting arranges data in a specific order.",

      "what is searching": "Searching is used to find an element in data.",

      "what is binary search":
        "Binary search finds elements in sorted data efficiently.",

      "what is time complexity":
        "Time complexity measures how fast an algorithm runs.",

      "what is space complexity":
        "Space complexity measures memory usage of an algorithm.",

      "what is big o notation":
        "Big O notation describes worst-case performance.",

      "what is git": "Git is a version control system.",

      "what is github": "GitHub is a platform to host Git repositories.",

      "what is deployment": "Deployment means making an application live.",

      "what is cloud computing":
        "Cloud computing provides resources over the internet.",

      "what is aws": "AWS is a cloud service provider.",

      "what is ci cd": "CI/CD automates testing and deployment.",

      "what is environment variable":
        "Environment variables store configuration data.",

      "what is dotenv": "Dotenv loads environment variables from a file.",

      "what is nodemon":
        "Nodemon restarts the server automatically on code changes.",

      "what is error handling":
        "Error handling manages runtime errors gracefully.",

      "what is full stack developer":
        "A full stack developer works on both frontend and backend.",
      "who is prime minister of india?":
        "Narendra Modi is the Prime Minister of India since May 2014.\n• Belongs to Bharatiya Janata Party (BJP)\n• Represents Varanasi constituency\n• Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India\n• Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

      "what is g20":
        "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted G20 summit in 2023",

      "tell me about yourself":
        "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",

      "why should we hire you":
        "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

      "what is leadership":
        "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

      "who is virat kohli":
        "Virat Kohli is one of India’s greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",
      "what is programming":
        "Programming is the process of designing and writing instructions that tell a computer how to perform a specific task. These instructions are written using programming languages such as JavaScript, Python, or Java. Programming helps in building software, websites, mobile applications, and automation systems. It also involves problem-solving, logical thinking, and testing code to ensure correct output.",

      "what is software":
        "Software is a collection of programs, data, and instructions that enable a computer to perform useful tasks. Unlike hardware, software cannot be physically touched. Examples include operating systems, web browsers, mobile apps, and database systems. Software is divided into system software and application software.",

      "what is hardware":
        "Hardware refers to the physical components of a computer system that can be seen and touched. This includes devices like CPU, keyboard, mouse, monitor, hard disk, and RAM. Hardware works together with software to perform computing operations and produce results.",

      "what is operating system":
        "An operating system is system software that acts as an interface between the user and computer hardware. It manages memory, processes, files, and hardware resources. Common examples of operating systems are Windows, Linux, macOS, and Android.",

      "what is cpu":
        "CPU stands for Central Processing Unit and is considered the brain of the computer. It performs all calculations, logical decisions, and instruction execution. The CPU processes data according to instructions given by software and controls the overall functioning of the computer.",

      "what is ram":
        "RAM stands for Random Access Memory and is used to temporarily store data that is actively being used by the computer. It allows fast access to data, which improves system performance. When the computer is turned off, data stored in RAM is lost.",

      "what is database":
        "A database is an organized collection of data that allows easy storage, retrieval, updating, and management of information. Databases are used in almost every application such as banking systems, websites, mobile apps, and enterprise software. Examples include MySQL, MongoDB, and PostgreSQL.",

      "what is api":
        "API stands for Application Programming Interface and allows different software applications to communicate with each other. APIs define rules and data formats for requests and responses. They are widely used in web development to connect frontend and backend systems.",

      "what is frontend development":
        "Frontend development focuses on building the user interface of a website or application. It involves designing layouts, buttons, forms, and interactive elements using technologies like HTML, CSS, and JavaScript. The main goal is to create a user-friendly and responsive experience.",

      "what is backend development":
        "Backend development handles server-side logic, databases, authentication, and APIs. It ensures that data is processed correctly and securely. Backend developers work with technologies like Node.js, Express, databases, and server management tools.",

      "what is full stack developer":
        "A full stack developer is a professional who can work on both frontend and backend development. They understand client-side design as well as server-side logic, databases, and APIs. Full stack developers can build complete applications from start to deployment.",

      "what is html":
        "HTML stands for HyperText Markup Language and is used to structure web pages. It defines elements like headings, paragraphs, images, links, and forms. HTML provides the basic skeleton of a website.",

      "what is css":
        "CSS stands for Cascading Style Sheets and is used to style and design HTML elements. It controls layout, colors, fonts, spacing, and responsiveness. CSS helps make websites visually attractive and user-friendly.",

      "what is javascript":
        "JavaScript is a programming language used to create dynamic and interactive web applications. It allows developers to handle events, update content without page reload, validate forms, and communicate with servers. JavaScript works on both frontend and backend.",

      "what is mongodb":
        "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It does not use tables and rows like traditional databases. MongoDB is scalable, fast, and commonly used in modern web applications.",

      "what is authentication":
        "Authentication is the process of verifying the identity of a user. It ensures that only authorized users can access a system. Common authentication methods include username-password, OTP, and token-based authentication.",

      "what is authorization":
        "Authorization determines what actions or resources a user is allowed to access after authentication. For example, an admin user may have more permissions than a normal user. Authorization improves system security.",

      "what is deployment":
        "Deployment is the process of making an application available for users on the internet or production environment. It involves hosting the application on a server, configuring environment variables, and ensuring smooth performance.",

      "what is cloud computing":
        "Cloud computing provides computing resources such as servers, storage, and databases over the internet. It allows applications to scale easily and reduces the need for physical infrastructure. Examples include AWS, Azure, and Google Cloud.",

      "what is chatbot":
        "A chatbot is a software application that simulates conversation with users using predefined rules or artificial intelligence. Chatbots are commonly used in customer support, education, and automation to provide quick responses and assistance.",
      "what is digital marketing":
        "Digital marketing is the promotion of products or services using online platforms such as search engines, social media, websites, email, and mobile apps.",

      "why digital marketing is important":
        "Digital marketing helps businesses reach a larger audience, target specific users, and measure results easily at a lower cost.",

      "what are the types of digital marketing":
        "Types include SEO, SEM, social media marketing, content marketing, email marketing, and affiliate marketing.",

      "what is seo":
        "SEO stands for Search Engine Optimization and helps websites rank higher in search engine results organically.",

      "what is on page seo":
        "On-page SEO focuses on optimizing website content, keywords, meta tags, and internal links.",

      "what is off page seo":
        "Off-page SEO improves website authority using backlinks, social sharing, and brand mentions.",

      "what is technical seo":
        "Technical SEO improves website performance, speed, mobile-friendliness, and crawlability.",

      "what is keyword research":
        "Keyword research finds words users search for on search engines.",

      "what is long tail keyword":
        "Long-tail keywords are longer and more specific search phrases with lower competition.",

      "what is short tail keyword":
        "Short-tail keywords are broad search terms with high competition.",

      "what is google search console":
        "Google Search Console helps monitor website performance and search visibility.",

      "what is google analytics":
        "Google Analytics tracks website traffic and user behavior.",

      "what is content marketing":
        "Content marketing focuses on creating valuable content to attract users.",

      "what is blog marketing":
        "Blog marketing uses articles to educate users and improve SEO.",

      "what is social media marketing":
        "Social media marketing promotes brands on platforms like Facebook and Instagram.",

      "what is facebook marketing":
        "Facebook marketing uses pages, posts, and ads to reach users.",

      "what is instagram marketing":
        "Instagram marketing promotes brands using posts, reels, and stories.",

      "what is linkedin marketing":
        "LinkedIn marketing targets professionals and B2B audiences.",

      "what is twitter marketing":
        "Twitter marketing promotes content through short messages and trends.",

      "what is youtube marketing":
        "YouTube marketing uses video content for brand awareness.",

      "what is video marketing":
        "Video marketing uses videos to promote products or services.",

      "what is influencer marketing":
        "Influencer marketing promotes products through popular social media influencers.",

      "what is affiliate marketing":
        "Affiliate marketing earns commission by promoting other company products.",

      "what is email marketing":
        "Email marketing sends promotional messages to users through email.",

      "what is newsletter":
        "A newsletter shares updates and information with subscribers.",

      "what is email automation":
        "Email automation sends emails automatically based on user actions.",

      "what is lead generation":
        "Lead generation collects user information for future marketing.",

      "what is lead nurturing":
        "Lead nurturing builds relationships with potential customers.",

      "what is conversion":
        "Conversion happens when a user completes a desired action.",

      "what is conversion rate":
        "Conversion rate measures how many users take action.",

      "what is landing page":
        "A landing page is designed to convert visitors into leads.",

      "what is call to action":
        "CTA encourages users to take action like sign up or buy.",

      "what is ppc advertising":
        "PPC advertising charges advertisers per click.",

      "what is google ads":
        "Google Ads allows paid advertising on Google search results.",

      "what is display advertising":
        "Display advertising uses banners and images on websites.",

      "what is remarketing":
        "Remarketing targets users who visited your website before.",

      "what is retargeting":
        "Retargeting shows ads to previous website visitors.",

      "what is organic traffic":
        "Organic traffic comes from unpaid search results.",

      "what is paid traffic": "Paid traffic comes from advertisements.",

      "what is bounce rate":
        "Bounce rate shows users leaving without interaction.",

      "what is ctr": "CTR stands for Click Through Rate.",

      "what is impressions":
        "Impressions show how many times content is displayed.",

      "what is reach": "Reach measures unique users who saw content.",

      "what is engagement": "Engagement includes likes, comments, and shares.",

      "what is social media algorithm":
        "Algorithm decides which content users see.",

      "what is hashtag strategy": "Hashtags improve content visibility.",

      "what is brand awareness":
        "Brand awareness shows how well users know a brand.",

      "what is online reputation management": "ORM manages brand image online.",

      "what is competitor analysis":
        "Competitor analysis studies rival strategies.",

      "what is marketing funnel": "Marketing funnel shows customer journey.",

      "what is top of funnel": "Top of funnel focuses on awareness.",

      "what is middle of funnel": "Middle of funnel focuses on consideration.",

      "what is bottom of funnel": "Bottom of funnel focuses on conversion.",

      "what is customer retention":
        "Customer retention keeps existing customers.",

      "what is roi in marketing": "ROI measures marketing profitability.",

      "what is kpi": "KPI measures performance metrics.",

      "what is analytics tracking":
        "Analytics tracking measures campaign results.",

      "what is a digital campaign":
        "A digital campaign is planned online promotion.",

      "what is marketing automation":
        "Automation uses tools to manage campaigns.",

      "what is crm": "CRM manages customer relationships.",

      "what is personalization in marketing":
        "Personalization customizes content for users.",

      "what is mobile marketing": "Mobile marketing targets mobile users.",

      "what is local seo": "Local SEO targets location-based searches.",

      "what is ecommerce marketing":
        "Ecommerce marketing promotes online stores.",

      "what is omnichannel marketing":
        "Omnichannel marketing uses multiple platforms.",

      "what is digital branding":
        "Digital branding builds online brand identity.",

      "what is growth hacking": "Growth hacking focuses on rapid growth.",

      "what is performance marketing":
        "Performance marketing pays for results.",

      "what is marketing strategy": "Marketing strategy plans business growth.",

      "what is digital marketing career":
        "Digital marketing offers roles like SEO and ads specialist.",

      "what skills required for digital marketing":
        "SEO, content, analytics, and creativity skills.",

      "what tools are used in digital marketing":
        "Tools include Google Analytics, SEMrush, and Canva.",

      "what is future of digital marketing":
        "Digital marketing will grow with AI and automation.",

      "what is arithmetic in mathematics":
        "Arithmetic is a branch of mathematics that deals with basic operations such as addition, subtraction, multiplication, and division. It is the foundation of all higher-level mathematics and is widely used in everyday calculations like money, time, and measurement.",

      "what is algebra and why it is important":
        "Algebra is a branch of mathematics that uses symbols and variables to represent numbers and relationships. It is important because it helps solve unknown values, create formulas, and understand patterns. Algebra is widely used in science, engineering, and computer programming.",

      "what is geometry":
        "Geometry is the branch of mathematics that studies shapes, sizes, angles, and properties of space. It includes concepts like points, lines, triangles, circles, and polygons. Geometry is used in architecture, construction, design, and engineering.",

      "what is trigonometry":
        "Trigonometry is a branch of mathematics that deals with the relationship between angles and sides of triangles. It is mainly used to calculate heights, distances, and angles. Trigonometry plays an important role in physics, engineering, navigation, and astronomy.",

      "what is calculus":
        "Calculus is a branch of mathematics that studies change and motion. It includes differentiation and integration, which help calculate speed, area, volume, and rate of change. Calculus is widely used in physics, economics, engineering, and data science.",

      "what is a number system":
        "A number system is a way of representing numbers using digits and symbols. Common number systems include natural numbers, whole numbers, integers, rational numbers, irrational numbers, and real numbers. Number systems help classify numbers based on their properties.",

      "what is a prime number":
        "A prime number is a natural number greater than 1 that has exactly two factors: 1 and itself. Examples include 2, 3, 5, and 7. Prime numbers are important in mathematics and are widely used in cryptography and computer security.",

      "what is a composite number":
        "A composite number is a natural number greater than 1 that has more than two factors. For example, 4, 6, and 9 are composite numbers. Composite numbers can be expressed as a product of prime numbers.",

      "what is fraction in mathematics":
        "A fraction represents a part of a whole and is written in the form of numerator and denominator. Fractions are used to represent values that are not whole numbers and are commonly used in measurements, ratios, and probability.",

      "what is decimal number":
        "A decimal number is a number expressed using a decimal point to show fractional values. Decimals are widely used in measurements, money calculations, and scientific data because they are easy to compare and compute.",

      "what is percentage and its use":
        "A percentage represents a number as a fraction of 100. It is used to compare values, show growth or loss, calculate marks, discounts, interest, and statistical data. Percentages make comparisons easier and clearer.",

      "what is ratio and proportion":
        "Ratio shows the comparison between two quantities, while proportion shows the equality of two ratios. Ratios and proportions are used in scaling, mixture problems, speed calculations, and real-life comparisons.",

      "what is probability":
        "Probability is a branch of mathematics that deals with the likelihood of an event happening. It is expressed as a number between 0 and 1. Probability is used in statistics, games, weather forecasting, and decision making.",

      "what is statistics":
        "Statistics is the branch of mathematics that deals with collecting, analyzing, interpreting, and presenting data. It helps in understanding trends, making predictions, and supporting decision making in fields like economics, business, and science.",
      "what is ipl":
        "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams",
    };

    const normallizedText = text.toLowerCase().trim();
    const botResponse =
      botResponses[normallizedText] || "Sorry, I don't understand that.!!!";
    const bot = await Bot.create({
      text: botResponse,
    });
    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text,
    });
  } catch (error) {
    console.log("Error in Message Controllers :", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
