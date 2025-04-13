import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from 'lucide-react';

interface PersonnelData {
  id: string;
  name: string;
  role: string;
  expertise: string;
  contact: string;
}

interface PersonnelTabProps {
  keyPersonnelData: PersonnelData[];
  COLORS: string[];
}

const PersonnelTab: React.FC<PersonnelTabProps> = ({ keyPersonnelData, COLORS }) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-[#071487] text-lg font-semibold">Key Personnel</CardTitle>
            <CardDescription>Team members with specialized roles and expertise</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="text-xs">
            <FileText className="h-3 w-3 mr-2" />
            View All Personnel
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyPersonnelData.map((person, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow border-l-4" style={{ borderLeftColor: COLORS[index % COLORS.length] }}>
              <CardContent className="p-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-[#071487]/10 flex items-center justify-center text-[#071487] font-bold">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <p className="text-muted-foreground mb-1"><span className="font-medium text-foreground">Expertise:</span> {person.expertise}</p>
                    <p className="text-muted-foreground"><span className="font-medium text-foreground">Contact:</span> {person.contact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonnelTab;