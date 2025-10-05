const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        taskName: "Prepare Report",
        taskDescription: "Prepare the monthly sales report.",
        deadline: "2025-10-10",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskName: "Team Meeting",
        taskDescription: "Attend weekly team sync-up.",
        deadline: "2025-10-05",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskName: "Fix Bug #342",
        taskDescription: "Resolve login issue reported by QA.",
        deadline: "2025-10-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "1234",
    tasks: [
      {
        taskName: "Update Documentation",
        taskDescription: "Revise API docs for the new release.",
        deadline: "2025-10-12",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskName: "Code Review",
        taskDescription: "Review pull requests assigned.",
        deadline: "2025-10-06",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskName: "UI Testing",
        taskDescription: "Perform UI testing on the dashboard module.",
        deadline: "2025-10-09",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskName: "Client Call",
        taskDescription: "Discuss requirements with the client.",
        deadline: "2025-10-07",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "1234",
    tasks: [
      {
        taskName: "Deploy App",
        taskDescription: "Deploy the latest build to staging.",
        deadline: "2025-10-06",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskName: "Security Audit",
        taskDescription: "Run vulnerability scan on the backend services.",
        deadline: "2025-10-15",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskName: "Training",
        taskDescription: "Complete the mandatory security training.",
        deadline: "2025-10-20",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "1234",
    tasks: [
      {
        taskName: "Data Backup",
        taskDescription: "Ensure weekly data backup is completed.",
        deadline: "2025-10-05",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskName: "Optimize Query",
        taskDescription: "Improve performance of slow SQL queries.",
        deadline: "2025-10-11",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskName: "Bug Triage",
        taskDescription: "Analyze and prioritize incoming bug reports.",
        deadline: "2025-10-09",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskName: "Write Test Cases",
        taskDescription: "Write unit tests for new features.",
        deadline: "2025-10-14",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "1234",
    tasks: [
      {
        taskName: "Design Mockups",
        taskDescription: "Create mockups for new landing page.",
        deadline: "2025-10-08",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskName: "Bug Fixing",
        taskDescription: "Fix layout issues on mobile devices.",
        deadline: "2025-10-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskName: "Feature Implementation",
        taskDescription: "Implement search functionality.",
        deadline: "2025-10-18",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskName: "Prepare Presentation",
        taskDescription: "Prepare slides for the product demo.",
        deadline: "2025-10-13",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskName: "Integration Testing",
        taskDescription: "Test integration between frontend and backend.",
        deadline: "2025-10-16",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "1234"
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
 const employee= JSON.parse(localStorage.getItem('employees'))   
 const admin= JSON.parse(localStorage.getItem('admin')) 
 return {employee,admin}  
}