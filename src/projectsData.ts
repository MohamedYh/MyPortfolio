import { Project } from "./sections/projects";

const base = "./projects_images";

export const projectsData: Project[] = [
    {
        name: "Store For BMW’s Motorcycle",
        images: [
            `${base}/Bikes_Store/img1.png`,
            `${base}/Bikes_Store/img2.png`,
            `${base}/Bikes_Store/img3.png`,
            `${base}/Bikes_Store/img4.png`,
            `${base}/Bikes_Store/img5.png`,
            `${base}/Bikes_Store/img6.png`,
        ],
        video: "https://youtu.be/QYUnMUPKjUs?si=H1eA49op851u3eP4",
        created_date: "01/2024",
        tools: ["React", "NextJs", "ExpressJs", "MongoDb"],
    },
    {
        name: "E-Commerce Website ",
        images: [
            `${base}/E-commerce/img1.png`,
            `${base}/E-commerce/img2.png`,
            `${base}/E-commerce/img3.png`,
            `${base}/E-commerce/img4.png`,
            `${base}/E-commerce/img5.png`,
        ],
        video: "https://youtu.be/M2cR9wLKJ5U?si=AZeJBF19N2ztwTsx",
        created_date: "04/2024",
        tools: ["React", "NextJs", "External API"],
    },
    {
        name: "Taskneto: Tasks And Notes Website",
        images: [
            `${base}/Taskneto/img1.png`,
            `${base}/Taskneto/img2.png`,
            `${base}/Taskneto/img3.png`,
            `${base}/Taskneto/img4.png`,
            `${base}/Taskneto/img5.png`,
            `${base}/Taskneto/img6.png`,
            `${base}/Taskneto/img7.png`,
        ],
        video: "https://youtu.be/RSgQM9tTNmc?si=oTe1AfXaxBD27ET6",
        created_date: "06/2024",
        tools: ["React", "NextJs", "ExpressJs", "MongoDb"],
    },
    {
        name: "T2G: A Website That Converts Tables Into Graphs",
        images: [
            `${base}/T2G/img1.png`,
            `${base}/T2G/img2.png`,
            `${base}/T2G/img3.png`,
            `${base}/T2G/img4.png`,
            `${base}/T2G/img5.png`,
            `${base}/T2G/img6.png`,
            `${base}/T2G/img7.png`,
        ],
        video: "https://youtu.be/2Vr-JCSivuE?si=KMsiY8bu4NigOvT9",
        created_date: "09/2024",
        tools: ["React", "NextJs", "ExpressJs", "MySQL", "Prisma"],
    },
];
