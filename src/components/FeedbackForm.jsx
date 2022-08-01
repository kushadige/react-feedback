import { useState } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm({ handleAdd }){
    const [formText, setFormText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if(formText === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if(formText.trim().length <= 10 && formText !== '') {
            setBtnDisabled(true);
            setMessage('Feedback must be at least 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setFormText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formText.trim().length <= 10){
            return;
        }

        const newFeedback = {
            text: formText,
            rating: rating
        }

        handleAdd(newFeedback);

        setFormText('');
        setRating(10);
    }

    const selectedRating = (rating) => {
        setRating(rating);
    }

    return(
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How would you rate your service with us</h2>
                    {/* @todo - rating select component */}
                    <RatingSelect selectedRating={selectedRating} />
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder='Write a review' 
                            value={formText}
                            onChange={handleTextChange} 
                        />
                        <Button version='secondary' type='submit' isDisabled={btnDisabled}>Send</Button>
                    </div>

                    {message && <div className='message'>{message}</div>}
                </form>
            </Card>
        </div>
    );
}

export default FeedbackForm;