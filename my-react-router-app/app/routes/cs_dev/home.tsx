/* Home page for Dev projects.
 * Features an intro, skills, and projects.
 */

import DevNavbar from "./components/DevNavbar";
import SkillPopover from "./components/SkillPopover";
// import DevSocials from "./components/SocialsDisplay";
// import ProjectDetails from "./components/ProjectDetails";
import {Button} from "@heroui/button";
import { projects } from "./data/skillsProjects";

export default function DevHome() {
  return (
    <div className="purple-dark bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">

      <DevNavbar />

      {/* Desktop Image */}
      <div className="hidden md:block absolute right-[0] mt-5 h-[120vh] w-[120vh] rounded-full bg-contain transform translate-x-1/4 z-0" 
        style={{
          backgroundImage: "url(/me.jpg)"
        }}>
      </div>

      {/* Content Wrapper */}
      <div className="relative md:mx-20 z-10 p-6 space-y-10">
        
        {/* Intro Section */}
        <div className="md:w-[45vw] min-h-[30vh] flex flex-col justify-end p-20 pb-10">
          <h1 className="text-7xl text-white font-bold">Nazhoné Morgan</h1>
          <p className="text-white italic text-right">/nuh-ZHOH-nay MOR-gan/</p>
        </div>
        <div className="md:w-[45vw] bg-white text-center min-h-[40vh] flex flex-col items-center justify-center rounded-lg">
          <p className="mt-2 w-[75%] text-lg">A passionate and dedicated software developer with a strong eye for detail and aesthetics. I thrive on creating user-friendly applications that solve real-world problems.</p>
          <div className="mt-4">
          {/* <Button 
            as="a" 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            color="primary"
            variant="solid"
            className="mt-10 p-2 rounded-md m-5"
          >
            See my work
          </Button> */}
          <Button 
            as="a" 
            href="/NazhoneM_Software_Resume-1.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            color="primary"
            variant="ghost"
            className="mt-10 p-2 rounded-md m-5">
            View My Resume
          </Button>
            {/* <DevSocials />  */}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mx-auto  p-6 bg-white shadow-md rounded-lg text-center w-full md:w-auto">
          <h2 className="text-2xl font-semibold text-primary-50">Skills</h2>
          <div className="purple-dark items-center mt-6">
            <SkillPopover /> 
          </div>
        </div>

        {/* Highlighted Project Section */}
        <div className="p-6 my-6">
          <h2 className="text-3xl font-semibold text-white">Selected Projects</h2>
          <div className="gallery">
            {projects.map((project) => (
              <div className="p-6">
                <img className="h-lg max-h-md mx-auto rounded-lg" key={project.id} src={project.imageUrl} alt={`Img ${project.id}`} />
                <h3 className="text-2xl font-semibold text-white mt-5">{project.name}</h3>
                <p className="text-md text-white">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Contact Footer*/}
      <div className="p-6 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            
            <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-6 w-[40vw]">
              <h2 className="text-4xl font-semibold text-primary-50">Contact Me!</h2>
              <div className="mt-2">
                {/* <DevSocials /> */}
              </div>
            </div>
            
            <div className="text-center md:text-left w-[60vw]">
              <p className="text-md">
                If you have any questions about me or my projects, feel free to reach out! Here’s where you can contact me for anything concerning my web development work.
              </p>
              <p className="mt-2 text-primary-500">
                Email me at <a href="mailto:nazhonem@gmail.com" className="underline">nazhonem@gmail.com</a>
              </p>
            </div>
          
          </div>
        </div>
    </div>
  );
}