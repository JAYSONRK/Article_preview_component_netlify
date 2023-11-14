import React, {useState} from 'react';
import Avatar from "./avatar-michelle.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Toggle = () => {
    const [hide, unhide] =useState(false)
    const appear = () => {
        unhide(!hide);
    }

    const disappear = () => {
        unhide(!hide);
    }
    return (<>
        <div className='toggle'>
            <ul className='default' id={`${hide && "show"}`}>
                <li><img id="avatar" src={Avatar} alt="avatar"/></li>
                <li> Michelle Appleton <br/><span>28 Jun 2020</span></li>
                <li onClick={appear}><FontAwesomeIcon icon={faShare} /></li>
            </ul>
            <ul onClick={disappear} className='activated' id={`${!hide && "unshow"}`}>
                <li>SHARE</li>
                <li><FontAwesomeIcon className='facebook' icon={faFacebookF} /></li>
                <li><FontAwesomeIcon className='twiter'  icon={faTwitter} /></li>
                <li><FontAwesomeIcon className='printrest' icon={faPinterestP}/></li>
                <li onClick={disappear}><FontAwesomeIcon className='share' icon={faShare} /></li>
                <div className="triangle-down"></div>
            </ul>
        </div>   
    </>)
}

export default Toggle; 