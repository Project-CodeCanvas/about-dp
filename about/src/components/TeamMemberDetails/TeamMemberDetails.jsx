import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './TeamMemberDetails.module.css';

const teamMembers = [
    { id: 1, name: 'Aman Jain', role: 'Software Engineer', image: 'path/to/image1.png', about: 'About Aman Jain' },
    { id: 2, name: 'Aryan Yadav', role: 'Product Manager', image: 'path/to/image2.png', about: 'About Aryan Yadav' },
    { id: 3, name: 'Dipen Patel', role: 'UX Designer', image: 'path/to/image3.png', about: 'About Dipen Patel' },
    { id: 4, name: 'Dhairya Parikh', role: 'Backend Developer', image: 'path/to/image4.png', about: 'About Dhairya Parikh' },
    { id: 5, name: 'Manas Patidar', role: 'Developer', image: 'path/to/image5.png', about: 'About Manas Patidar' },
    { id: 6, name: 'Hetkumar Prajapati', role: 'Developer', image: 'path/to/image6.png', about: 'About Hetkumar Prajapati' },
];

function TeamMemberDetails() {
    const { memberId } = useParams();
    const navigate = useNavigate();
    const member = teamMembers.find(m => m.id === parseInt(memberId));

    if (!member) {
        return <div>Member not found</div>;
    }

    return (
        <div className={styles.detailsContainer}>
            <button onClick={() => navigate(-1)}>Close</button>
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>About:</strong> {member.about}</p>
        </div>
    );
}

export default TeamMemberDetails;
