import physicsImg from '../images/physics.jpg';
import chemistryImg from '../images/chemistry.jpg';
import geographyImg from '../images/geography.jpg';
import environmentalImg from '../images/environmental.jpg';
import historyImg from '../images/history.jpg';
import currentAffairsImg from '../images/current_affairs.jpg';

const course = [
    {
        subject: "Physics",
        desc: "the branch of science concerned with the nature and properties of matter and energy." + 
            "The subject matter of physics includes mechanics, heat, light and other radiation, sound," + 
            "electricity, magnetism, and the structure of atoms.",
        imgsrc: physicsImg,
        link: "https://physicsworld.com/"
    },
    {
        subject: "Chemistry",
        desc: "the branch of science concerned with the substances of which matter is composed," +
            " the investigation of their properties and reactions, and the use of such reactions to form new substances.",
        imgsrc: chemistryImg,
        link: "https://www.rsc.org/"
    },
    {
        subject: "Geography",
        desc: "Geography is the study of places and the relationships between people and their environments. " +
            "Geographers explore both the physical properties of Earth's surface and the human societies spread across it.",
        imgsrc: geographyImg,
        link: "https://www.nationalgeographic.org/encyclopedia/geography/"
    },
    {
        subject: "Environmental Science",
        desc: "Environmental science is an interdisciplinary academic field that integrates physical, " +
            "biological and information sciences (including ecology, biology, physics, chemistry, plant science, " +
            "zoology, mineralogy, oceanography, limnology, soil science, geology and physical geography, and " +
            "atmospheric science)",
        imgsrc: environmentalImg,
        link: "https://www.environmentalscience.org/"
    },
    {
        subject: "History",
        desc: "History is the study of change and development in society over time. The study of history enables us " +
            "to understand how past human action affects the present and influences our future, and it allows us to " +
            "evaluate these effects.",
        imgsrc: historyImg,
        link: "https://www.historytoday.com/"
    },
    {
        subject: "Current Affairs",
        desc: "Current Affairs is an important section of UPSC, Banking, SSC and Railways exams and aspirants " +
            "who are preparing for the upcoming exams in 2020 must be well prepare with this section. " +
            "The current affairs are made by our experts for all competitive exams UPSC, SSC, IAS, Railway-RRB.",
        imgsrc: currentAffairsImg,
        link: "https://www.jagranjosh.com/general-knowledge?ref=web_nav"
    }
]
  
export default course;