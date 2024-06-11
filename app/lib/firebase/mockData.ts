import { Graduate, GraduateUid } from '../types';

export const codeworks_graduates: GraduateUid[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    title:"Full-Stack Developer",
    phone: "+1234567890",
    graduationYear: 2023,
    program: "Full-Stack Development",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    location: "San Francisco, CA",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    bio: "A passionate full-stack developer with a knack for creating efficient and scalable web applications.",
    projects: [
      {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        url: "https://johndoe.com"
      },
      {
        title: "E-commerce Platform",
        description: "A fully-functional e-commerce platform built with MERN stack.",
        url: "https://github.com/johndoe/ecommerce-platform"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    title:"Data Scientist",
    phone: "+0987654321",
    graduationYear: 2022,
    program: "Data Science",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning", "Data Visualization"],
    location: "New York, NY",
    linkedin: "https://www.linkedin.com/in/janesmith",
    github: "https://github.com/janesmith",
    bio: "Data scientist with a passion for uncovering insights from data and building predictive models.",
    projects: [
      {
        title: "Sales Prediction Model",
        description: "A machine learning model to predict sales based on historical data.",
        url: "https://github.com/janesmith/sales-prediction"
      },
      {
        title: "Customer Segmentation",
        description: "A project to segment customers based on their purchasing behavior using clustering techniques.",
        url: "https://github.com/janesmith/customer-segmentation"
      }
    ],
    availability: "Not Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    title:"UI/UX Designer",
    phone: "+1122334455",
    graduationYear: 2021,
    program: "UI/UX Design",
    skills: ["Sketch", "Figma", "Adobe XD", "User Research", "Prototyping"],
    location: "Austin, TX",
    linkedin: "https://www.linkedin.com/in/alicejohnson",
    github: "https://github.com/alicejohnson",
    bio: "UI/UX designer dedicated to creating user-centered designs that solve real-world problems.",
    projects: [
      {
        title: "Mobile App Design",
        description: "Designed a mobile app for a food delivery service, focusing on user experience and interface design.",
        url: "https://dribbble.com/shots/12345678-Mobile-App-Design"
      },
      {
        title: "Website Redesign",
        description: "Led the redesign of a corporate website to improve usability and visual appeal.",
        url: "https://dribbble.com/shots/87654321-Website-Redesign"
      }
    ],
    availability: "Freelancing",
    profileImageUrl: "https://i.pravatar.cc/150?img=3"
  },
  // Adding more graduate profiles
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    title:"Cyber Security Analyst",
    phone: "+3344556677",
    graduationYear: 2023,
    program: "Cybersecurity",
    skills: ["Network Security", "Penetration Testing", "Cryptography", "Python"],
    location: "Los Angeles, CA",
    linkedin: "https://www.linkedin.com/in/bobbrown",
    github: "https://github.com/bobbrown",
    bio: "Cybersecurity expert with a focus on protecting systems and networks from cyber threats.",
    projects: [
      {
        title: "Vulnerability Scanner",
        description: "Developed a tool to scan and identify vulnerabilities in web applications.",
        url: "https://github.com/bobbrown/vulnerability-scanner"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=4"
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    title:"DevOps Engineer",
    phone: "+4455667788",
    graduationYear: 2022,
    program: "DevOps Engineering",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"],
    location: "Seattle, WA",
    linkedin: "https://www.linkedin.com/in/charliedavis",
    github: "https://github.com/charliedavis",
    bio: "DevOps engineer with expertise in automating and optimizing mission-critical deployments.",
    projects: [
      {
        title: "CI/CD Pipeline",
        description: "Implemented a robust CI/CD pipeline to automate software deployments.",
        url: "https://github.com/charliedavis/cicd-pipeline"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Diana Evans",
    email: "diana.evans@example.com",
    title:"Mobile App Developer",
    phone: "+5566778899",
    graduationYear: 2023,
    program: "Mobile App Development",
    skills: ["Flutter", "Dart", "iOS", "Android"],
    location: "Chicago, IL",
    linkedin: "https://www.linkedin.com/in/dianaevans",
    github: "https://github.com/dianaevans",
    bio: "Mobile app developer with a focus on building cross-platform applications using Flutter.",
    projects: [
      {
        title: "Fitness Tracker",
        description: "Developed a cross-platform fitness tracking app using Flutter.",
        url: "https://github.com/dianaevans/fitness-tracker"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=6"
  },
  {
    name: "Ethan Foster",
    email: "ethan.foster@example.com",
    title:"Data Engineer",
    phone: "+6677889900",
    graduationYear: 2021,
    program: "Data Engineering",
    skills: ["SQL", "Python", "Big Data", "ETL", "Apache Spark"],
    location: "Boston, MA",
    linkedin: "https://www.linkedin.com/in/ethanfoster",
    github: "https://github.com/ethanfoster",
    bio: "Data engineer specialized in building data pipelines and ensuring data quality.",
    projects: [
      {
        title: "Data Lakehouse",
        description: "Built a scalable data lakehouse to consolidate and analyze large datasets.",
        url: "https://github.com/ethanfoster/data-lakehouse"
      }
    ],
    availability: "Not Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=7"
  },
  {
    name: "Fiona Green",
    email: "fiona.green@example.com",
    title:"Data Engineer",
    phone: "+7788990011",
    graduationYear: 2023,
    program: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    location: "San Diego, CA",
    linkedin: "https://www.linkedin.com/in/fionagreen",
    github: "https://github.com/fionagreen",
    bio: "Machine learning engineer passionate about developing AI models for various applications.",
    projects: [
      {
        title: "Image Classifier",
        description: "Created an image classification model using convolutional neural networks.",
        url: "https://github.com/fionagreen/image-classifier"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=8"
  },
  {
    name: "George Harris",
    email: "george.harris@example.com",
    title:"Backend Developer",
    phone: "+8899001122",
    graduationYear: 2022,
    program: "Backend Development",
    skills: ["Java", "Spring Boot", "Microservices", "MySQL"],
    location: "Dallas, TX",
    linkedin: "https://www.linkedin.com/in/georgeharris",
    github: "https://github.com/georgeharris",
    bio: "Backend developer with a focus on building scalable and reliable server-side applications.",
    projects: [
      {
        title: "RESTful API",
        description: "Developed a RESTful API for an e-commerce application using Spring Boot.",
        url: "https://github.com/georgeharris/restful-api"
      }
    ],
    availability: "Freelancing",
    profileImageUrl: "https://i.pravatar.cc/150?img=9"
  },
  {
    name: "Hannah Lee",
    email: "hannah.lee@example.com",
    title:"Frontend Developer",
    phone: "+9900112233",
    graduationYear: 2021,
    program: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    location: "Miami, FL",
    linkedin: "https://www.linkedin.com/in/hannahlee",
    github: "https://github.com/hannahlee",
    bio: "Frontend developer passionate about creating responsive and user-friendly web interfaces.",
    projects: [
      {
        title: "Personal Blog",
        description: "Built a personal blog using React and Gatsby.",
        url: "https://github.com/hannahlee/personal-blog"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=10"
  },
  {
    name: "Ivan Martinez",
    email: "ivan.martinez@example.com",
    title:"Full-Stack Developer",
    phone: "+1011122334",
    graduationYear: 2023,
    program: "Full-Stack Development",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    location: "San Francisco, CA",
    linkedin: "https://www.linkedin.com/in/ivanmartinez",
    github: "https://github.com/ivanmartinez",
    bio: "Full-stack developer with a passion for creating efficient and scalable web applications.",
    projects: [
      {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        url: "https://ivanmartinez.com"
      },
      {
        title: "E-commerce Platform",
        description: "A fully-functional e-commerce platform built with MERN stack.",
        url: "https://github.com/ivanmartinez/ecommerce-platform"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Julia Nelson",
    email: "julia.nelson@example.com",
    title:"Data Scientist",
    phone: "+1112233445",
    graduationYear: 2022,
    program: "Data Science",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning", "Data Visualization"],
    location: "New York, NY",
    linkedin: "https://www.linkedin.com/in/julianelson",
    github: "https://github.com/julianelson",
    bio: "Data scientist with a passion for uncovering insights from data and building predictive models.",
    projects: [
      {
        title: "Sales Prediction Model",
        description: "A machine learning model to predict sales based on historical data.",
        url: "https://github.com/julianelson/sales-prediction"
      },
      {
        title: "Customer Segmentation",
        description: "A project to segment customers based on their purchasing behavior using clustering techniques.",
        url: "https://github.com/julianelson/customer-segmentation"
      }
    ],
    availability: "Not Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Kevin O'Brien",
    email: "kevin.obrien@example.com",
    title:"UI/UX Designer",
    phone: "+1213344556",
    graduationYear: 2021,
    program: "UI/UX Design",
    skills: ["Sketch", "Figma", "Adobe XD", "User Research", "Prototyping"],
    location: "Austin, TX",
    linkedin: "https://www.linkedin.com/in/kevinobrien",
    github: "https://github.com/kevinobrien",
    bio: "UI/UX designer dedicated to creating user-centered designs that solve real-world problems.",
    projects: [
      {
        title: "Mobile App Design",
        description: "Designed a mobile app for a food delivery service, focusing on user experience and interface design.",
        url: "https://dribbble.com/shots/12345678-Mobile-App-Design"
      },
      {
        title: "Website Redesign",
        description: "Led the redesign of a corporate website to improve usability and visual appeal.",
        url: "https://dribbble.com/shots/87654321-Website-Redesign"
      }
    ],
    availability: "Freelancing",
    profileImageUrl: "https://i.pravatar.cc/150?img=13"
  },
  {
    name: "Laura Perez",
    email: "laura.perez@example.com",
    title:"Cybersecurity Analyst",
    phone: "+1314455667",
    graduationYear: 2023,
    program: "Cybersecurity",
    skills: ["Network Security", "Penetration Testing", "Cryptography", "Python"],
    location: "Los Angeles, CA",
    linkedin: "https://www.linkedin.com/in/lauraperez",
    github: "https://github.com/lauraperez",
    bio: "Cybersecurity expert with a focus on protecting systems and networks from cyber threats.",
    projects: [
      {
        title: "Vulnerability Scanner",
        description: "Developed a tool to scan and identify vulnerabilities in web applications.",
        url: "https://github.com/lauraperez/vulnerability-scanner"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=14"
  },
  {
    name: "Michael Quinn",
    email: "michael.quinn@example.com",
    title:"DevOps Engineer",
    phone: "+1415566778",
    graduationYear: 2022,
    program: "DevOps Engineering",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"],
    location: "Seattle, WA",
    linkedin: "https://www.linkedin.com/in/michaelquinn",
    github: "https://github.com/michaelquinn",
    bio: "DevOps engineer with expertise in automating and optimizing mission-critical deployments.",
    projects: [
      {
        title: "CI/CD Pipeline",
        description: "Implemented a robust CI/CD pipeline to automate software deployments.",
        url: "https://github.com/michaelquinn/cicd-pipeline"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=15"
  },
  {
    name: "Natalie Roberts",
    email: "natalie.roberts@example.com",
    title:"Mobile App Developer",
    phone: "+1516677889",
    graduationYear: 2023,
    program: "Mobile App Development",
    skills: ["Flutter", "Dart", "iOS", "Android"],
    location: "Chicago, IL",
    linkedin: "https://www.linkedin.com/in/natalieroberts",
    github: "https://github.com/natalieroberts",
    bio: "Mobile app developer with a focus on building cross-platform applications using Flutter.",
    projects: [
      {
        title: "Fitness Tracker",
        description: "Developed a cross-platform fitness tracking app using Flutter.",
        url: "https://github.com/natalieroberts/fitness-tracker"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=16"
  },
  {
    name: "Oliver Scott",
    email: "oliver.scott@example.com",
    title:"Data Engineer",
    phone: "+1617788990",
    graduationYear: 2021,
    program: "Data Engineering",
    skills: ["SQL", "Python", "Big Data", "ETL", "Apache Spark"],
    location: "Boston, MA",
    linkedin: "https://www.linkedin.com/in/oliverscott",
    github: "https://github.com/oliverscott",
    bio: "Data engineer specialized in building data pipelines and ensuring data quality.",
    projects: [
      {
        title: "Data Lakehouse",
        description: "Built a scalable data lakehouse to consolidate and analyze large datasets.",
        url: "https://github.com/oliverscott/data-lakehouse"
      }
    ],
    availability: "Not Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=17"
  },
  {
    name: "Paula Turner",
    email: "paula.turner@example.com",
    title:"Data Engineer",
    phone: "+1718899001",
    graduationYear: 2023,
    program: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    location: "San Diego, CA",
    linkedin: "https://www.linkedin.com/in/paulaturner",
    github: "https://github.com/paulaturner",
    bio: "Machine learning engineer passionate about developing AI models for various applications.",
    projects: [
      {
        title: "Image Classifier",
        description: "Created an image classification model using convolutional neural networks.",
        url: "https://github.com/paulaturner/image-classifier"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=18"
  },
  {
    name: "Quinn Underwood",
    email: "quinn.underwood@example.com",
    title:"Backend Developer",
    phone: "+1819900112",
    graduationYear: 2022,
    program: "Backend Development",
    skills: ["Java", "Spring Boot", "Microservices", "MySQL"],
    location: "Dallas, TX",
    linkedin: "https://www.linkedin.com/in/quinnunderwood",
    github: "https://github.com/quinnunderwood",
    bio: "Backend developer with a focus on building scalable and reliable server-side applications.",
    projects: [
      {
        title: "RESTful API",
        description: "Developed a RESTful API for an e-commerce application using Spring Boot.",
        url: "https://github.com/quinnunderwood/restful-api"
      }
    ],
    availability: "Freelancing",
    profileImageUrl: "https://i.pravatar.cc/150?img=19"
  },
  {
    name: "Rachel Vaughn",
    email: "rachel.vaughn@example.com",
    title:"Frontend Developer",
    phone: "+1921011223",
    graduationYear: 2021,
    program: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    location: "Miami, FL",
    linkedin: "https://www.linkedin.com/in/rachelvaughn",
    github: "https://github.com/rachelvaughn",
    bio: "Frontend developer passionate about creating responsive and user-friendly web interfaces.",
    projects: [
      {
        title: "Personal Blog",
        description: "Built a personal blog using React and Gatsby.",
        url: "https://github.com/rachelvaughn/personal-blog"
      }
    ],
    availability: "Available",
    profileImageUrl: "https://i.pravatar.cc/150?img=20"
  }
];
