# Time_Doctor
A Time Doctor–inspired time tracking and productivity monitoring system that helps individuals and teams track work hours, analyze productivity in real time.


# DeskTime - Workspace Productivity & Monitoring System 🚀

DeskTime is a comprehensive, self-hosted Employee Monitoring and Productivity Tracking System. The system is designed to provide real-time insights into workforce efficiency, time tracking, and application usage.

## 🏗️ System Architecture
This project is strictly divided into two distinct components that work together seamlessly:

### 1. The Web Portal (Server / Admin Dashboard)
Built with **Python Flask** and **SQLite**, this is the central brain of the system. It handles user authentication, data storage, role-based access control (RBAC), report generation, and system configurations. 
* **Accessed via:** Web Browser (e.g., Chrome, Edge)
* **Users:** Admins, HRs, Managers, and Employees (to view their personal stats).

### 2. The Desktop Agent (Client Application)
A lightweight executable (`.exe`) application installed on the employee's computer. It runs quietly in the background, communicating with the Web Portal via secure APIs.
* **Responsibilities:** Captures active/idle status, tracks application usage, takes periodic screenshots (if enabled), and sends heartbeat signals to the server.

---

## ✨ Key Features
* **Role-Based Access Control (RBAC):** Distinct dashboards for Admin, HR, Manager, and Employee.
* **Invite-Only Registration:** Secure workspace where Admins/HRs send encrypted email invitations for onboarding.
* **Automated Time Tracking:** Tracks Active, Idle, and Offline states accurately.
* **Productivity Categorization:** Classifies applications as Productive, Unproductive, or Neutral based on custom rules.
* **Screen Capturing:** Takes automatic screenshots at defined intervals (can be toggled per user).
* **Live Command Center:** Real-time pulse and activity stream of the workforce.
* **Intelligent Reporting:** Exportable CSV reports and interactive charts (Chart.js).
* **Premium UI/UX:** Built with Bootstrap 5, featuring a seamless Dark/Light mode toggle.

---

## 🛠️ Technology Stack
* **Backend:** Python, Flask
* **Database:** SQLite3
* **Frontend:** HTML5, CSS3, Bootstrap 5.3, Bootstrap Icons
* **Data Visualization:** Chart.js
* **Email System:** SMTP (Gmail App Passwords)

---

## ⚙️ Installation & Setup (Web Portal)

### Prerequisites
* Python 3.8 or higher installed on your system.
* A Gmail account with 2-Step Verification enabled (for sending invites).

### Step 1: Clone and Setup Environment
1. Extract the project folder.
2. Open your terminal/command prompt in the project directory.
3. Install the required Python libraries:
   ```bash
   pip install flask requests werkzeug
