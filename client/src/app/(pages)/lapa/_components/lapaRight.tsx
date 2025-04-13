"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Pen, ChevronDown, ChevronUp, X } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DatePicker } from "@/components/datepicker";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLapa } from "@/context/LapaContext";

// Define the type for LAPA data based on the fields used in the component
interface LapaData {
  assetBarcode?: string;
  status?: string;
  wing?: string;
  certificateNo?: string;
  processNo?: string;
  riskAssessmentWoNo?: string;
  raCompletedOn?: string | Date;
  room?: string;
  location?: string;
  remedialWoNo?: string;
  remedialDoneOn?: string | Date;
  sample?: string;
  resultPre?: string;
  sampleOn?: string | Date;
  nextSampleDate?: string | Date;
  lApA?: string;
  bacteriaVariant?: string;
  resultPost?: string;
  reportTemplate?: string;
  temperatureHot?: string;
  temperatureCold?: string;
  labName?: string;
  notifiedOn?: string | Date;
  comments?: string;
  systemContamination?: string;
  systemContaminationScore?: string;
  assessedRisk?: string;
  overallRiskScore?: string;
  managedMitigation?: string;
  managedMitigationScore?: string;
  remedialActions?: string;
  agreedActions?: string;
  additionalComments?: string;
  [key: string]: any; // To allow indexing by string
}

