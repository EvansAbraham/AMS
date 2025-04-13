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
import { useUpdateLapaMutation, UpdateLapa, Lapa } from "@/app/state/api";
import { toast } from "sonner";

const LapaRight: React.FC = () => {
  const [isOpen, setIsOpen] = useState<string | undefined>("item-1");
  const { selectedLapa } = useLapa();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<Partial<Lapa>>({});
  const [updateLapa, { isLoading }] = useUpdateLapaMutation();

  const toggleAccordion = (): void => {
    setIsOpen(isOpen ? undefined : "item-1");
  };

  const handleEdit = (): void => {
    setIsEditMode(true);
    setFormData({ ...selectedLapa });
  };

  const handleCancel = (): void => {
    setIsEditMode(false);
    setFormData({});
  };

  const handleSubmit = async (): Promise<void> => {
    if (!selectedLapa || !selectedLapa.assetBarcode) {
      toast("Error", {
        description: "Asset barcode is required to update LAPA data.",
      });
      return;
    }

    try {

      // Create a properly typed UpdateLapa object
      const updatedData: UpdateLapa = {
        status: formData.status,
        wing: formData.wing,
        location: formData.location,
        riskAssessmentWoNo: formData.riskAssessmentWoNo,
        room: formData.room,
        labName: formData.labName,
        lApA: formData.lApA,
        sample: formData.sample,
        certificateNo: formData.certificateNo,
        bacteriaVariant: formData.bacteriaVariant,
        resultPre: formData.resultPre,
        resultPost: formData.resultPost,
        reportTemplate: formData.reportTemplate,
        nextSampleDate: formData.nextSampleDate && typeof formData.nextSampleDate === 'object' && 'toISOString' in formData.nextSampleDate
          ? (formData.nextSampleDate as Date).toISOString()
          : formData.nextSampleDate,
        comments: formData.comments,
        overallRiskScore: formData.overallRiskScore,
        assessedRisk: formData.assessedRisk,
        agreedActions: formData.agreedActions,
      };

      await updateLapa({
        assetBarcode: selectedLapa.assetBarcode,
        updatedData: updatedData,
      }).unwrap();

      toast("Success", {
        description: "LAPA data updated successfully.",
      });

      setIsEditMode(false);
    } catch (error) {
      console.error("Failed to update LAPA:", error);
      toast("Error", {
        description: "Failed to update LAPA data. Please try again.",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleDateChange = (date: Date | undefined, fieldName: keyof Lapa): void => {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getValue = (fieldName: keyof Lapa): any => {
    if (isEditMode && formData[fieldName] !== undefined) {
      return formData[fieldName];
    }
    return selectedLapa[fieldName] || "";
  };

  // List of fields that should remain read-only even in edit mode
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const readOnlyFields: (keyof Lapa)[] = ["assetBarcode", "status", "certificateNo"];

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
            <Button variant={"custom"} onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          )}
          {isEditMode ? (
            <Button variant={"outline"} onClick={handleCancel} disabled={isLoading}>
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
                    readOnly={true}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="status">Status</Label>


                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, status: value }))} value={getValue("status")} disabled={!isEditMode}>
                    <SelectTrigger className="w-sm bg-white my-2">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
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
                    readOnly={true}
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
                  <Label htmlFor="riskAssessmentWoNo">
                    Risk Assessment WO No.
                  </Label>
                  <Input
                    id="riskAssessmentWoNo"
                    value={getValue("riskAssessmentWoNo")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="raCompletedOn">
                    Risk Assessment WO Date
                  </Label>
                  <div className="w-sm">
                    <div className="[&>div>button]:w-full [&>div>button]:bg-white [&>div>button]:h-10 [&>div>button]:my-2">
                      <DatePicker
                        id="raCompletedOn"
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
                  <Label htmlFor="remedialWoNo">Remedial WO No.</Label>
                  <Input
                    id="remedialWoNo"
                    value={getValue("remedialWoNo")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="remedialDoneOn">
                    Remedial Completed On
                  </Label>
                  <div className="w-sm">
                    <div className="[&>div>button]:w-full [&>div>button]:bg-white [&>div>button]:h-10 [&>div>button]:my-2">
                      <DatePicker
                        id="remedialDoneOn"
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
                  <Label htmlFor="resultPre">Sample No (Pre)</Label>
                  <Input
                    id="resultPre"
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
                  <Label htmlFor="nextSampleDate">Next Resample Date</Label>
                  <DatePicker
                    id="nextSampleDate"
                    selected={getValue("nextSampleDate") ? new Date(getValue("nextSampleDate")) : undefined}
                    disabled={!isEditMode}
                    onChange={(date) => handleDateChange(date, "nextSampleDate")}
                  />
                </div>

                {/* Right Column - Assessment Details */}
                <div className="py-2">
                  <Label htmlFor="lApA">LA/ PA</Label>
                  <Input
                    id="lApA"
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
                  <Label htmlFor="reportTemplate">Report Temp</Label>
                  <Input
                    id="reportTemplate"
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
                  <Label htmlFor="sampleOn">Received On</Label>
                  <DatePicker
                    id="sampleOn"
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
                  <Label htmlFor="comments">Filter Details</Label>
                  <Textarea
                    id="comments"
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
                  <Label htmlFor="assessedRisk">
                    Patient Susceptibility
                  </Label>
                  <Input
                    id="assessedRisk"
                    value={getValue("assessedRisk")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="overallRiskScore">
                    Patient Susceptibility Score
                  </Label>
                  <Input
                    id="overallRiskScore"
                    value={getValue("overallRiskScore")}
                    className="bg-white my-2 w-sm"
                    readOnly={!isEditMode}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2">
                  <Label htmlFor="managedMitigation">
                    System Operational Conditions
                  </Label>
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
                    System Operational Conditions Score
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
                  <Label htmlFor="assessedRisk">Risk Level</Label>
                  <Input
                    id="assessedRisk"
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
                  <Label htmlFor="remedialActions">Actions</Label>
                  <Textarea
                    id="remedialActions"
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
                  <Label htmlFor="additionalComments">Mitigation Plan</Label>
                  <Textarea
                    id="additionalComments"
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