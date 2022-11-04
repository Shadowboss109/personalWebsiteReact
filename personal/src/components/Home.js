import theoPic from '../images/theoPic.jpg';
export default function Home() {
    return (

        <><div>
            <div className='theo-image'>
            <img className='theo' src={theoPic} alt=""></img>
            </div>

            <div>
                <h1 className="text-center name">
                Theodore Bennett
            </h1>
        </div>


        <div className="text-center">
                <h4>Software Developer/Engineer</h4>
                <blockquote className='quote'> "The task isn't easy. It isn't hard. Just get the job done!" </blockquote>
                </div>

                <br></br>
                <br></br>
                <p>Please go to my <a href="#/about"> About</a>  page to get more information on me.</p>
            </div>
            </>




       

      
    );
  }
  