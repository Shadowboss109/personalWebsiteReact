const Projects = [
    {
        projectName:"Personal Website",
        description: "A website created to tell viewer about who is Theodore Bennett",
        photos:["../images/p1.PNG","../images/p2.PNG","../images/p3.PNG"]
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

                            <ul>
                                {project.photos.map((photo,i)=>
                                <li key={i}>
                                    <img src={photo} alt=''></img>

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