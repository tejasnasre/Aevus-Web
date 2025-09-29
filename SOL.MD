# Our Solution  

We built a working prototype of a **mobile app using React Native (Expo)** for a secure and intelligent attendance management system. Our app is designed not only to solve attendance fraud and inefficiency but also to improve student productivity and engagement during free time.  

---

## Role-Based Access Control (RBAC)  
Our solution uses **RBAC (Role-Based Access Control)** with four clearly defined roles:  

1. **Admin**  
   - Approves and manages all roles below it.  

2. **Head of Department (HOD)**  
   - Approves teachers.  
   - Assigns teachers as class teachers.  
   - Approves students.  

3. **Teacher**  
   - Approves students in their department.  
   - If assigned as a **class teacher**, they can:  
     - Add timetables for subjects in their classes.  
     - Assign teachers to specific subjects.  
     - Mark attendance for students enrolled in their classes.  

4. **Student**  
   - Enrolls in classes and subjects assigned by teachers.  
   - Marks attendance using the secure verification flow.  

---

## Attendance Marking Flow  
The core feature of our app is **fraud-proof, multi-layered attendance marking**.  

- We use **react-native-ble-plx** for **Bluetooth Low Energy (BLE) proximity detection**.  
- **Expo Location** validates that the student is physically within the classroom area.  
- When a **teacher logs in**, Bluetooth must be turned on to start an attendance session.  
- The teacher generates a **time-bound OTP at runtime**, which students must enter to mark their attendance.  
- Verification layers:  
  1. BLE proximity ensures the device is nearby.  
  2. GPS/Wi-Fi confirms correct classroom location.  
  3. OTP validates real-time teacher session.  

This process makes the system **secure, accurate, and proxy-proof**.  

---

## Beyond Attendance: Student Engagement  
Our solution goes beyond just attendance. We want to help students use their time effectively:  

- **AI-Powered Suggestions (LangChainJS / Agentic AI):**  
  During free periods, students get recommendations for workshops, micro-tasks, or skill-building activities based on their **interests, strengths, and career goals**.  

- **Personalized Routines:**  
  Students can create daily routines by combining **class schedules, free time, and personal goals**. They can drag-and-drop tasks, while AI provides smart suggestions to keep them on track.  

- **Gamification:**  
  To maintain long-term motivation, we plan to add badges, challenges, and small rewards for consistent attendance and task completion.  

---

## Technical Features  
- **Multi-Modal Attendance:** BLE + Face Recognition + GPS/Wi-Fi + OTP.  
- **Dynamic QR Codes:** Session-specific QR codes for additional verification.  
- **Offline Sync:** Attendance can be marked without internet and syncs when back online.  
- **Cloud Integration:** Real-time analytics and dashboards for teachers and administrators.  
- **Web Portal:** Dashboards for admins, HODs, and counselors to track attendance and engagement.  
- **Tech Stack:**  
  - **Frontend:** React Native (Expo) mobile app + Web portal.  
  - **Backend:** REST APIs with RBAC, caching, and queues.  
  - **Database:** Relational DB + Vector DB for personalization.  
  - **Other Services:** Firebase/Supabase (auth + notifications), Socket.IO (real-time updates).  

---

## Why Our Solution Works  
- **Secure:** Multi-layer verification prevents proxy attendance.  
- **Scalable:** Works across departments, classrooms, and institutions without extra hardware.  
- **Cost-Effective:** Uses existing smartphones instead of expensive biometric systems.  
- **Efficient:** Saves teachers’ class time by automating attendance.  
- **Engaging:** AI suggestions and gamification keep students motivated.  

---

## Impact  
With our system, we expect to:  
- **Reduce teacher roll-call time by ~60%**.  
- **Improve students’ productive use of free time by ~40%**.  
- **Cut attendance errors and missing records by ~80%**.  
- **Increase student task completion by ~35%** in one semester.  
- **Reduce chronic absenteeism by ~25%** with early alerts to counselors.  

---

## Summary  
Our app is not just an attendance tracker — it is a **smart productivity and engagement platform**. By combining **secure attendance (BLE + GPS + OTP + face recognition)** with **AI-driven personalized guidance**, we are transforming attendance into a tool for **student growth, teacher efficiency, and institutional transparency**.  
