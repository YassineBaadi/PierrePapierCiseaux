import './card.css'
import Triangle from '../../assets/bg-triangle.svg'
import Scissor from '../../assets/icon-scissors.svg'
import Paper from '../../assets/icon-paper.svg'
import Rock from '../../assets/icon-rock.svg'



export default function Cards(){



    return(
        <>
        <div className='containerCards'>
            <div className='triangle'>
                <img src={Triangle} alt="" />
            </div>
            <div className='paper'>

            </div>
            <div className='scissor'>

            </div>
            <div className='rock'>

            </div>

        </div>
        
        </>
    )
}