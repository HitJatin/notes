import UniversityData from './UniversityData'
import { useNavigate, Routes } from "react-router";
import MduCourses from '../mdu/MduCourses';


const UniversitiesList = ({ name, link }) => {
  let navigate = useNavigate();
  return (
    <button onClick={() => { navigate(`/${link}`) }}>{name}</button>
  )
}

const UniversityPage = () => {
  return (
    <>
      <h1>Select your University</h1>
      {UniversityData.map((university) => (
        <UniversitiesList name={university.name} link={university.link} />
      ))}
            <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mdu" element={<MduCourses />} />
        <Route exact path="/upcoming/:user" element={<Upcoming />} />
        <Route exact path="/record/:user" element={<Record />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )

}

export default UniversityPage;