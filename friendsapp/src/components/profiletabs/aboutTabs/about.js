import { Tabs, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot, setDoc} from "firebase/firestore";
import { Firestore } from '../../../firebase/firebase';
import CurentUserContext from '../../../context/CurrentUserContext';

const { Text, Link } = Typography;
const Aboutabs = () => {

    const user = useContext(CurentUserContext)

    const [study, setstudy] = useState(user.education);
    const [live, setlive] = useState(user.live);
    const [status, setstatus] = useState(user.status);
    const [insta, setinsta] = useState(user.insta);

    Firestore.collection('profile').doc(user.uid).update({
        education: study,
        live:live,
        status:status,
        insta:insta
    })

    return (
        <>
            <div className='container' style={{ marginTop: '20px', backgroundColor: 'rgb(247, 247, 247)',
    boxShadow: '0 8px 8px rgb(0 0 0 / 25%)',
    borderRadius: '10px', }}>
                <div className='row'>
                    <div className='col-lg-5 col-12'>
                        <div className='about'>
                            <div style={{ padding: '20px 0px 0px 10px' }}>
                                <h3>About</h3>
                            </div>
                            <div className='buttons'>
                                <button>Overview</button>
                            </div>
                            <div className='buttons'>
                                <button>Work and Education</button>
                            </div>
                            <div className='buttons'>
                                <button>Places Lived</button>
                            </div>
                            <div className='buttons'>
                                <button>Contact and basic info</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 col-12'>
                        <div className='info'>
                            <div>
                           <h3>Overview</h3> 
                           </div>
                           <div className='intro-detail'>
                                <span> Studied at <Text level={5} editable={{ onChange: setstudy }}>  {study}</Text> </span>
                            </div>
                            <div className='intro-detail'>
                            <span> Lives in <Text level={5} editable={{ onChange: setlive }}>  {live}</Text> </span>
                            </div>
                            <div className='intro-detail'>
                            <span> Status <Text level={5} editable={{ onChange: setstatus }}>  {status}</Text> </span>
                            </div>   
                             <div className='intro-detail'>
                            <span> Instagram <Link level={5} editable={{ onChange: setinsta }}>  {insta}</Link> </span>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutabs