
import uiDev from '../../../assets/images/ui-dev.jpg';
import vueJs from '../../../assets/images/vuejs-img.jpeg';
import wordpress from '../../../assets/images/wordpress.jpg';
import python from '../../../assets/images/python-img.jpg';
const Card2 = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card" >
              <img src={uiDev} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Achievers IT React JS Certification Course in Bangalore. We taught you in detailed explanations of what React JS is, why we use React JS, What is JSX, Unidirectional data flow, React Components, React Hooks and React Router, etc. .</p>
              </div>
            </div>

          </div>
          <div className="col-sm-3">
            <div className="card" >
              <img src={vueJs} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Angular is popular for making dynamic applications and its information official and reliance infusion includes altogether lessen the measure of code that should be composed. It is being utilized broadly by devlopers for building web, mobile and other applications. </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" >
              <img src={wordpress} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">"MEAN Stack Front To Back". In this course we will build an in depth full stack social network application using Angular, Express, React, Redux and MongoDB along with ES6+. We will start with a blank text editor and end with a deployed full stack application.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" >
              <img src={python} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">"MERN Stack Front To Back". In this course we will build an in depth full stack social network application using Node.js, Express, React, Redux and MongoDB along with ES6+. We will start with a blank text editor and end with a deployed full stack application.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Card2;