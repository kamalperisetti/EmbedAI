import { useState } from 'react';
import './index.css'
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { FaCompass } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const [hide, setHide] = useState(true)
    const navigate = useNavigate()
    const hideSidebar = () => {
        setHide(prevState => !prevState)
   
    }
    const createChar = () => {
        navigate('/create')
    }
    
    const gotoHome = () => {
        navigate("/")  
    }
    const gotoChat = () => {
        navigate("/chat")
    }
    return(
        <div className='sidebar-main-container'>
            <div className= {hide ?  'siderbar-container': 'siderbar-hide'}>
                <div>
                    <b className= 'title' onClick={gotoHome}>character.ai </b><br/>
                    
                    <button className = "create-btn" onClick={createChar}><FaPlus />Create</button><br/>
                    <button className = "discover-btn"><FaCompass className='compass-icon'/>Discover</button><br/>
                    <p className='chats'>Chats</p>
                    <p className='today'>Today</p>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/05/jujutsu-kaisen-gojo-223.jpg" alt = "profile"/>
                        <p className='names'>Gojo Satoru</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://miro.medium.com/v2/resize:fit:5120/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg"alt = "profile"/>
                        <p className='names'>Creative Helper</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1jEI6e8Kbb53LZcC_sgRgcK3DfgP_NZcNv9orqkedA&s" alt = "profile"/>
                        <p className='names'>Anirudh Vishwanathan</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://media.licdn.com/dms/image/D5612AQGYtgvAK0dCkg/article-cover_image-shrink_720_1280/0/1681822790227?e=2147483647&v=beta&t=DCOZWUynS5k0t8s8GB0F2NWS-M0AFYFf_hUZrdYAbAI" alt = "profile" />
                        <p className='names'>Arjuna</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image"  src = 'https://www.hopscotchstore.com/cdn/shop/products/United-States-of-America-Kids-Laminated-Map-Posters-Prints-Visual-Artwork-Waypoint-Geographic_large.jpg?v=1667105359' alt = "profile" />
                        <p className='names'>HyperGlot</p>
                    </div>
                </div>
                
                <div className='bottom-con'>
                    <hr />
                    <button className='try-btn'>Try c.ai</button>
                    <div className = "profile-container">
                        <h2 className = "intital">A</h2>
                        <p>Anilmatcha</p>
                    </div>
                </div>
            </div>
            <div>
            <HiMenuAlt2 onClick={hideSidebar}/> 
            {hide ?<RiArrowLeftDoubleLine className={hide ?'arrow':"hideAr"} onClick={hideSidebar}/> : <p></p>}
            </div>
        </div>
      
    )
}

export default Sidebar