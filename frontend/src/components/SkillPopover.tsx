/* Displays a list of skills. 
 * Each item has a popover component that has links to the projects that skill was used in.
 */

import { allSkills, projects } from "../data/skillsProjects";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function SkillsPopover() {
  return (
    <div>
      <ul>
        {allSkills.map((skill) => {
            // Filter through projects and find the ones that match the skills list of project ids
            const skillProjects = projects.filter(project => skill.projects.includes(project.id));

            return(
                <li key={skill.id}>
                    <Popover placement="right">
                        <PopoverTrigger>
                            <Button className="p-3 ">
                                <i className='text-4xl' aria-hidden='true'>{skill.imageURL}</i>
                                <span className="text-md">{skill.name}</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2 shadow-md">
                            <div className="text-small font-bold">Projects using {skill.name}</div>
                            <ul>
                                {skillProjects.map((project) => (
                                    <li key={project.id}>
                                        <a href="#">{project.name}</a>
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </PopoverContent>
                    </Popover>
                </li>
            );
        })}
      </ul>
    </div>
  );
}