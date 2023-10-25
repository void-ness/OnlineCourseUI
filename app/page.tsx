import CourseCategoryContainer from "./components/CourseCateogoryContainer";
import PastCourseContainer from "./components/PastCourseContainer";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faPaintBrush, faDesktop } from "@fortawesome/free-solid-svg-icons";
library.add(faPaintBrush, faDesktop);


export default function Home() {
  return (
    <div>
      <PastCourseContainer />
      <CourseCategoryContainer />
    </div>
  )
}
