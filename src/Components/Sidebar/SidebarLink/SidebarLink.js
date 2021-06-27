import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './SidebarLink.css';

const SidebarLink = (props) => {
    return (
        <div className='d-flex sidebarLink p-2 mb-4'>
             <FontAwesomeIcon
              icon={faCoffee}
              size='2x'
               />
             <p>{props.text}</p>
        </div>
    );
}

SidebarLink.defaultProps = {
    text: "Dashboard"
}

export default SidebarLink;