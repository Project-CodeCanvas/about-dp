import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import image1 from '../../assets/user.png';
import image2 from '../../assets/user.png';
import image3 from '../../assets/user.png';

function About() {
    const [teamMembers, setTeamMembers] = useState([
        { id: 1, name: 'Aman Jain', role: 'Software Engineer', image: image1, about: 'About Aman' },
        { id: 2, name: 'Aryan Yadav', role: 'Product Manager', image: image2, about: 'About Aryan' },
        { id: 3, name: 'Dipen Patel', role: 'UX Designer', image: image3, about: 'About Dipen' },
        { id: 4, name: 'Dhairya Parikh', role: 'Backend Developer', image: image3, about: 'About Dhairya' },
        { id: 5, name: 'Manas Patidar', role: 'Developer', image: image3, about: 'About Manas' },
        { id: 6, name: 'Hetkumar Prajapati', role: 'Developer', image: image3, about: 'About Hetkumar' },
    ]);

    const [newMember, setNewMember] = useState({ name: '', role: '', image: '', about: '' });
    const [showAddPopup, setShowAddPopup] = useState(false);

    const handleRemoveMember = (id) => {
        setTeamMembers(teamMembers.filter((member) => member.id !== id));
    };

    const handleAddMember = () => {
        setTeamMembers([...teamMembers, { ...newMember, id: teamMembers.length + 1 }]);
        setShowAddPopup(false);
        setNewMember({ name: '', role: '', image: '', about: '' });
    };

    return (
        <>
            <h1>About Our Team</h1>
            <div className={styles.aboutContainer}>
                {teamMembers.map((member) => (
                    <div key={member.id} className={styles.member}>
                        <img src={member.image} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>{member.role}</p>
                        <Link to={`/team/${member.id}`}>View Details</Link>
                        <button onClick={() => handleRemoveMember(member.id)}>Remove</button>
                    </div>
                ))}
                <button onClick={() => setShowAddPopup(true)}>Add Team Member</button>
            </div>

            {showAddPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupInner}>
                        <h2>Add New Team Member</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newMember.name}
                            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Role"
                            value={newMember.role}
                            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={newMember.image}
                            onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
                        />
                        <textarea
                            placeholder="About"
                            value={newMember.about}
                            onChange={(e) => setNewMember({ ...newMember, about: e.target.value })}
                        />
                        <button onClick={handleAddMember}>Add</button>
                        <button onClick={() => setShowAddPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default About;
