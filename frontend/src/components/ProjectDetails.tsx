/* Displays a highlighted project.
 * Features image, name, description, skills used, and links to the source code and 
 * actual project.
*/

import { allSkills } from "../data/skillsProjects";

interface ProjectDetailsProps {
    name: string;
    description: string;
    imageUrl: string;
    srcLink?: string; // link to source code
    prjLink?: string; // link to actual project
    skills: number[];
}

export default function ProjectDetails({
    name,
    description,
    imageUrl,
    srcLink,
    prjLink,
    skills,
  }: ProjectDetailsProps) {

    const projectSkills = allSkills.filter((skill: { id: number; }) => skills.includes(skill.id));

    return (
      <div className="project-details">
        <h2>{name}</h2>
        <img src={imageUrl} alt={`${name}`} className="project-image" />
        <p>{description}</p>
        <h4>Skills Used:</h4>
        <ul>
        {projectSkills.map(skill => (
          <li key={skill.id}>
            {skill.imageURL}
            {skill.name}
            </li>
        ))}
      </ul>
        {srcLink && (
          <a href={srcLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
        {prjLink && (
          <a href={prjLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
      </div>
    );
  }