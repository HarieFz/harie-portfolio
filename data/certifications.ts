interface CertificationsTypes {
  thumbnail: string;
  images: string[];
  title: string;
  issuing_organization: string;
  description: string;
  demo: {
    name: string;
    link: string;
  };
  tech: string[];
}

const certificationsData: CertificationsTypes[] = [
  {
    thumbnail:
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109384/Sertifikat_170_SER_B2G-MKP_XII_2022_-_HARIE_FAIRUZZAKI_page-0001_sfrtee.jpg",
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109384/Sertifikat_170_SER_B2G-MKP_XII_2022_-_HARIE_FAIRUZZAKI_page-0001_sfrtee.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109385/Sertifikat_170_SER_B2G-MKP_XII_2022_-_HARIE_FAIRUZZAKI_page-0002_qedoys.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109372/Raport_Mahasiswa_-_A_HARIE_FAIRUZZAKI_page-0001_gd0w9b.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109371/Raport_Mahasiswa_-_A_HARIE_FAIRUZZAKI_page-0002_uayawl.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109371/Raport_Mahasiswa_-_A_HARIE_FAIRUZZAKI_page-0003_e99buw.jpg",
    ],
    title: "How to be an Ideal Top Search ReactJS Front-End Engineer Program",
    issuing_organization: "Alterra Academy",
    description: `<p class="lg:mb-2 mb-1">Learned front-end engineering using React.js, React Hooks, React Router, state management, GraphQL (Apollo), Git, clean code practices, and testing.</p> <p>Project: led the React.js team in developing a Learning Management System (LMS); collaborated with UI/UX designers, back-end, and QA teams; delivered a functional learning platform with responsive UI and integrated front-end with RESTful APIs.</p>`,
    demo: {
      name: "Learning Management System",
      link: "https://personal-portfolio-by-jcrea-design.vercel.app/",
    },
    tech: ["React.js", "Next.js", "React Router", "GraphQL", "Git"],
  },
  {
    thumbnail:
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109346/Studi_Independen_Cert_Harie_Fairuzzaki_page-0001_lw0nn0.jpg",
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109346/Studi_Independen_Cert_Harie_Fairuzzaki_page-0001_lw0nn0.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109342/KM_2_SR_FSW2202KM251_Harie_Fairuzzaki_page-0001_t4camd.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749109342/KM_2_SR_FSW2202KM251_Harie_Fairuzzaki_page-0002_cgpies.jpg",
    ],
    title: "Fullstack Web Development Wave 2",
    issuing_organization: "Binar Academy",
    description: `<p class="lg:mb-2 mb-1">Learned fullstack web development with JavaScript, Node.js, Express, PostgreSQL, React.js, RESTful API, Git, and Agile methodology.</p> <p>Project: led a cross-functional team (frontend & backend) to build an e-commerce platform; managed team coordination, ensured backend–frontend integration, and delivered a fully functional MVP with additional features.</p>`,
    demo: {
      name: "E-Commerce",
      link: "https://personal-portfolio-by-jcrea-design.vercel.app/",
    },
    tech: ["React.js", "Next.js", "Express.js", "Javascript", "Git"],
  },
];

export { certificationsData };
