/* Displays a list of skills. 
 * Each item has a popover component that has links to the projects that skill was used in.
 */

import { allSkills, projects } from "../../../../../frontend/src/data/skillsProjects";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";
import { useState } from "react";

export default function SkillsPopover() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const skillsPerRow = 4;
    const rowsToShow = 2;
    const skillsToShow = skillsPerRow * rowsToShow;

    const displayedSkills = isExpanded ? allSkills : allSkills.slice(0, skillsToShow);

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 justify-center"> 
        {displayedSkills.map((skill) => {
            // Filter through projects and find the ones that match the skills list of project ids
            const skillProjects = projects.filter(project => skill.projects.includes(project.id));

            return(
                <div key={skill.id} className="relative">
                    <Popover placement="right">
                        <PopoverTrigger>
                            <Button className="p-3 w-full flex flex-col items-center text-center">
                            <i className='text-6xl' aria-hidden='true'>{skill.imageURL}</i>
                                <span className="text-md">{skill.name}</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2 bg-white shadow-md rounded-md">
                                <div className="text-small font-bold">Projects using {skill.name}</div>
                                <ul>
                                    {skillProjects.map((project) => (
                                        <li key={project.id}>
                                            <a href="#" className="text-blue-500 hover:underline">{project.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            );
        })}

        <div className="col-span-3 md:col-span-4 flex justify-center mt-10">
        <Button
            onClick={toggleExpand}
            className="bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-md"
        >
            {isExpanded ? 'Show Less' : 'Show All'}
        </Button>
        </div>
        </div>
    );
}
