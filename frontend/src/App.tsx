import DevNavbar from "./components/DevNavbar";
import SkillPopover from "./components/SkillPopover";
import { skills, projects } from "./data/skillsProjects"

export default function ShoppingList() {
  function learnClick() {
    alert('Places this skill has been used.');
  }

  return (
    <>
      <DevNavbar />
      <div>
        <h2>Skills</h2>
        <SkillPopover />
        <button onClick={learnClick}>Click</button>
      </div>
    </>
  );
}