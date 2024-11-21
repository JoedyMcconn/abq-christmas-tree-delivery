import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ padding: '10px', background: '#333', color: '#fff', textAlign: 'center' }}>
            <p>© {new Date().getFullYear()} ABQ Christmas Tree Delivery</p>
        </footer>
    );
};

export default Footer;
