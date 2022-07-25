import os from '../../assets/onlineshop_screen2.png';
import jasma from '../../assets/jasma_screen.png';
import wmp from '../../assets/wmp_screen.png';
import troca from '../../assets/trocaaqui_screen.png';
import sate from '../../assets/sate_screen.png';

export const projects = [
    {
        id: 1,
        title: "Online Shop",
        image: os,
        url: "https://www.youtube.com/watch?v=XDLyZ5ZSkc0",
        tech: "Javascript",
        desc: "A responsive E-Commerce website made on a MERN stack (MongoDB, Express, React and Node.JS) with Stripe payments. React-Query, React-Redux, Styled Components, Material UI, Axios and Cloudinary are some of the other tools that were used. Features include product ratings and reviews, and an admin area from where the shop owner can manage everything."
    },
    {
        id: 2,
        title: "Just Another Social Media App",
        image: jasma,
        url: "https://www.youtube.com/watch?v=uARAlUDd60k",
        tech: "Javascript",
        desc: "A responsive social media app made on a PERN stack (PostgreSQL, Express, React and Node.JS). React-Query, Styled Components, Passport and Bcrypt are some of the other tools that were used. Features include logging in with an existing Google account, making posts and comments, and exchanging messages with other users."
    },
    {
        id: 3,
        title: "Where's My Pizza?",
        image: wmp,
        url: "https://www.youtube.com/watch?v=EvMNlYBRHtI",
        tech: "Python",
        desc: "A responsive pantry management and e-cookbook app made on Django with a PostgreSQL database. Bootstrap, Django-Axes, Django-Filters, Django-Allauth and ReportLab are some of the additional tools that were used. Features include logging in with an existing Google account, managing products and recipes and sharing them with family members, inviting people via e-mail, receiving relevant notifications, and accessing a big catalog of recipes."
    },
    {
        id: 4,
        title: "Troca Aqui!",
        image: troca,
        url: "https://www.youtube.com/watch?v=Cw3NdA2f0bw",
        tech: "Python",
        desc: "A responsive material goods trading app that allows you to post things you don't need anymore up for trading for someone else's items you could use. Made on Django with a PostgreSQL database. Bootstrap was used for the CSS. Features include posting items, sending, accepting or rejecting trade requests, rating fulfilled trades, receiving relevant notifications and exchanging messages with other users."
    },
    {
        id: 5,
        title: "Starshine and the Everlost",
        image: sate,
        url: "https://sate-music.eu/",
        tech: "Javascript",
        desc: "My ongoing amateur music composition and production project. Everything is done by me, from the music to the artwork. The music is created on FL Studio, and consists on metal, classical or a mix of both, for the most part. The artwork and videos are made in Adobe Photoshop and After Effects."
    }
]