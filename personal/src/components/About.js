import theoPic from '../images/theoPic.jpg';
import theoResume from '../assets/Theodore Resume.pdf';

const interest=["Football", "Coding", "Travel","Books"];
const skills=["HTML", "JavaScript", "Java","Python", "Reactjs", "Vuejs",
 "Flask", "Django", "Organization","Communication", "Tutoring", "Teamwork", "Spring Boot"];

export default function About() {
    return (

        <>
    

            <div className="container-fluid">
  <div className="row">
    <div className="col-xl-3 col-lg-6 col-md-6" >
      <img src={theoPic}  alt="responsive webite" className='theo img-fluid'></img>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6" >
      <h2>Theodore Bennett</h2>
      <p>Theodore Bennett is a Software developer who determined to become the greatest programmer. He codes each day so 
        he can develop his skills. His current goal is build his skills to a high level so he can obtain a remote job. </p>
      <p>He is currently working on reactjs to develop his frontend skills.</p>
    </div>
  </div>
</div>
<hr></hr>



<div className="card-deck">
  <div className="card">
    
    <div className="card-body bg-dark text-white">

      <h5 className="card-title text-center">Qualification</h5>
      <hr className='about-hr'></hr>
      <p className="card-text">BSc. in Electronics and Computer Science</p>
      <p className="card-text">Institution: University of the West Indies</p>
      <p className="card-text">Year: 2019-2022</p>
      
    </div>
  </div>
  <div className="card">
    
    <div className="card-body bg-dark text-white">
      <h5 className="card-title text-center">Interest</h5>
      <hr className='about-hr'></hr>
      <ul>
        {
            interest.map((i,index)=> <li key={index}>{i}</li>  
            )
        }

      </ul>
    
    </div>
  </div>
  <div className="card">
    
    <div className="card-body bg-dark text-white">
      <h5 className="card-title text-center">Skills</h5>
      <hr className='about-hr'></hr>
      <ul>
        {
            skills.map((skill,index)=> <li key={index}>{skill}</li>  
            )
        }

      </ul>
      
    </div>
  </div>
  

</div>
<div className='resume' > 
<a href={theoResume} download>
  <button type="button" className='btn-resume btn-outline-dark' >
    <svg className='download bi bi-download' xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
    Download CV

    
  </button></a>
</div>
            </>
    )
}