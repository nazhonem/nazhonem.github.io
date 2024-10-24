import DevNavbar from "./components/DevNavbar";
import SkillPopover from "./components/SkillPopover";
import DevSocials from "./components/DevSocials";
import { Button } from "@nextui-org/react";

export default function DevHome() {
  return (
    <>
      <DevNavbar />

      {/* Intro Section */}
      <div>
        <h1>Nazhone Morgan</h1>
        <p>/nah-zho-NAY mor-gan/</p>
        <p>A short description about me!</p>
        <DevSocials />
      </div>

      {/* Skills Section */}
      <div>
        <h2>Skills</h2>
        <SkillPopover />
        <Button as="a" href="/Nazhone_Morgan_Resume-4.pdf" target="_blank" rel="noopener noreferrer">
          View My Resume
        </Button>
      </div>

      {/* Highlighted Project Section */}


      {/*Contact Section*/}
      <div>
        <h2>Contact Me!</h2>
        <p>Whether you want to hire me, hear more, or just grab a coffee, here's where you can contact me.</p>
        <p>Email me at <a href="mailto:nazhonem@gmail.com">nazhonem@gmail.com</a></p>
        <DevSocials />
      </div>

    </>
  );
}