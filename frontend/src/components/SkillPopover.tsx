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
                            <Button>
                                <img 
                                    className="skillImage"
                                    src={skill.imageURL}
                                    alt={'photo of ' + skill.name}
                                    style={{ width: 90, height: 90 }}
                                />
                                {skill.name}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
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