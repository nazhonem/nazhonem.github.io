/* Displays a highlighted project.
 * Features image, name, description, skills used, and links to the source code and 
 * actual project.
*/

import { allSkills } from "../../../../../frontend/src/data/skillsProjects";

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
      <div className="flex flex-col md:flex-row items-center p-6 mb-10">
        {/* Project Image */}
        <img src={imageUrl} alt={`${name}`} className="h-48 md:h-64 object-cover mb-4 md:mb-0 md:mr-6 max-w-80" />

        {/* Project Info */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">{name}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <h4 className="text-lg font-semibold text-gray-500 mb-1">Made With:</h4>
          <ul className="flex flex-wrap gap-2 mb-4">
            {projectSkills.map(skill => (
              <li key={skill.id} className="flex items-center text-blue-600 bg-blue-50 rounded px-2 py-1 text-sm">
                <i className={`text-xl mr-1`} aria-hidden="true">{skill.imageURL}</i>
                {skill.name}
                </li>
            ))}
          </ul>
          {srcLink && (
            <a href={srcLink} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          )}
          {prjLink && (
            <a href={prjLink} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          )}
        </div>
      </div>
    );
  }