import FeedbackItem from './FeedbackItem';

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList(){
    const { feedback } = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return(
        <div className="feedback-list">
            
            {feedback.map((item) => {
                return (
                    <FeedbackItem 
                        item={item} 
                        key={item.id}
                    />
                );
            })}
        </div>
    );

    // #### without animation
    // return(
    //     <div className="feedback-list">
    //         {feedback.map((item) => {
    //             return (
    //             <FeedbackItem 
    //                 item={item} 
    //                 key={item.id} 
    //                 handleDelete={handleDelete}
    //             />)
    //         })}
    //     </div>
    // );
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.oneOfType([
//                 PropTypes.number,
//                 PropTypes.string
//             ]),
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired
//         })
//     )
// }

export default FeedbackList;