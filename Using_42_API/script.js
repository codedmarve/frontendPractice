async function fetchStudentData() {
    try {
        const response = await fetch('https://api.42wolfsburg.com/v2/students'); // Replace with your own API URL
        const students = await response.json();

        const studentList = document.getElementById('student-list');
        studentList.innerHTML = ''; // Clear existing data

        students.forEach(student => {
            const studentDiv = document.createElement('div');
            studentDiv.className = 'student-item';

            studentDiv.innerHTML = `
                <h3>${student.name}</h3>
                <p>Core Completed: ${student.core_completed ? "Yes" : "No"}</p>
                <p>Internship: ${student.internship ? "Yes" : "No"}</p>
                <p>Employed: ${student.employed ? "Yes" : "No"}</p>
            `;

            studentList.appendChild(studentDiv);
        });
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}