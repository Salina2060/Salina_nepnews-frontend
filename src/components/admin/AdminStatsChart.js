'use client';// This directive indicates that the component is a client-side component.

// Importing necessary components from recharts.
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// Define colors for the pie chart segments.

const COLORS = ['#007bff', '#28a745', '#ffc107', '#dc3545'];

// Prepare data for user role distribution pie chart.
export default function AdminStatsChart({ data }) {
  const roleData = [
    { name: 'Readers', value: data.readers },
    { name: 'Authors', value: data.authors },
    { name: 'Editors', value: data.editors },
    { name: 'Admins', value: data.admins },
  ];

  const newsData = [
    { name: 'Drafts', value: data.drafts },
    { name: 'Published', value: data.published },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-10 mt-10">
      {/* Role Distribution Pie */}
      <div className="bg-gray-800 p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 text-white-800">User Role Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={roleData}
              dataKey="value" // Data for the pie chart.
              nameKey="name"  // Key to determine the value of each segment.
              cx="50%"// X-coordinate of the center of the pie chart.
              cy="50%" // Y-coordinate of the center of the pie chart.
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {roleData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            // Display tooltips on hover
            <Tooltip /> 
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* News Status Pie */}
      <div className="bg-gray-800 p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 text-white-800">News Status Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={newsData}
              dataKey="value" // Key to determine the value of each segment.
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {newsData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            // Display a legend for the pie chart.
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
