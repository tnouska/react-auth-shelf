import React from 'react';
import { Link } from 'react-router-dom';

const PublicNav = () => (
    <div className="navbar">
        <div>
            <ul>
                <li>
                    <Link to="/viewitem">
                        View All Items
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);

export default PublicNav;
