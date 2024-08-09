
import React, { useState } from 'react';
import './TicketList.css'; 
import TicketDetail from './TicketDetails'; 

const TicketList = () => {
    const [selectedTicket, setSelectedTicket] = useState(null);

    const tickets = [
        { id: '#2138', subject: 'Chat with Visitor', channel: 'Web form', ticketForm: 'Returns', requester: 'Jane Dough' },
        { id: '#2137', subject: 'Return policy', channel: 'Web form', ticketForm: 'General Request', requester: 'Courtney Barnett' },
        { id: '#2136', subject: 'Product Inquiry', channel: 'Email', ticketForm: 'Returns', requester: 'John Smith' },
        { id: '#2135', subject: 'Technical Support', channel: 'Web form', ticketForm: 'Support', requester: 'Emily Davis' },
        { id: '#2134', subject: 'Order Status', channel: 'Phone', ticketForm: 'General Request', requester: 'Michael Johnson' },
        { id: '#2133', subject: 'Shipping Delay', channel: 'Phone', ticketForm: 'Returns', requester: 'Alice Johnson' },
        { id: '#2132', subject: 'Payment Issue', channel: 'Email', ticketForm: 'Support', requester: 'Bob Williams' },
        { id: '#2131', subject: 'Refund Request', channel: 'Web form', ticketForm: 'Returns', requester: 'Carol White' },
        { id: '#2130', subject: 'Order Cancellation', channel: 'Phone', ticketForm: 'General Request', requester: 'Dave Brown' },
        { id: '#2129', subject: 'Product Replacement', channel: 'Web form', ticketForm: 'Returns', requester: 'Eve Black' }
    ];

    const handleClick = (ticket) => {
        setSelectedTicket(ticket);
    };

    const handleBack = () => {
        setSelectedTicket(null);
    };

    return (
        <div className="ticket-list">
            {selectedTicket ? (
                <div className="ticket-detail-view">
                    <TicketDetail ticket={selectedTicket} onBack={handleBack} />
                </div>
            ) : (
                <div className="table-container">
                    <h2>Returns</h2>
                    <div className="table-header">
                        <span>ID</span>
                        <span>Subject</span>
                        <span>Channel</span>
                        <span>Ticket Form</span>
                        <span>Requester</span>
                    </div>
                    <div className="table-divider"></div>
                    <div className="records">
                        <ul>
                            {tickets.map(ticket => (
                                <li key={ticket.id} onClick={() => handleClick(ticket)}>
                                    <span>{ticket.id}</span>
                                    <span>{ticket.subject}</span>
                                    <span>{ticket.channel}</span>
                                    <span>{ticket.ticketForm}</span>
                                    <span>{ticket.requester}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TicketList;
