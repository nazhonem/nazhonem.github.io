import DevNavbar from "./components/DevNavbar";
import SkillPopover from "./components/SkillPopover";
import { skills, projects } from "./data/skillsProjects"

export default function ShoppingList() {

  return (
    <>
      <DevNavbar />
      <h2>Skills</h2>
      <SkillPopover />
    </>
  );
}