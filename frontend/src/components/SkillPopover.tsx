/* Displays a list of skills. 
 * Each item has a popover component that has links to the projects that skill was used in.
 */

import { skills, projects } from "../data/skillsProjects";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function SkillsPopover() {
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <Popover placement="right">
                <PopoverTrigger>
                    <Button>
                        <img 
                            className="projectImage"
                            src={skill.imageURL}
                            alt={'photo of ' + skill.name}
                            style={{
                                width: 90,
                                height: 90
                            }}
                        />
                        {skill.name}
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                    <div className="text-small font-bold">Projects using {skill.name}</div>
                    {/* <ul>
                        {skillProjects.map((project) => (
                            <li key={project.id}>
                                {project.name}: {project.description}
                            </li>
                        ))}
                    </ul> */}
                    </div>
                </PopoverContent>
            </Popover>
          </li>
        ))}
      </ul>
    </div>
  );
}