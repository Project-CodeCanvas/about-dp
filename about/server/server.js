const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const TEAM_MEMBERS_FILE = path.join(DATA_DIR, 'team.json');
const CONTACT_FILE = path.join(DATA_DIR, 'messages.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

// Ensure team.json exists
if (!fs.existsSync(TEAM_MEMBERS_FILE)) {
  fs.writeFileSync(TEAM_MEMBERS_FILE, JSON.stringify([]));
}

// Ensure messages.json exists
if (!fs.existsSync(CONTACT_FILE)) {
  fs.writeFileSync(CONTACT_FILE, JSON.stringify([]));
}

// Read team members from file
function readTeamMembers() {
  const data = fs.readFileSync(TEAM_MEMBERS_FILE, 'utf8');
  return JSON.parse(data);
}

// Write team members to file
function writeTeamMembers(members) {
  fs.writeFileSync(TEAM_MEMBERS_FILE, JSON.stringify(members, null, 2));
}

// Read contact messages from file
function readContactMessages() {
  const data = fs.readFileSync(CONTACT_FILE, 'utf8');
  return JSON.parse(data);
}

// Write contact messages to file
function writeContactMessages(messages) {
  fs.writeFileSync(CONTACT_FILE, JSON.stringify(messages, null, 2));
}

// Get all team members
app.get('/api/team-members', (req, res) => {
  const teamMembers = readTeamMembers();
  res.json(teamMembers);
});

// Add a new team member
app.post('/api/team-members', (req, res) => {
  const newMember = req.body;
  const teamMembers = readTeamMembers();
  teamMembers.push(newMember);
  writeTeamMembers(teamMembers);
  res.status(201).json(newMember);
});

// Remove a team member
app.delete('/api/team-members/:id', (req, res) => {
  const { id } = req.params;
  let teamMembers = readTeamMembers();
  teamMembers = teamMembers.filter(member => member.id !== parseInt(id, 10));
  writeTeamMembers(teamMembers);
  res.status(204).end();
});

// Handle contact form submission
app.post('/contact', (req, res) => {
  const newMessage = req.body;
  const contactMessages = readContactMessages();
  contactMessages.push(newMessage);
  writeContactMessages(contactMessages);
  res.status(201).json(newMessage);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
