# This backend code includes:

 - User registration and login with JWT-based authentication.
 - Data management for hospitals (adding and retrieving data).
 - Alert system to handle emergency alerts.
 - Role-based access control for different users (Admin1, Admin2, Super Admin)

# Roles and Responsibilities:

## Admin1 (Hospital Head):
 - Responsible for entering data into the hospital ERP.
 - Sends verification requests to Admin2 for hospital verification.
 - Receives alerts and can send alerts to nearby hospitals in critical situations (e.g., bed shortages).

## Admin2 (Government Official):
 - Approves or rejects verification requests sent by Admin1.
 - Collects and sends hospital data (e.g., patient statistics, bed availability, mortality rates) to the state level.
 - Receives alerts from Super Admin and coordinates with hospitals.

## Super Admin (Government Head at State/UT Level):
 - Monitors overall reports dynamically.
 - Provides policy feedback and implements healthcare schemes.
 - Has a dedicated "alert" feature for managing critical situations at the state or district level.
