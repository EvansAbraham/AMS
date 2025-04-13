import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Calendar } from 'lucide-react';

interface FocusDocument {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
}

interface DocumentsTabProps {
  focusDocumentsData: FocusDocument[];
}

const DocumentsTab: React.FC<DocumentsTabProps> = ({ focusDocumentsData }) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-[#071487] text-lg font-semibold">Focus Documents</CardTitle>
            <CardDescription>Key documents requiring attention and review</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              <Calendar className="h-3 w-3 mr-2" />
              Schedule Review
            </Button>
            <Button variant="default" size="sm" className="text-xs">
              <FileText className="h-3 w-3 mr-2" />
              Add Document
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {focusDocumentsData.map((doc, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#071487]/10 flex items-center justify-center text-[#071487]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071487]">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    Last updated: {new Date(doc.lastUpdated).toLocaleDateString()}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button variant="default" size="sm" className="text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsTab;