/* Home page for Dev projects.
 * Features an intro, skills, and projects.
 */

import DevNavbar from "./components/DevNavbar";
import SkillPopover from "./components/SkillPopover";
// import DevSocials from "./components/SocialsDisplay";
// import ProjectDetails from "./components/ProjectDetails";
import {Button} from "@heroui/button";
// import { projects } from "./data/skillsProjects";

export default function DevHome() {
  // Featured project IDs
//   const featuredProjectIds = [1, 2, 3];

  // Filter featured projects
//   const featuredProjects = projects.filter((project) =>
//     featuredProjectIds.includes(project.id)
//   );

  return (
    <div className="min-h-screen bg-slate-200 text-gray-900">
      <DevNavbar />
      {/* Desktop Image */}
      <div className="hidden md:block absolute right-[0] mt-5 h-[120vh] w-[120vh] rounded-full bg-contain transform translate-x-1/4 z-0" 
        style={{
          backgroundImage: "url('/me.jpg')"
        }}>
      </div>

      {/* Content Wrapper */}
      <div className="relative md:mx-20 z-10 p-6 space-y-10">
        
        {/* Intro Section */}
        <div className="md:w-[45vw] bg-white text-center min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-blue-600">Nazhoné Morgan</h1>
          <p className="text-gray-500 italic">/nuh-ZHOH-nay MOR-gan/</p>
          <p className="mt-2 w-[75%] text-lg">A passionate and dedicated software developer with a strong eye for detail and aesthetics. I thrive on creating user-friendly applications that solve real-world problems.</p>
          <div className="mt-4">
            {/* <DevSocials />  */}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mx-auto  p-6 bg-white shadow-md rounded-lg text-center w-full md:w-auto">
          <h2 className="text-2xl font-semibold text-blue-600">Skills</h2>
          <div className="items-center mt-6">
            <SkillPopover />
          </div>
          {/* <Button 
            as="a" 
            href="/Nazhone_Morgan_Resume-4.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-10 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-md">
            View My Resume
          </Button> */}
        </div>

        {/* Highlighted Project Section */}
        <div className="p-6 my-6">
        {/* {featuredProjects.map((project) => (
          <ProjectDetails
            key={project.id}
            name={project.name}
            description={project.description}
            imageUrl={project.imageURL}
            srcLink={project.srcLink}
            prjLink={project.prjLink}
            skills={project.skills}
          />
        ))} */}
        </div>
      </div>

      {/*Contact Footer*/}
      <div className="p-6 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            
            <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-6 w-[40vw]">
              <h2 className="text-4xl font-semibold text-blue-600">Contact Me!</h2>
              <div className="mt-2">
                {/* <DevSocials /> */}
              </div>
            </div>
            
            <div className="text-center md:text-left w-[60vw]">
              <p className="text-md">
                If you have any questions about me or my projects, feel free to reach out! Here’s where you can contact me for anything concerning my web development work.
              </p>
              <p className="mt-2 text-blue-500">
                Email me at <a href="mailto:nazhonem@gmail.com" className="underline">nazhonem@gmail.com</a>
              </p>
            </div>
          
          </div>
        </div>
    </div>
  );
}