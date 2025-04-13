
export interface MonthlyCompletionData {
  date: string;
  month: string;
  completed: number;
  notCompleted: number;
}

export interface TaskStatusData {
  month: string;
  completed: number;
  notCompleted: number;
  hold: number;
}

export interface TaskBreakdownData {
  status: string;
  count: number;
}

export interface TopTaskData {
  name: string;
  value: number;
}

export interface VisitorData {
  date: string;
  visitors: number;
  newUsers: number;
}

export interface DocumentData {
  id: string;
  name: string;
  type: string;
  status: string;
  target: string;
  limit: string;
  reviewer: string;
}

export interface PersonnelData {
  id: string;
  name: string;
  role: string;
  expertise: string;
  contact: string;
}

export interface FocusDocumentData {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
}

export interface LogData {
  test: string;
  location: string;
  status: string;
  time: string;
  name: string;
  message: string; 
}


export const monthlyCompletionData: MonthlyCompletionData[] = [
  { date: "2025-01-31", month: "Jan", completed: 45, notCompleted: 55 },
  { date: "2025-02-29", month: "Feb", completed: 52, notCompleted: 48 },
  { date: "2025-03-31", month: "Mar", completed: 67, notCompleted: 33 },
  { date: "2025-04-07", month: "Apr", completed: 61, notCompleted: 39 },
  { date: "2025-04-13", month: "Apr", completed: 73, notCompleted: 27 },
  { date: "2025-04-01", month: "Apr", completed: 58, notCompleted: 42 },
  { date: "2025-04-11", month: "Apr", completed: 82, notCompleted: 18 },
  { date: "2025-04-10", month: "Apr", completed: 77, notCompleted: 23 },
];

export const taskStatusData: TaskStatusData[] = [
  { month: "Jan", completed: 55, notCompleted: 20, hold: 15 },
  { month: "Feb", completed: 62, notCompleted: 18, hold: 14 },
  { month: "Mar", completed: 48, notCompleted: 25, hold: 18 },
  { month: "Apr", completed: 71, notCompleted: 12, hold: 18 },
  { month: "May", completed: 57, notCompleted: 22, hold: 12 },
  { month: "Jun", completed: 63, notCompleted: 17, hold: 2 },
  { month: "Jul", completed: 69, notCompleted: 14, hold: 15 },
  { month: "Aug", completed: 52, notCompleted: 23, hold: 10 },
];

export const taskBreakdownData: TaskBreakdownData[] = [
  { status: "Completed", count: 145 },
  { status: "In Progress", count: 78 },
  { status: "Pending", count: 42 },
  { status: "On Hold", count: 25 },
];

export const topTasksData: TopTaskData[] = [
  { name: "Documentation", value: 85 },
  { name: "Testing", value: 72 },
  { name: "Development", value: 65 },
  { name: "Design", value: 58 },
  { name: "Research", value: 45 },
  { name: "Planning", value: 38 },
];

export const visitorData: VisitorData[] = [
  { date: "2025-01-15", visitors: 120, newUsers: 45 },
  { date: "2025-01-31", visitors: 145, newUsers: 52 },
  { date: "2025-02-15", visitors: 132, newUsers: 48 },
  { date: "2025-02-28", visitors: 158, newUsers: 63 },
  { date: "2025-03-15", visitors: 175, newUsers: 71 },
  { date: "2025-03-31", visitors: 192, newUsers: 85 },
  { date: "2025-04-01", visitors: 188, newUsers: 78 },
  { date: "2025-04-02", visitors: 195, newUsers: 82 },
  { date: "2025-04-03", visitors: 201, newUsers: 87 },
  { date: "2025-04-04", visitors: 210, newUsers: 92 },
  { date: "2025-04-05", visitors: 215, newUsers: 95 },
  { date: "2025-04-06", visitors: 220, newUsers: 98 },
  { date: "2025-04-07", visitors: 225, newUsers: 102 },
];

export const documentData: DocumentData[] = [
  { id: "doc1", name: "Project Overview", type: "Introduction", status: "Completed", target: "All Teams", limit: "N/A", reviewer: "John Smith" },
  { id: "doc2", name: "Technical Specifications", type: "Technical", status: "In Process", target: "Development", limit: "Apr 15", reviewer: "Jane Doe" },
  { id: "doc3", name: "User Requirements", type: "Requirements", status: "In Review", target: "Product", limit: "Apr 10", reviewer: "Mike Johnson" },
  { id: "doc4", name: "Testing Plan", type: "QA", status: "Pending", target: "QA Team", limit: "Apr 20", reviewer: "Sarah Williams" },
  { id: "doc5", name: "Deployment Strategy", type: "Operations", status: "In Process", target: "DevOps", limit: "Apr 25", reviewer: "David Brown" },
];

export const keyPersonnelData: PersonnelData[] = [
  { id: "person1", name: "John Smith", role: "Project Manager", expertise: "Agile, SCRUM, Project Planning", contact: "john.smith@example.com" },
  { id: "person2", name: "Jane Doe", role: "Lead Developer", expertise: "React, Node.js, TypeScript", contact: "jane.doe@example.com" },
  { id: "person3", name: "Mike Johnson", role: "UX Designer", expertise: "UI/UX, Figma, User Research", contact: "mike.johnson@example.com" },
  { id: "person4", name: "Sarah Williams", role: "QA Lead", expertise: "Test Automation, Manual Testing", contact: "sarah.williams@example.com" },
  { id: "person5", name: "David Brown", role: "DevOps Engineer", expertise: "CI/CD, Docker, Kubernetes", contact: "david.brown@example.com" },
  { id: "person6", name: "Emily Davis", role: "Product Owner", expertise: "Product Management, User Stories", contact: "emily.davis@example.com" },
];

export const focusDocumentsData: FocusDocumentData[] = [
  { id: "focus1", title: "System Architecture", description: "Overview of system components and interactions", lastUpdated: "2025-04-01" },
  { id: "focus2", title: "API Documentation", description: "Detailed API endpoints and usage examples", lastUpdated: "2025-03-28" },
  { id: "focus3", title: "User Manual", description: "End-user documentation for system features", lastUpdated: "2025-03-25" },
  { id: "focus4", title: "Security Assessment", description: "Security review and vulnerability analysis", lastUpdated: "2025-04-02" },
];


export const logs: LogData[] = [
  {
    test: "User Authentication",
    location: "Auth Module",
    status: "Completed",
    time: "2025-04-07T10:30:00",
    name: "Jane Doe",
    message: "Authentication module successfully validated.",
  },
  {
    test: "Data Import",
    location: "Integration API",
    status: "In Progress",
    time: "2025-04-07T11:45:00",
    name: "Mike Johnson",
    message: "Import from external system started.",
  },
  {
    test: "Report Generation",
    location: "Reporting Module",
    status: "Pending",
    time: "2025-04-07T09:15:00",
    name: "Sarah Williams",
    message: "Awaiting data inputs from finance.",
  },
  {
    test: "User Profile Update",
    location: "User Module",
    status: "Completed",
    time: "2025-04-06T16:20:00",
    name: "David Brown",
    message: "User information updated successfully.",
  },
  {
    test: "Payment Processing",
    location: "Billing Module",
    status: "In Progress",
    time: "2025-04-06T14:10:00",
    name: "Emily Davis",
    message: "Transaction queued for settlement.",
  },
];