const LapaRight: React.FC = () => {
  const [isOpen, setIsOpen] = useState<string | undefined>("item-1");
  const { selectedLapa } = useLapa();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<LapaData>({});

  const toggleAccordion = (): void => {
    setIsOpen(isOpen ? undefined : "item-1");
  };

  const handleEdit = (): void => {
    setIsEditMode(true);
    // Initialize formData with current selectedLapa values
    setFormData({ ...(selectedLapa as LapaData) });
  };

  const handleCancel = (): void => {
    setIsEditMode(false);
    // Reset any changes
    setFormData({});
  };

  const handleSubmit = (): void => {
    // Here you would typically save changes to your backend
    console.log("Submitting data:", formData);
    setIsEditMode(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleDateChange = (date: Date | undefined, fieldName: string): void => {
    setFormData((prev) => ({ ...prev, [fieldName]: date }));
  };

  if (!selectedLapa) {
    return (
      <div className="bg-gray-50 flex-grow hidden sm:flex flex-col h-screen p-6">
        Select a LAPA to view details.
      </div>
    );
  }

  // Helper function to get current value (either from formData in edit mode or selectedLapa in view mode)
  const getValue = (fieldName: string): any => {
    if (isEditMode && formData[fieldName] !== undefined) {
      return formData[fieldName];
    }
    return (selectedLapa as LapaData)[fieldName] || "";
  };

  // List of fields that should remain read-only even in edit mode
  const readOnlyFields: string[] = ["assetBarcode", "status", "certificateNo"];

  return (
    <div className="bg-gray-50 flex-grow hidden sm:flex flex-col h-screen p-6">
      {/* Title and its buttons */}
      <div className="flex justify-between items-start w-full">
        <div>
          <p className="text-md">WO No.</p>
          <p className="text-2xl font-bold">{selectedLapa.riskAssessmentWoNo || "N/A"}</p>
        </div>
        <div className="flex gap-2 my-2">
          {isEditMode && (
            <Button variant={"custom"} onClick={handleSubmit}>
              Submit
            </Button>
          )}
          {isEditMode ? (
            <Button variant={"outline"} onClick={handleCancel}>
              <X /> Cancel
            </Button>
          ) : (
            <Button variant={"outline"} onClick={handleEdit}>
              <Pen /> Edit
            </Button>
          )}
          <Button variant={"ghost"} onClick={toggleAccordion}>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>

      {/* Fields and Content */}
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={isOpen}
        onValueChange={setIsOpen}
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="hidden">LAPA Details</AccordionTrigger>
          <AccordionContent className="pt-0 pb-0">
            <ScrollArea className="h-[calc(100vh-100px)] w-full overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                {/* Left Column - Basic Info */}
                <div className="py-2">
                  <Label htmlFor="assetBarcode">Asset Barcode</Label>
                  <Input
                    id="assetBarcode"
                    value={getValue("assetBarcode")}
                    className="bg-white my-2 w-sm"
                    readOnly={true} // Always read-only
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="status">Status</Label>
                  <Input
                    id="status"
                    value={getValue("status")}
                    className="bg-white my-2 w-sm"
                    readOnly={true} // Always read-only
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="wing">Wing</Label>
                  <Input
                    id="wing"
                    value={getValue("wing")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="certificateNo">Certificate No</Label>
                  <Input
                    id="certificateNo"
                    value={getValue("certificateNo")}
                    className="bg-white my-2 w-sm"
                    readOnly={true} // Always read-only
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="processNo">Process No</Label>
                  <Input
                    id="processNo"
                    value={getValue("processNo")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="riskAssessmentWONo">
                    Risk Assessment WO No.
                  </Label>
                  <Input
                    id="riskAssessmentWONo"
                    value={getValue("riskAssessmentWoNo")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="riskAssessmentWODate">
                    Risk Assessment WO Date
                  </Label>
                  <div className="w-sm">
                    <div className="[&>div>button]:w-full [&>div>button]:bg-white [&>div>button]:h-10 [&>div>button]:my-2">
                      <DatePicker
                        id="riskAssessmentWODate"
                        selected={getValue("raCompletedOn") ? new Date(getValue("raCompletedOn")) : undefined}
                        disabled={!isEditMode}
                        onChange={(date) => handleDateChange(date, "raCompletedOn")}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <Label htmlFor="room">Room</Label>
                  <Input
                    id="room"
                    value={getValue("room")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={getValue("location")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="remedialWONo">Remedial WO No.</Label>
                  <Input
                    id="remedialWONo"
                    value={getValue("remedialWoNo")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="remedialCompletedOn">
                    Remedial Completed On
                  </Label>
                  <div className="w-sm">
                    <div className="[&>div>button]:w-full [&>div>button]:bg-white [&>div>button]:h-10 [&>div>button]:my-2">
                      <DatePicker
                        id="remedialCompletedOn"
                        selected={getValue("remedialDoneOn") ? new Date(getValue("remedialDoneOn")) : undefined}
                        disabled={!isEditMode}
                        onChange={(date) => handleDateChange(date, "remedialDoneOn")}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <Label htmlFor="sample">
                    Sample ( Original or Resample )
                  </Label>
                  <Input
                    id="sample"
                    value={getValue("sample")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="sampleNoPre">Sample No (Pre)</Label>
                  <Input
                    id="sampleNoPre"
                    value={getValue("resultPre")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="sampleOn">Sample On</Label>
                  <DatePicker
                    id="sampleOn"
                    selected={getValue("sampleOn") ? new Date(getValue("sampleOn")) : undefined}
                    disabled={!isEditMode}
                    onChange={(date) => handleDateChange(date, "sampleOn")}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="nextResampleDate">Next Resample Date</Label>
                  <DatePicker
                    id="nextResampleDate"
                    selected={getValue("nextSampleDate") ? new Date(getValue("nextSampleDate")) : undefined}
                    disabled={!isEditMode}
                    onChange={(date) => handleDateChange(date, "nextSampleDate")}
                  />
                </div>

                {/* Right Column - Assessment Details */}
                <div className="py-2">
                  <Label htmlFor="laPA">LA/ PA</Label>
                  <Input
                    id="laPA"
                    value={getValue("lApA")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="bacteriaVariant">Bacteria Variant</Label>
                  <Input
                    id="bacteriaVariant"
                    value={getValue("bacteriaVariant")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="resultPre">Result (Pre)</Label>
                  <Input
                    id="resultPre"
                    value={getValue("resultPre")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="resultPost">Result (Post)</Label>
                  <Input
                    id="resultPost"
                    value={getValue("resultPost")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="reportTemp">Report Temp</Label>
                  <Input
                    id="reportTemp"
                    value={getValue("reportTemplate")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="temperatureHot">Temperature ( Hot )</Label>
                  <Input
                    id="temperatureHot"
                    value={getValue("temperatureHot")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="temperatureCold">Temperature ( Cold )</Label>
                  <Input
                    id="temperatureCold"
                    value={getValue("temperatureCold")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="labName">Lab Name</Label>
                  <Input
                    id="labName"
                    value={getValue("labName")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="receivedOn">Received On</Label>
                  <DatePicker
                    id="receivedOn"
                    selected={getValue("sampleOn") ? new Date(getValue("sampleOn")) : undefined}
                    disabled={!isEditMode}
                    onChange={(date) => handleDateChange(date, "sampleOn")}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="notifiedOn">Notified On</Label>
                  <DatePicker
                    id="notifiedOn"
                    selected={getValue("notifiedOn") ? new Date(getValue("notifiedOn")) : undefined}
                    disabled={!isEditMode}
                    onChange={(date) => handleDateChange(date, "notifiedOn")}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="attachments">Attachments</Label>
                  <Input
                    id="attachments"
                    type="file"
                    className="bg-white my-2 w-sm"
                    disabled={!isEditMode}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="filterDetails">Filter Details</Label>
                  <Textarea
                    id="filterDetails"
                    value={getValue("comments")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>

                {/* Risk Assessment Scores */}
                <div className="py-2">
                  <Label htmlFor="systemContamination">
                    System Contamination
                  </Label>
                  <Input
                    id="systemContamination"
                    value={getValue("systemContamination")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="systemContaminationScore">
                    System Contamination Score
                  </Label>
                  <Input
                    id="systemContaminationScore"
                    value={getValue("systemContaminationScore")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="patientSusceptibility">
                    Patient Susceptibility
                  </Label>
                  <Input
                    id="patientSusceptibility"
                    value={getValue("assessedRisk")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="patientSusceptibilityScore">
                    Patient Susceptibility Score
                  </Label>
                  <Input
                    id="patientSusceptibilityScore"
                    value={getValue("overallRiskScore")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="systemOperationalConditions">
                    System Operational Conditions
                  </Label>
                  <Input
                    id="systemOperationalConditions"
                    value={getValue("managedMitigation")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="systemOperationalConditionsScore">
                    System Operational Conditions Score
                  </Label>
                  <Input
                    id="systemOperationalConditionsScore"
                    value={getValue("managedMitigationScore")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="managedMitigation">Managed Mitigation</Label>
                  <Input
                    id="managedMitigation"
                    value={getValue("managedMitigation")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="managedMitigationScore">
                    Managed Mitigation Score
                  </Label>
                  <Input
                    id="managedMitigationScore"
                    value={getValue("managedMitigationScore")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="overallRiskScore">Overall Risk Score</Label>
                  <Input
                    id="overallRiskScore"
                    value={getValue("overallRiskScore")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="riskLevel">Risk Level</Label>
                  <Input
                    id="riskLevel"
                    value={getValue("assessedRisk")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>

                {/* Comments and Plans */}
                <div className="py-2">
                  <Label htmlFor="assessedRisk">Assessed Risk</Label>
                  <Textarea
                    id="assessedRisk"
                    value={getValue("assessedRisk")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="actions">Actions</Label>
                  <Textarea
                    id="actions"
                    value={getValue("remedialActions")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="remedialActions">Remedial Actions</Label>
                  <Textarea
                    id="remedialActions"
                    value={getValue("remedialActions")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="agreedActions">Agreed Actions</Label>
                  <Textarea
                    id="agreedActions"
                    value={getValue("agreedActions")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="mitigationPlan">Mitigation Plan</Label>
                  <Textarea
                    id="mitigationPlan"
                    value={getValue("additionalComments")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="additionalComments">
                    Additional Comments
                  </Label>
                  <Textarea
                    id="additionalComments"
                    value={getValue("additionalComments")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="comments">Comments</Label>
                  <Textarea
                    id="comments"
                    value={getValue("comments")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LapaRight;