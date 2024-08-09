
import React from 'react';
import './TicketDetails.css'; 

const TicketDetail = ({ ticket, onBack }) => {
    return (
        <div className="ticket-detail">
            <button className="back-button" onClick={onBack}>Back to List</button>
            <h2>Ticket Details</h2>
            <div className="chat-container">
                <div className="chat-message user">
                    <div className="message-content">
                        <strong>Support Agent:</strong> 
                        <p>Hello, how can I assist you today?</p>
                    </div>
                </div>
                <div className="chat-message customer">
                    <div className="message-content">
                        <strong>Customer:</strong> 
                        <p>I have an issue with my recent order.</p>
                    </div>
                </div>
                {/* Add more messages as needed */}
            </div>
            <div className="ticket-info">
                <p><strong>ID:</strong> {ticket.id}</p>
                <p><strong>Subject:</strong> {ticket.subject}</p>
                <p><strong>Channel:</strong> {ticket.channel}</p>
                <p><strong>Ticket Form:</strong> {ticket.ticketForm}</p>
                <p><strong>Requester:</strong> {ticket.requester}</p>
            </div>
        </div>
    );
};

export default TicketDetail;
