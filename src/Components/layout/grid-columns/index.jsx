import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownload, faCode, faDatabase, faDigitalTachograph, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Gridcolumns = () =>{
    return(
        <div className="container-box">
        <div className="row">
          
          <div className="col-sm-2">
          <FontAwesomeIcon icon={faDatabase} />
          <h4>Database</h4>


          </div>
          <div className="col-sm-2">
          <FontAwesomeIcon icon={faDigitalTachograph} />
          <h4>Devops</h4>


          </div>
          <div className="col-sm-2">
          <FontAwesomeIcon icon={faCode} />
          <h4>Frontend</h4>


          </div>
          <div className="col-sm-2">
          <FontAwesomeIcon icon={faCloudDownload} />
          <h4>cloud</h4>


          </div>
          <div className="col-sm-2">
            <FontAwesomeIcon icon={faLaptopCode} />
          <h4>framework</h4>


          </div>

        </div>

      </div>
    )
}
export default Gridcolumns;