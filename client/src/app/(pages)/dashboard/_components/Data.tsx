
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
  { name: "Filter Replacement", value: 85 },
  { name: "LAPA Assessment", value: 72 },
  { name: "Asset Inspection", value: 65 },
  { name: "Risk Assessment", value: 58 },
  { name: "Maintenance", value: 45 },
  { name: "Certification", value: 38 },
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
  { id: "doc1", name: "Asset Maintenance Guide", type: "Manual", status: "Completed", target: "Maintenance Team", limit: "N/A", reviewer: "John Smith" },
  { id: "doc2", name: "LAPA Assessment Protocol", type: "Protocol", status: "In Process", target: "Assessors", limit: "Apr 15", reviewer: "Jane Doe" },
  { id: "doc3", name: "Filter Requirements", type: "Technical", status: "In Review", target: "Engineers", limit: "Apr 10", reviewer: "Mike Johnson" },
  { id: "doc4", name: "Risk Assessment Guide", type: "Guidelines", status: "Pending", target: "Assessment Team", limit: "Apr 20", reviewer: "Sarah Williams" },
  { id: "doc5", name: "Asset Management Plan", type: "Planning", status: "In Process", target: "Management", limit: "Apr 25", reviewer: "David Brown" },
];

export const keyPersonnelData: PersonnelData[] = [
  { id: "person1", name: "John Smith", role: "Asset Manager", expertise: "Asset Management, Maintenance Planning", contact: "john.smith@example.com" },
  { id: "person2", name: "Jane Doe", role: "LAPA Specialist", expertise: "Risk Assessment, LAPA Protocol", contact: "jane.doe@example.com" },
  { id: "person3", name: "Mike Johnson", role: "Maintenance Lead", expertise: "Asset Maintenance, Filter Systems", contact: "mike.johnson@example.com" },
  { id: "person4", name: "Sarah Williams", role: "Quality Inspector", expertise: "Quality Control, Compliance", contact: "sarah.williams@example.com" },
  { id: "person5", name: "David Brown", role: "Technical Engineer", expertise: "Technical Assessment, Systems", contact: "david.brown@example.com" },
  { id: "person6", name: "Emily Davis", role: "Compliance Manager", expertise: "Regulations, Documentation", contact: "emily.davis@example.com" },
];

export const focusDocumentsData: FocusDocumentData[] = [
  { id: "focus1", title: "Asset Maintenance Schedule", description: "Upcoming maintenance and filter replacement schedule", lastUpdated: "2025-04-01" },
  { id: "focus2", title: "Filter Inventory Status", description: "Current inventory levels and reorder requirements", lastUpdated: "2025-03-28" },
  { id: "focus3", title: "Asset Location Map", description: "Floor-wise mapping of all installed assets", lastUpdated: "2025-03-25" },
  { id: "focus4", title: "Maintenance Reports", description: "Recent maintenance activities and asset health status", lastUpdated: "2025-04-02" },
];

export const logs: LogData[] = [
  {
    test: "LAPA Assessment",
    location: "MNA-R.300",
    status: "Completed",
    time: "2025-04-07T10:30:00",
    name: "John",
    message: "Filter replacement completed and validated.",
  },
  {
    test: "Asset Inspection",
    location: "MNA-R.301",
    status: "In Progress",
    time: "2025-04-07T11:45:00",
    name: "Mike",
    message: "Regular maintenance check initiated.",
  },
  {
    test: "Risk Assessment",
    location: "MNA-R.303",
    status: "Pending",
    time: "2025-04-07T09:15:00",
    name: "Sarah",
    message: "Awaiting filter replacement parts.",
  },
  {
    test: "Maintenance",
    location: "MNA-R.304",
    status: "Completed",
    time: "2025-04-06T16:20:00",
    name: "David",
    message: "Asset information updated successfully.",
  },
  {
    test: "Certification",
    location: "MNA-R.305",
    status: "In Progress",
    time: "2025-04-06T14:10:00",
    name: "Emily",
    message: "LAPA certification in process.",
  },
];