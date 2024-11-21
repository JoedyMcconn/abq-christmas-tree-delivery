import React from 'react';

const Contact: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Contact Us</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required style={{ display: 'block', margin: '10px 0' }} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required style={{ display: 'block', margin: '10px 0' }} />
                </label>
                <label>
                    Message:
                    <textarea name="message" required style={{ display: 'block', margin: '10px 0' }}></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
