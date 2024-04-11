import './index.css'
import { LuSendHorizonal } from "react-icons/lu";
const Chat = () => {
    return (
        <div className='chat-container'>
            <div className='chat-profile'>
                <img className = "profile-img"  src = 'https://www.hopscotchstore.com/cdn/shop/products/United-States-of-America-Kids-Laminated-Map-Posters-Prints-Visual-Artwork-Waypoint-Geographic_large.jpg?v=1667105359' alt = "profile" />
                <div>
                <p className='gojo-text-heading'>HyperGolt</p>
                <p className='gojo-text'>By @xpearhead</p>
                </div>  
            </div>
            <div className='chat-heading'>
                <img className = "chat-profile-img"  src = 'https://www.hopscotchstore.com/cdn/shop/products/United-States-of-America-Kids-Laminated-Map-Posters-Prints-Visual-Artwork-Waypoint-Geographic_large.jpg?v=1667105359' alt = "profile" />
                <b>HyperGlot</b>
                <p className='chat-p pp'>Wilkommen, bienvenue, welcome - I'm HyperGolt, and "' fluent in many languages, and will help you practice the one(s) you're learning. I can also translate anything you don't understand.</p>
            </div>
            <div>
                <div className='cccc'>
                    <img className = "chat-side-img"  src = 'https://www.hopscotchstore.com/cdn/shop/products/United-States-of-America-Kids-Laminated-Map-Posters-Prints-Visual-Artwork-Waypoint-Geographic_large.jpg?v=1667105359' alt = "profile" />
                    <b>HyperGlot</b>
                    <p >c.ai</p>
                </div>
                <div className='message'>
                    <p className='pp'>
                    Wilkommen, bienvenue, welcome - I'm HyperGolt, and "' fluent in many languages, and will help you practice the one(s) you're learning. I can also translate anything you don't understand.
                    </p>
                </div>
            </div>
            <div>
                <div className='cccc-'>
                    <b>Anilmatcha</b>
                    <p className='init'>A</p>
                </div>
                <div className='cc' >
                    <p className='message-'>
                    Hello
                    </p>
                </div>
            </div>
            <div>
                <div className='cccc'>
                    <img className = "chat-side-img"  src = 'https://www.hopscotchstore.com/cdn/shop/products/United-States-of-America-Kids-Laminated-Map-Posters-Prints-Visual-Artwork-Waypoint-Geographic_large.jpg?v=1667105359' alt = "profile" />
                    <b>HyperGlot</b>
                    <p>c.ai</p>
                </div>
                <div className='message'>
                    <p className='pp'>
                        Hallo! Hast du etwas zu ubersetzen oder zu fragen?
                    </p>
                </div>
            </div>
            <div>
                <div className='cccc'>
                    <img className = "chat-side-img"  src = 'https://www.hopscotchstore.com/cdn/shop/products/United-States-of-America-Kids-Laminated-Map-Posters-Prints-Visual-Artwork-Waypoint-Geographic_large.jpg?v=1667105359' alt = "profile" />
                    <b>HyperGlot</b>
                    <p>c.ai</p>
                </div>
                <div className='message'>
                    <p className='pp'>
                        Welche Sprache lernst du denn gerade?
                    </p>
                </div>
            </div>
            <input className='send-msg' type = "text" placeholder='Message HyperGlot...' />
            <LuSendHorizonal className='btnn'/>
        </div>

    )
}


export default Chat