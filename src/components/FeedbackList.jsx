import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }){
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
                        handleDelete={handleDelete}
                    />
                );
            })}
        </div>
    );

    // #### Version without animation
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

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList;