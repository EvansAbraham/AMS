import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/datepicker";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const RiskAssessmentForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column - Basic Information */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="assetBarcode">Asset Barcode</Label>
          <Input
            id="assetBarcode"
            placeholder="Asset Barcode"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="wing">Wing</Label>
          <Input id="wing" placeholder="Wing" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Location" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="room">Room</Label>
          <Input id="room" placeholder="Room" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="riskAssessmentWONo">Risk Assessment WO No.</Label>
          <Input
            id="riskAssessmentWONo"
            placeholder="Risk Assessment WO No."
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="riskAssessmentWODate">Risk Assessment WO Date</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="riskAssessmentWODate" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="certificateNo">Certificate No</Label>
          <Input
            id="certificateNo"
            placeholder="Certificate No"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="processNo">Process No</Label>
          <Input id="processNo" placeholder="Process No" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="labName">Lab Name</Label>
          <Input id="labName" placeholder="Lab Name" className="bg-white" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="filterDetails">Filter Details</Label>
          <Textarea
            id="filterDetails"
            placeholder="Filter Details"
            className="bg-white h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sample">Sample (Original or Resample)</Label>
          <Input
            id="sample"
            placeholder="Original/Resample"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sampleNoPre">Sample No (Pre)</Label>
          <Input
            id="sampleNoPre"
            placeholder="Sample No (Pre)"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sampleOn">Sample On</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="sampleOn" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="nextResampleDate">Next Resample Date</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="nextResampleDate" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedialWONo">Remedial WO No.</Label>
          <Input
            id="remedialWONo"
            placeholder="Remedial WO No."
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedialCompletedOn">Remedial Completed On</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="remedialCompletedOn" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="raCompletedBy">RA Completed By</Label>
          <Input
            id="raCompletedBy"
            placeholder="RA Completed By"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="raCompletedOn">RA Completed On</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="raCompletedOn" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="laPA">LA/PA</Label>
          <Select>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Choose an Option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="la">LA</SelectItem>
                <SelectItem value="pa">PA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bacteriaVariant">Bacteria Variant</Label>
          <Input
            id="bacteriaVariant"
            placeholder="Bacteria Variant"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="resultPre">Result (Pre)</Label>
          <Input
            id="resultPre"
            placeholder="Result (Pre)"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="resultPost">Result (Post)</Label>
          <Input
            id="resultPost"
            placeholder="Result (Post)"
            className="bg-white"
          />
        </div>
      </div>

      {/* Right Column - Assessment Details */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="reportTemp">Report Temp</Label>
          <Input
            id="reportTemp"
            placeholder="Report Temp"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="temperatureHot">Temperature (Hot)</Label>
          <Input
            id="temperatureHot"
            placeholder="Temperature (Hot)"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="temperatureCold">Temperature (Cold)</Label>
          <Input
            id="temperatureCold"
            placeholder="Temperature (Cold)"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="receivedOn">Received On</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="receivedOn" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notifiedOn">Notified on</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="notifiedOn" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedialCompletedBy">Remedial Completed by</Label>
          <Input
            id="remedialCompletedBy"
            placeholder="Remedial Completed by"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedialDoneOn">Remedial Done On</Label>
          <div className="relative w-full">
            <div className="[&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="remedialDoneOn" />
            </div>
          </div>
        </div>

        {/* Risk Assessment Section */}
        <div className="space-y-2">
          <Label htmlFor="systemContamination">System Contamination</Label>
          <Input
            id="systemContamination"
            placeholder="System Contamination"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="systemContaminationScore">
            System Contamination Score
          </Label>
          <Input
            id="systemContaminationScore"
            placeholder="Score"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="patientSusceptibility">Patient Susceptibility</Label>
          <Input
            id="patientSusceptibility"
            placeholder="Patient Susceptibility"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="patientSusceptibilityScore">
            Patient Susceptibility Score
          </Label>
          <Input
            id="patientSusceptibilityScore"
            placeholder="Score"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="systemOperationalConditions">
            System Operational Conditions
          </Label>
          <Input
            id="systemOperationalConditions"
            placeholder="System Operational Conditions"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="systemOperationalConditionsScore">
            System Operational Conditions Score
          </Label>
          <Input
            id="systemOperationalConditionsScore"
            placeholder="Score"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="managedMitigation">Managed Mitigation</Label>
          <Input
            id="managedMitigation"
            placeholder="Managed Mitigation"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="managedMitigationScore">
            Managed Mitigation Score
          </Label>
          <Input
            id="managedMitigationScore"
            placeholder="Score"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="overallRiskScore">Overall Risk Score</Label>
          <Input
            id="overallRiskScore"
            placeholder="Overall Risk Score"
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="riskLevel">Risk Level</Label>
          <Select>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="assessedRisk">Assessed Risk</Label>
          <Textarea
            id="assessedRisk"
            placeholder="Assessed Risk"
            className="bg-white h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="actions">Actions</Label>
          <Textarea
            id="actions"
            placeholder="Actions"
            className="bg-white h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="remedialActions">Remedial Actions</Label>
          <Textarea
            id="remedialActions"
            placeholder="Remedial Actions"
            className="bg-white h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="agreedActions">Agreed Actions</Label>
          <Textarea
            id="agreedActions"
            placeholder="Agreed Actions"
            className="bg-white h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mitigationPlan">Mitigation Plan</Label>
          <Textarea
            id="mitigationPlan"
            placeholder="Mitigation Plan"
            className="bg-white h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalComments">Additional Comments</Label>
          <Textarea
            id="additionalComments"
            placeholder="Additional Comments"
            className="bg-white h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="comments">Comments</Label>
          <Textarea
            id="comments"
            placeholder="Comments"
            className="bg-white h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="attachments">Attachments</Label>
          <Input id="attachments" type="file" className="bg-white" />
        </div>
      </div>

      {/* Form Actions */}
      <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-6">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" variant="custom" className="bg-[#071487]">
          Save
        </Button>
      </div>
    </form>
  );
};

export default RiskAssessmentForm;
