import React, {useEffect, useState} from 'react';
import NavBar from "./components/common/NavBar";
import {projects} from "./utils/projects";
import {useParams} from 'react-router-dom';
import Project_Header from "./components/Project_Header";
import {Blob} from 'react-blob'
import Project_About from "./components/Project_About";
import Project_Gallery from "./components/Project_Gallery";
import Home_Contact from "./components/Home_Contact";
import Gallery from "./components/Project_Gallery/Gallery";
import Project_Next from "./components/Project_Next";


interface ProjectDetail {
    name?: string,
    title?: string,
    image?: string,
    accent?: string,
    discipline?: string,
    technologies?: string,
    siteLink?: string,
    gallery?: string[]
}

interface Id {
    id?: Object
}

const Project = () => {

    const [project, setProject] = useState<ProjectDetail>({});
    let {id}: Id = useParams();

    const filterProject = () => {
        const filteredProject = projects.filter(function (e) {

            return e.link === id

        })

        setProject(filteredProject[0]);
    }

    useEffect(() => {
        if (id) {
            filterProject()
        }
        filterProject()
    }, [id])
    return (
        <div>
            <NavBar/>


            <Project_Header
                title={project.title}
                color={project.accent}
                expertise={project.discipline}
                technologies={project.technologies}
                site={project.siteLink}
                image={project.image}
            />
            <Project_About/>
            <Project_Gallery
                color={project.accent}
                imageGallery={project.gallery}
            />
            <Project_Next projectTitle={"Buddy Belgium"} />
            <Home_Contact/>
        </div>
    );
}

export default Project;