/* Displays a list of skills. 
 * Each item has a popover component that has links to the projects that skill was used in.
*/

import { skills, projects } from "../data/skillsProjects";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";

export default function SkillsPopover() {
    return (
        <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
                <div>
                <Popover showArrow backdrop="opaque" placement="right">
                    <PopoverTrigger>
                        <Button className="capitalize text-primary" color="primary" variant="flat">
                            {skill.name}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-240px">
                        <div className="px-1 py-2 w-full">
                            <p className="text-small font-bold">
                                Projects used
                            </p>
                            <ul>
                                {projects.filter(project => skill.projects.includes(project.id)).map((project) => (
                                    <li key={project.id}>
                                        <a 
                                            href="#" 
                                            className="text-primary-500"
                                            // className="hover:underline"
                                        >
                                            {project.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </PopoverContent>
                </Popover>
                </div>
            ))}
        </div>
    )
}