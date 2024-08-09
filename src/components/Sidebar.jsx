
import React from 'react';
import './Sidebar.css'; 
import { FaRedo, FaChevronLeft } from 'react-icons/fa'; 

const Sidebar = () => {
    const views = [
         { name: 'WhatsApp conversations - Assigned', count: 12 },
         { name: 'WhatsApp conversations - Unassigned', count: 8 },
         { name: 'Email Tickets', count: 15 },
         { name: 'Rated tickets from the last 7 days', count: 5 },
         { name: 'Urgent unresolved tickets', count: 3 },
         { name: 'Returns', count: 7 },
         { name: 'Website Requests', count: 9 },
         { name: 'Tier 1 Support', count: 11 }
    ];

    return (
        <div className="sidebar">
            <div className="views">
                <div className="views-header">
                    <h3>Views</h3>
                    <div className="views-header-icons">
                        <FaRedo className="icon" />
                        <FaChevronLeft className="icon" />
                    </div>
                </div>
                <div className="views-line"></div>
                <div className="views-table">
                    {views.map((view, index) => (
                        <div key={index} className="views-row">
                            <div className="view-name">{view.name}</div>
                            <div className="view-count">{view.count}</div>
                        </div>
                    ))}
                </div>
                <div className="more-options">
                    <span>More...</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
