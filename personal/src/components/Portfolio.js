import p1 from "../images/p1.PNG";
import p2 from "../images/p2.PNG";
import p3 from "../images/p3.PNG";
const Projects = [
    {
        projectName:"Personal Website",
        description: "A website created to tell viewer about who is Theodore Bennett.",
        photos:[p1,p2,p3]
    }

]

export default function Portfolio() {
    return (
        <div className='porfolio'>
            <h1 className='portheader'>Portfolio</h1>
            <div>
                <ul>
                    {
                        Projects.map((project,index)=> <div key={index}>
                            <div>
                                <h3>{index+1}. {project.projectName}</h3>
                            </div>
                            <div>
                                <h6>
                                {project.description}
                            </h6>

                            </div>

                            <ul className='photos'>
                                {project.photos.map((photo,i)=>
                                <li key={i}>
                                    <img className='photo'  src={photo} alt=''/>

                                </li>
                                
                                )}
                            </ul>


                        </div>
                        
                        )
                    }
                </ul>

            </div>


        </div>


    )
}