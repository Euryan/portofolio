// Blog Posts Data
const blogPosts = {
    1: {
        category: "Achievement",
        title: "Winning My First Robotics Competition",
        date: "15 Nov 2025",
        readingTime: "5 min read",
        image: "assets/img/win1.jpg",
        content: `
            <p>It was an incredible feeling standing on that podium, holding the trophy after months of hard work and dedication. This wasn't just about winning - it was about the journey, the failures, and the lessons learned along the way.</p>
            
            <h2>The Beginning</h2>
            <p>When I first heard about the regional robotics competition, I knew I had to participate. The challenge was to build an autonomous robot capable of navigating through obstacles and completing specific tasks without human intervention.</p>
            
            <p>Our team spent countless hours in the school's robotics lab, designing, building, and testing our robot. We went through at least five different prototypes before we found a design that actually worked reliably.</p>
            
            <h2>The Challenges We Faced</h2>
            <p>The road wasn't easy. Our biggest challenge was getting the sensors to work reliably. The ultrasonic sensors kept giving false readings, and our line-following algorithm needed constant tweaking.</p>
            
            <blockquote>"Failure is not the opposite of success; it's part of success." - This quote kept us going through the toughest moments.</blockquote>
            
            <h2>Competition Day</h2>
            <p>The day of the competition was nerve-wracking. We competed against 25 other teams, each with impressive robots. Our robot performed almost flawlessly in the preliminary rounds, which boosted our confidence for the finals.</p>
            
            <p>In the final round, everything came together perfectly. Our robot completed the course in record time, and the autonomous navigation system worked exactly as we had programmed it.</p>
            
            <h2>What I Learned</h2>
            <p>This experience taught me several valuable lessons:</p>
            <ul>
                <li><strong>Teamwork is essential:</strong> No one can build a complex robot alone. Each team member brought unique skills to the table.</li>
                <li><strong>Persistence pays off:</strong> We failed many times, but each failure taught us something new.</li>
                <li><strong>Planning is crucial:</strong> Good documentation and systematic testing saved us countless hours.</li>
                <li><strong>Stay calm under pressure:</strong> Competition day requires a cool head and quick problem-solving skills.</li>
            </ul>
            
            <p>This victory has inspired me to continue pursuing robotics and participate in even more challenging competitions in the future. The field of robotics combines so many things I'm passionate about - programming, electronics, mechanical design, and problem-solving.</p>
            
            <p>To anyone thinking about getting into robotics: just start! Don't wait for the perfect moment or the perfect resources. Start with what you have, learn as you go, and never stop improving.</p>
        `
    },
    2: {
        category: "Learning Journey",
        title: "My Journey into Machine Learning",
        date: "02 Nov 2025",
        readingTime: "6 min read",
        image: "assets/img/blog2.jpg",
        content: `
            <p>Machine Learning seemed like magic to me at first. How could a computer learn to recognize objects, predict outcomes, or even drive cars? This curiosity led me down a fascinating rabbit hole that has completely changed how I think about technology.</p>
            
            <h2>Starting from Zero</h2>
            <p>I'll be honest - starting with ML was intimidating. The mathematics, the terminology, the complex algorithms - it all seemed overwhelming. But I decided to take it one step at a time, starting with the basics.</p>
            
            <p>My first project was a simple image classifier using pre-trained models. Seeing the computer correctly identify objects in images felt like witnessing actual magic. That moment hooked me completely.</p>
            
            <h2>Learning Path</h2>
            <p>Here's how I approached learning ML as a high school student:</p>
            <ol>
                <li><strong>Mathematics Foundation:</strong> I strengthened my understanding of linear algebra, calculus, and statistics through online resources.</li>
                <li><strong>Python Programming:</strong> ML in Python is incredibly accessible thanks to libraries like TensorFlow and scikit-learn.</li>
                <li><strong>Online Courses:</strong> I took several free courses that explained concepts in beginner-friendly ways.</li>
                <li><strong>Hands-on Projects:</strong> Theory is important, but nothing beats actually building something.</li>
            </ol>
            
            <h2>My First Real Project: Object Detection with YOLO</h2>
            <p>After learning the basics, I wanted to build something practical. I chose to implement a YOLO (You Only Look Once) object detection system that could identify and track objects in real-time video.</p>
            
            <p>The project was challenging but incredibly rewarding. I learned about:</p>
            <ul>
                <li>Convolutional Neural Networks (CNNs)</li>
                <li>Transfer learning and using pre-trained models</li>
                <li>Real-time video processing</li>
                <li>Model optimization for better performance</li>
            </ul>
            
            <blockquote>"The best way to learn Machine Learning is to do Machine Learning." - This became my mantra.</blockquote>
            
            <h2>Challenges and Breakthroughs</h2>
            <p>Not everything went smoothly. I struggled with understanding backpropagation for weeks. Training models on my laptop took forever. Sometimes results were disappointing.</p>
            
            <p>But each challenge taught me something new. I learned to be patient with the learning process, to debug systematically, and to celebrate small victories.</p>
            
            <h2>What's Next?</h2>
            <p>I'm now working on more advanced projects, including a machine learning model for predictive maintenance in IoT systems. The journey has just begun, and I'm excited to see where it leads.</p>
            
            <p>To anyone interested in ML: don't be intimidated by the complexity. Start small, be consistent, and enjoy the learning process. The field is more accessible than ever before!</p>
        `
    },
    3: {
        category: "Reflection",
        title: "Why Ethical Technology Matters to Me",
        date: "20 Oct 2025",
        readingTime: "4 min read",
        image: "assets/img/blog3.jpg",
        content: `
            <p>As someone passionate about technology, I often get caught up in the excitement of building new things. But lately, I've been thinking deeply about the responsibility that comes with creating technology.</p>
            
            <h2>A Wake-Up Call</h2>
            <p>My perspective shifted when I read about how certain technologies were being used in ways their creators never intended - sometimes causing harm to individuals and communities.</p>
            
            <p>This made me realize: it's not enough to build something that works. We need to think about how it will be used, who it will affect, and what unintended consequences it might have.</p>
            
            <h2>What Ethical Technology Means to Me</h2>
            <p>For me, ethical technology is about:</p>
            <ul>
                <li><strong>Privacy First:</strong> Respecting user data and only collecting what's absolutely necessary.</li>
                <li><strong>Transparency:</strong> Being open about how systems work and what data they use.</li>
                <li><strong>Inclusivity:</strong> Building technology that works for everyone, not just a privileged few.</li>
                <li><strong>Accessibility:</strong> Making sure people with disabilities can use what we build.</li>
                <li><strong>Environmental Impact:</strong> Considering the carbon footprint of our digital solutions.</li>
            </ul>
            
            <blockquote>"Technology is neither good nor bad; nor is it neutral." - We must actively choose to make it good.</blockquote>
            
            <h2>Applying This to My Projects</h2>
            <p>Now, before starting any project, I ask myself:</p>
            <ul>
                <li>Who will benefit from this?</li>
                <li>Could this be misused? How can I prevent that?</li>
                <li>Am I collecting only necessary data?</li>
                <li>Is this accessible to everyone?</li>
                <li>What's the environmental cost?</li>
            </ul>
            
            <h2>The IoT Privacy Challenge</h2>
            <p>In my IoT projects, I've become particularly conscious about security. IoT devices can be vulnerable entry points for hackers. I now spend extra time implementing encryption, secure authentication, and regular security updates.</p>
            
            <h2>My Commitment</h2>
            <p>I'm committed to building technology that:</p>
            <ul>
                <li>Solves real problems for real people</li>
                <li>Respects privacy and security</li>
                <li>Is transparent in its operation</li>
                <li>Considers environmental impact</li>
                <li>Works for diverse users</li>
            </ul>
            
            <p>This isn't always easy. Sometimes ethical choices mean slower development or more complex solutions. But I believe it's worth it.</p>
            
            <p>As young technologists, we have the opportunity to shape the future. Let's make sure it's a future we can be proud of.</p>
        `
    },
    4: {
        category: "Experience",
        title: "Building My First IoT Home Automation System",
        date: "05 Oct 2025",
        readingTime: "7 min read",
        image: "assets/img/blog4.jpg",
        content: `
            <p>There's something magical about walking into your room and having the lights turn on automatically, or controlling your home appliances from your phone. That magic drove me to build my own IoT home automation system from scratch.</p>
            
            <h2>The Vision</h2>
            <p>I wanted to create a system that could:</p>
            <ul>
                <li>Control lights, fans, and other appliances remotely</li>
                <li>Monitor room temperature and humidity</li>
                <li>Detect motion and send alerts</li>
                <li>Work with voice commands</li>
                <li>Be accessible through a web interface</li>
            </ul>
            
            <h2>Choosing the Technology Stack</h2>
            <p>After researching various options, I settled on:</p>
            <ul>
                <li><strong>ESP32</strong> microcontrollers for their WiFi capabilities and processing power</li>
                <li><strong>MQTT protocol</strong> for lightweight, reliable device communication</li>
                <li><strong>Node-RED</strong> for creating the automation logic</li>
                <li><strong>Flask</strong> for the web interface</li>
                <li><strong>Firebase</strong> for cloud database and real-time updates</li>
            </ul>
            
            <h2>The Hardware Setup</h2>
            <p>I started with a simple circuit controlling a single LED. Once that worked, I gradually added:</p>
            <ul>
                <li>Relay modules for controlling AC appliances</li>
                <li>DHT22 sensors for temperature and humidity</li>
                <li>PIR sensors for motion detection</li>
                <li>RGB LED strips for mood lighting</li>
            </ul>
            
            <p>Each component taught me something new about electronics, power management, and circuit design.</p>
            
            <h2>The Software Challenge</h2>
            <p>Getting the hardware to work was one thing; creating intuitive software was another challenge entirely.</p>
            
            <h3>MQTT Broker Configuration</h3>
            <p>I set up a Mosquitto MQTT broker on a Raspberry Pi. Learning about topics, subscriptions, and QoS levels took time, but MQTT's pub-sub model is perfect for IoT.</p>
            
            <h3>ESP32 Programming</h3>
            <p>I wrote firmware in Arduino C++ that:</p>
            <ul>
                <li>Connects to WiFi reliably (with auto-reconnect)</li>
                <li>Subscribes to relevant MQTT topics</li>
                <li>Publishes sensor data at regular intervals</li>
                <li>Handles Over-The-Air (OTA) updates</li>
            </ul>
            
            <h3>Web Dashboard</h3>
            <p>The Flask web app provides:</p>
            <ul>
                <li>Real-time device status</li>
                <li>Manual control switches</li>
                <li>Historical sensor data graphs</li>
                <li>Automation rule creation</li>
                <li>System logs and notifications</li>
            </ul>
            
            <blockquote>"The smart home isn't about technology - it's about making life simpler and more comfortable."</blockquote>
            
            <h2>Challenges I Overcame</h2>
            <p><strong>Power Management:</strong> ESP32 boards can drain batteries quickly. I implemented deep sleep modes and optimized WiFi usage to extend battery life.</p>
            
            <p><strong>Network Reliability:</strong> WiFi isn't always stable. I added reconnection logic and local fallback controls so devices work even without internet.</p>
            
            <p><strong>Security:</strong> IoT devices are security risks. I implemented:</p>
            <ul>
                <li>TLS encryption for MQTT</li>
                <li>Strong authentication</li>
                <li>Regular firmware updates</li>
                <li>Network segmentation</li>
            </ul>
            
            <h2>Cool Features I Added</h2>
            <p><strong>Sunrise Simulation:</strong> Lights gradually brighten in the morning to wake me up naturally.</p>
            
            <p><strong>Presence Detection:</strong> The system knows when I'm home and adjusts settings automatically.</p>
            
            <p><strong>Energy Monitoring:</strong> Tracks power consumption and suggests ways to save energy.</p>
            
            <p><strong>Voice Control:</strong> Integration with Google Assistant for hands-free control.</p>
            
            <h2>Lessons Learned</h2>
            <ul>
                <li>Start simple and iterate - don't try to build everything at once</li>
                <li>Document everything - you'll forget why you made certain decisions</li>
                <li>Test extensively - edge cases will break your system</li>
                <li>Security first - IoT devices are vulnerable</li>
                <li>User experience matters - the best tech is invisible</li>
            </ul>
            
            <h2>What's Next?</h2>
            <p>I'm planning to add:</p>
            <ul>
                <li>Machine learning for predictive automation</li>
                <li>Integration with more devices</li>
                <li>Better energy efficiency</li>
                <li>Mobile app for easier control</li>
            </ul>
            
            <p>Building this system taught me more than any course could. If you're interested in IoT, just start building something - even if it's small. The learning journey is incredibly rewarding!</p>
        `
    },
    5: {
        category: "Milestone",
        title: "Completing My First Web Development Project",
        date: "18 Sep 2025",
        readingTime: "5 min read",
        image: "assets/img/blog5.jpg",
        content: `
            <p>Six months ago, I couldn't write a single line of HTML. Today, I've just launched a fully functional web application that's being used by real people. This is the story of that journey.</p>
            
            <h2>How It Started</h2>
            <p>Our school needed a better system for managing club activities and event registrations. The existing process involved paper forms, manual data entry, and constant confusion about schedules.</p>
            
            <p>I saw an opportunity to solve a real problem while learning web development. So I proposed building a web app for the school's activity management.</p>
            
            <h2>The Learning Curve</h2>
            <p>I started from absolute zero. My learning path looked like this:</p>
            
            <h3>Month 1-2: The Basics</h3>
            <ul>
                <li>HTML structure and semantic elements</li>
                <li>CSS styling and responsive design</li>
                <li>JavaScript fundamentals</li>
                <li>Git and version control</li>
            </ul>
            
            <h3>Month 3-4: Building Dynamic Features</h3>
            <ul>
                <li>Flask framework for the backend</li>
                <li>MySQL database design</li>
                <li>User authentication</li>
                <li>Form validation and error handling</li>
            </ul>
            
            <h3>Month 5-6: Polish and Deploy</h3>
            <ul>
                <li>Improving UI/UX based on feedback</li>
                <li>Adding advanced features</li>
                <li>Security hardening</li>
                <li>Deployment and monitoring</li>
            </ul>
            
            <h2>Key Features I Built</h2>
            <p><strong>User Management:</strong> Different roles for students, club leaders, and administrators with appropriate permissions.</p>
            
            <p><strong>Event Creation:</strong> Club leaders can create events with details, dates, locations, and participant limits.</p>
            
            <p><strong>Registration System:</strong> Students can browse events and register with just a few clicks.</p>
            
            <p><strong>Dashboard:</strong> Personalized views showing upcoming events, registration status, and activity history.</p>
            
            <p><strong>Notifications:</strong> Email alerts for event reminders, registration confirmations, and updates.</p>
            
            <blockquote>"The best projects are the ones that solve real problems for real people."</blockquote>
            
            <h2>Challenges That Made Me Better</h2>
            <p><strong>Database Design:</strong> Figuring out table relationships and normalization was confusing at first. I had to redesign my database schema three times before getting it right.</p>
            
            <p><strong>Responsive Design:</strong> Making the site work perfectly on phones, tablets, and desktops required patience and lots of testing.</p>
            
            <p><strong>Security:</strong> Learning about SQL injection, XSS attacks, and CSRF protection was eye-opening. I realized security can't be an afterthought.</p>
            
            <p><strong>User Feedback:</strong> My first design<p><strong>User Feedback:</strong> My first design was terrible - I thought it looked great, but users found it confusing. Learning to accept criticism and iterate based on feedback was humbling but essential.</p>
            
            <h2>The Deployment Day</h2>
            <p>Deploying to production was nerve-wracking. I triple-checked everything:</p>
            <ul>
                <li>Database backups in place</li>
                <li>SSL certificate configured</li>
                <li>Error logging set up</li>
                <li>Performance optimization done</li>
                <li>Security measures implemented</li>
            </ul>
            
            <p>When I finally pressed that deploy button and saw the site live, it felt surreal. Real people could now access something I built!</p>
            
            <h2>The Impact</h2>
            <p>Within the first month:</p>
            <ul>
                <li>Over 200 students registered on the platform</li>
                <li>15 clubs started using it for event management</li>
                <li>Event registration time reduced from 10 minutes to under 1 minute</li>
                <li>Paper waste eliminated completely</li>
                <li>Administrative workload decreased by 60%</li>
            </ul>
            
            <p>Seeing actual people benefit from something I created was incredibly rewarding. Teachers thanked me, students found it useful, and I even got feature requests!</p>
            
            <h2>Mistakes I Made</h2>
            <p>I want to be honest about what didn't go well:</p>
            <ul>
                <li><strong>Not testing enough:</strong> Some bugs made it to production that better testing would have caught</li>
                <li><strong>Overcomplicating things:</strong> I added features no one asked for instead of perfecting core functionality</li>
                <li><strong>Poor documentation:</strong> I didn't document my code well, making updates harder than necessary</li>
                <li><strong>Ignoring scalability:</strong> Some design choices don't scale well as user numbers grow</li>
            </ul>
            
            <h2>What I Learned</h2>
            <p><strong>Start with user needs:</strong> Talk to users first, build second. Understanding the problem is more important than jumping into code.</p>
            
            <p><strong>Embrace iteration:</strong> Version 1.0 doesn't need to be perfect. Launch with core features and improve based on feedback.</p>
            
            <p><strong>Code quality matters:</strong> Clean, documented code saves time in the long run. Future you will thank present you.</p>
            
            <p><strong>Testing is not optional:</strong> Proper testing catches bugs before users do. Invest time in writing tests.</p>
            
            <p><strong>Security is paramount:</strong> One security flaw can compromise everything. Always code with security in mind.</p>
            
            <h2>Technical Stack Details</h2>
            <p>For anyone curious, here's what I used:</p>
            <ul>
                <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (vanilla)</li>
                <li><strong>Backend:</strong> Python Flask</li>
                <li><strong>Database:</strong> MySQL</li>
                <li><strong>Authentication:</strong> Flask-Login with password hashing</li>
                <li><strong>Email:</strong> SMTP integration for notifications</li>
                <li><strong>Deployment:</strong> Linux VPS with Nginx as reverse proxy</li>
            </ul>
            
            <h2>Ongoing Improvements</h2>
            <p>The project isn't finished - it's continuously evolving. Current roadmap includes:</p>
            <ul>
                <li>Mobile app for better accessibility</li>
                <li>Calendar integration (Google Calendar, iCal)</li>
                <li>Analytics dashboard for club leaders</li>
                <li>Automated attendance tracking using QR codes</li>
                <li>Integration with school's existing systems</li>
            </ul>
            
            <h2>Advice for Beginners</h2>
            <p>If you're thinking about learning web development:</p>
            <ul>
                <li><strong>Just start:</strong> Don't wait until you know everything. Learn by doing.</li>
                <li><strong>Build real projects:</strong> Tutorials are great, but building something real teaches you more.</li>
                <li><strong>Don't compare:</strong> Everyone starts somewhere. Focus on your own progress.</li>
                <li><strong>Ask for help:</strong> The developer community is incredibly supportive. Don't struggle alone.</li>
                <li><strong>Read others' code:</strong> GitHub is a goldmine of learning opportunities.</li>
            </ul>
            
            <blockquote>"The expert in anything was once a beginner."</blockquote>
            
            <h2>What's Next for Me?</h2>
            <p>This project opened my eyes to the power of web development. I'm now exploring:</p>
            <ul>
                <li>Modern JavaScript frameworks (React, Vue)</li>
                <li>Progressive Web Apps (PWAs)</li>
                <li>API development and microservices</li>
                <li>Cloud platforms (AWS, Google Cloud)</li>
                <li>DevOps practices</li>
            </ul>
            
            <p>Completing this project proved to me that with dedication, patience, and persistence, anyone can learn to build meaningful software. If I can do it, so can you!</p>
            
            <p>The journey from "Hello World" to a production web application was challenging, frustrating at times, but ultimately one of the most rewarding experiences of my life. Here's to many more projects ahead! 🚀</p>
        `
    },
    6: {
        category: "Personal Growth",
        title: "Balancing School, Projects, and Personal Life",
        date: "01 Sep 2025",
        readingTime: "6 min read",
        image: "assets/img/blog6.jpg",
        content: `
            <p>Being passionate about technology while trying to maintain good grades, work on personal projects, and still have a life - it's not easy. Here's how I'm learning to balance it all without burning out.</p>
            
            <h2>The Struggle is Real</h2>
            <p>Last semester, I learned this lesson the hard way. I was working on three projects simultaneously, had regular school assignments, was preparing for competitions, and trying to maintain some semblance of a social life.</p>
            
            <p>The result? I was exhausted, stressed, and ironically less productive. Something had to change.</p>
            
            <h2>My Current System</h2>
            <p>After much trial and error, here's what works for me:</p>
            
            <h3>1. Time Blocking</h3>
            <p>I divide my day into blocks dedicated to specific activities:</p>
            <ul>
                <li><strong>6:00 AM - 7:00 AM:</strong> Morning routine, exercise</li>
                <li><strong>7:00 AM - 2:00 PM:</strong> School (focused learning mode)</li>
                <li><strong>3:00 PM - 4:00 PM:</strong> Homework and school assignments</li>
                <li><strong>4:00 PM - 6:30 PM:</strong> Personal projects and coding</li>
                <li><strong>7:00 PM - 8:00 PM:</strong> Dinner and family time</li>
                <li><strong>8:00 PM - 9:30 PM:</strong> Learning time (courses, reading, tutorials)</li>
                <li><strong>9:30 PM - 10:00 PM:</strong> Planning for tomorrow, reflection</li>
                <li><strong>10:00 PM:</strong> Sleep (non-negotiable!)</li>
            </ul>
            
            <p>This isn't rigid - life happens - but having a structure helps tremendously.</p>
            
            <h3>2. The One-Project Rule</h3>
            <p>I used to start multiple projects at once, finishing none. Now I follow a simple rule: <strong>focus on one major project at a time.</strong></p>
            
            <p>Side experiments are fine, but I commit to completing one significant project before starting another. This has dramatically improved my completion rate.</p>
            
            <h3>3. Weekend Planning</h3>
            <p>Every Sunday evening, I plan the upcoming week:</p>
            <ul>
                <li>What are my school priorities?</li>
                <li>What project milestone can I reach?</li>
                <li>What can I defer or eliminate?</li>
                <li>When will I rest and recharge?</li>
            </ul>
            
            <blockquote>"You can do anything, but not everything." - Learning to prioritize was my biggest breakthrough.</blockquote>
            
            <h2>Strategies That Help</h2>
            
            <h3>Deep Work Sessions</h3>
            <p>Instead of constantly checking my phone while coding, I do 90-minute deep work sessions:</p>
            <ul>
                <li>Phone on airplane mode</li>
                <li>Notifications disabled</li>
                <li>Clear goal for the session</li>
                <li>No social media</li>
            </ul>
            
            <p>I accomplish more in one focused 90-minute session than in 4 hours of distracted work.</p>
            
            <h3>The 2-Minute Rule</h3>
            <p>If something takes less than 2 minutes, I do it immediately. This prevents small tasks from piling up and becoming overwhelming.</p>
            
            <h3>Learning to Say No</h3>
            <p>This was hard, but necessary. I can't participate in every competition, join every club, or work on every interesting project. Saying no to good opportunities means saying yes to great ones.</p>
            
            <h3>Batch Similar Tasks</h3>
            <p>Instead of switching contexts constantly, I batch similar tasks:</p>
            <ul>
                <li>All homework for one subject at once</li>
                <li>Respond to all emails in one sitting</li>
                <li>Code review and documentation together</li>
            </ul>
            
            <h2>Taking Care of Myself</h2>
            
            <h3>Sleep is Non-Negotiable</h3>
            <p>I used to pull all-nighters thinking I was being productive. I was wrong. Now I prioritize 7-8 hours of sleep. My productivity, creativity, and problem-solving ability are all better when I'm well-rested.</p>
            
            <h3>Exercise Daily</h3>
            <p>30 minutes of exercise in the morning energizes me for the entire day. It's not about being fit - it's about mental clarity and stress relief.</p>
            
            <h3>Actual Breaks</h3>
            <p>Scrolling social media isn't a break - it's just different stimulation. Real breaks include:</p>
            <ul>
                <li>Walking outside</li>
                <li>Reading fiction</li>
                <li>Playing music</li>
                <li>Talking to friends face-to-face</li>
            </ul>
            
            <h2>Handling School vs. Projects</h2>
            
            <h3>School Comes First (Sort Of)</h3>
            <p>My rule: maintain a baseline grade level (for me, it's B+ or higher). Once that's secured, I allocate more time to projects. If grades slip, projects take a backseat temporarily.</p>
            
            <h3>Make School Work Count for Projects</h3>
            <p>Whenever possible, I align school assignments with my project interests:</p>
            <ul>
                <li>Science fair projects related to IoT</li>
                <li>Math presentations using programming</li>
                <li>Research papers on ethical technology</li>
            </ul>
            
            <p>This way, school work also advances my personal learning goals.</p>
            
            <h2>Social Life Matters</h2>
            <p>I used to think socializing was wasted time. I was completely wrong. Time with friends and family:</p>
            <ul>
                <li>Reduces stress and prevents burnout</li>
                <li>Provides fresh perspectives</li>
                <li>Reminds me why I'm doing all this</li>
                <li>Builds relationships that matter long-term</li>
            </ul>
            
            <p>I now protect my social time as fiercely as my project time.</p>
            
            <h2>Tools That Help</h2>
            <ul>
                <li><strong>Notion:</strong> For project management and note-taking</li>
                <li><strong>Google Calendar:</strong> Time blocking and scheduling</li>
                <li><strong>Forest App:</strong> Staying focused during deep work</li>
                <li><strong>Todoist:</strong> Task management and tracking</li>
                <li><strong>RescueTime:</strong> Understanding where my time actually goes</li>
            </ul>
            
            <h2>When Things Don't Go as Planned</h2>
            <p>Some weeks everything falls apart. Unexpected school assignments pile up, projects hit roadblocks, or I just feel overwhelmed.</p>
            
            <p>When this happens, I:</p>
            <ul>
                <li>Step back and reassess priorities</li>
                <li>Ask for help (from teachers, parents, friends)</li>
                <li>Accept that perfection isn't possible</li>
                <li>Focus on the most important thing only</li>
                <li>Give myself permission to rest</li>
            </ul>
            
            <blockquote>"Balance is not something you find, it's something you create." - It requires constant adjustment.</blockquote>
            
            <h2>Lessons Learned</h2>
            <ul>
                <li><strong>Sustainability beats intensity:</strong> Consistent small efforts beat sporadic intense bursts</li>
                <li><strong>Rest is productive:</strong> Downtime isn't laziness - it's necessary for creativity and problem-solving</li>
                <li><strong>Quality over quantity:</strong> Better to do one thing well than many things poorly</li>
                <li><strong>Self-awareness is key:</strong> Know your energy patterns and work with them, not against them</li>
                <li><strong>Flexibility is essential:</strong> Rigid plans break. Adaptable systems survive</li>
            </ul>
            
            <h2>My Current Challenges</h2>
            <p>I'm still working on:</p>
            <ul>
                <li>Reducing time spent on social media</li>
                <li>Being more present during family time</li>
                <li>Not feeling guilty when taking breaks</li>
                <li>Setting better boundaries</li>
                <li>Improving my sleep schedule consistency</li>
            </ul>
            
            <h2>Advice for Fellow Students</h2>
            <p><strong>Experiment:</strong> What works for me might not work for you. Try different systems and find your own rhythm.</p>
            
            <p><strong>Be patient:</strong> Building good habits takes time. Don't expect perfection immediately.</p>
            
            <p><strong>Track everything:</strong> You can't improve what you don't measure. Track your time for a week - the results might surprise you.</p>
            
            <p><strong>Forgive yourself:</strong> You'll have bad days. That's okay. What matters is getting back on track.</p>
            
            <p><strong>Remember why:</strong> When motivation dips, reconnect with why you started learning technology in the first place.</p>
            
            <h2>Final Thoughts</h2>
            <p>Balance isn't about perfect equal distribution of time. It's about being present in whatever you're doing, knowing your limits, and making conscious choices about where to invest your energy.</p>
            
            <p>I'm still figuring this out - probably will be for years to come. But the journey of learning to balance passion, responsibility, and wellbeing is valuable in itself.</p>
            
            <p>To anyone struggling with similar challenges: you're not alone. We're all trying to figure this out. Be kind to yourself, keep adjusting, and remember that progress, not perfection, is the goal. 💪</p>
        `
    }
};

// Open Blog Modal Function
function openBlogModal(blogId) {
    const modal = document.getElementById('blogModal');
    const blog = blogPosts[blogId];
    
    if (!blog) return;
    
    // Populate modal content
    document.getElementById('blogModalCategory').textContent = blog.category;
    document.getElementById('blogModalTitle').textContent = blog.title;
    document.getElementById('blogModalDate').textContent = blog.date;
    document.getElementById('blogModalReadingTime').textContent = blog.readingTime;
    document.getElementById('blogModalImage').src = blog.image;
    document.getElementById('blogModalImage').alt = blog.title;
    document.getElementById('blogModalContent').innerHTML = blog.content;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Scroll to top of modal content
    document.querySelector('.blog-modal-body').scrollTop = 0;
}

// Close Blog Modal Function
function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}