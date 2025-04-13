import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

interface DocumentData {
  id: string;
  name: string;
  type: string;
  status: string;
  target: string;
  limit: string;
  reviewer: string;
}

interface DocumentStatusTableProps {
  documentData: DocumentData[];
}

const DocumentStatusTable: React.FC<DocumentStatusTableProps> = ({ documentData }) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <CardTitle className="text-[#071487] text-lg font-semibold">Document Status</CardTitle>
          <Button variant="outline" size="sm" className="text-xs">
            <Download className="h-3 w-3 mr-2" />
            Export Data
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-2 font-medium">Header</th>
                <th className="text-left py-3 px-2 font-medium">Section Type</th>
                <th className="text-left py-3 px-2 font-medium">Status</th>
                <th className="text-left py-3 px-2 font-medium">Target</th>
                <th className="text-left py-3 px-2 font-medium hidden md:table-cell">Limit</th>
                <th className="text-left py-3 px-2 font-medium hidden md:table-cell">Reviewer</th>
              </tr>
            </thead>
            <tbody>
              {documentData.map((doc) => (
                <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-2 text-sm">{doc.name}</td>
                  <td className="py-3 px-2 text-sm">{doc.type}</td>
                  <td className="py-3 px-2 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      doc.status === "Completed" ? "bg-green-100 text-green-800" :
                      doc.status === "In Process" ? "bg-blue-100 text-blue-800" :
                      doc.status === "In Review" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-sm">{doc.target}</td>
                  <td className="py-3 px-2 text-sm hidden md:table-cell">{doc.limit}</td>
                  <td className="py-3 px-2 text-sm hidden md:table-cell">{doc.reviewer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentStatusTable;