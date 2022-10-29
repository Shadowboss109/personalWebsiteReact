import theoPic from '../images/theoPic.jpg';

const interest=["Football", "Coding", "Travel","Books"];
const skills=["HTML", "JavaScript", "Java","Python", "Reactjs", "Vuejs",
 "Flask", "Django", "Organization","Communication", "Tutoring", "Teamwork", "Spring Boot"]
export default function About() {
    return (

        <>
    

            <div class="container-fluid">
  <div class="row">
    <div class="col-xl-3 col-lg-6 col-md-6" >
      <img src={theoPic}  alt="responsive webite" className='theo img-fluid'></img>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6" >
      <h2>Theodore Bennett</h2>
      <p>Theodore Bennett is a Software developer who determined to become the greatest programmer. He codes each day so 
        he can develop his skills. His current goal is build his skills to a high level so he can obtain a remote job. </p>
      <p>He is currently working on reactjs to develop his frontend skills.</p>
    </div>
  </div>
</div>
<hr></hr>



<div class="card-deck">
  <div class="card">
    
    <div class="card-body bg-dark text-white">
      <h5 class="card-title text-center">Qualification</h5>
      <p class="card-text">BSc. in Electronics and Computer Science</p>
      <p class="card-text">Institution: University of the West Indies</p>
      <p class="card-text">Year: 2019-2022</p>
      
    </div>
  </div>
  <div class="card">
    
    <div class="card-body bg-dark text-white">
      <h5 class="card-title text-center">Interest</h5>
      <ul>
        {
            interest.map((i)=> <li>{i}</li>  
            )
        }

      </ul>
    
    </div>
  </div>
  <div class="card">
    
    <div class="card-body bg-dark text-white">
      <h5 class="card-title text-center">Skills</h5>
      <ul>
        {
            skills.map((skill)=> <li>{skill}</li>  
            )
        }

      </ul>
      
    </div>
  </div>
</div>
            </>
    )
}