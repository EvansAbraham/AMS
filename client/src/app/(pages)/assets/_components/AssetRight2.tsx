// AssetsRight2.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Pen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectValue, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DatePicker } from '@/components/datepicker';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { useAsset } from '@/context/AssetContext'; // Import the context
import { useUpdateAssetMutation } from '@/app/state/api'; // Import the mutation hook
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

const AssetsRight2: React.FC = () => {
    const { selectedAsset, setSelectedAsset } = useAsset(); // Use the context
    const [isEditing, setIsEditing] = useState(false);
    const [updateAsset] = useUpdateAssetMutation(); // Use the mutation hook

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = async () => {
        if (selectedAsset) {
            try {
                await updateAsset(selectedAsset).unwrap();
                setIsEditing(false);
            } catch (error) {
                console.error('Failed to update asset:', error);
            }
        }
    };

    if (!selectedAsset) {
        return <div className='bg-gray-50 flex-grow hidden sm:flex flex-col h-screen p-6'>Select an asset to view details.</div>;
    }

    return (
        <div className='bg-gray-50 flex-grow hidden sm:flex flex-col h-screen p-6'>
            {/* Title and its buttons */}
            <div className='flex justify-between items-start w-full'>
                <div>
                    <p className='text-md'>Barcode</p>
                    <p className='text-2xl font-bold'>{selectedAsset.assetBarcode}</p>
                </div>
                <div className='flex gap-2 my-2'>
                    <Button variant={"custom"} onClick={handleSubmit} disabled={!isEditing}>Submit</Button>
                    <Button variant={"outline"} onClick={handleEdit}><Pen /> Edit</Button>
                </div>
            </div>
            {/* Switch Button */}
            <div className='flex gap-3'>
                <Label htmlFor='changeOrInstall' className='text-[#071487]'>Change / Install</Label>
                <Switch id='changeOrInstall' disabled={!isEditing} />
            </div>
            {/* Fields and Content */}
            <ScrollArea className='h-[calc(100vh-100px)] w-full overflow-hidden'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
                    <div className='py-2'>
                        <Label htmlFor='assetBarcode'>Asset Barcode</Label>
                        <Input
                            id='assetBarcode'
                            value={selectedAsset.assetBarcode || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, assetBarcode: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='filterOn'>Filter On</Label>
                        <Select>
                            <SelectTrigger className="w-sm bg-white my-2">
                                <SelectValue placeholder={selectedAsset.filterOn || 'Choose an Option'} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='status'>Status</Label>
                        <Select>
                            <SelectTrigger className="w-sm bg-white my-2">
                                <SelectValue placeholder={selectedAsset.status || 'Choose an Option'} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='filterNeeded'>Filter Needed</Label>
                        <Select>
                            <SelectTrigger className="w-sm bg-white my-2">
                                <SelectValue placeholder={selectedAsset.filterNeeded || 'Choose an Option'} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='FilterInstallationDate'>Filter Installation Date</Label>
                        <div className="w-sm">
                          <DatePicker
                            id='FilterInstallationDate'
                            selected={selectedAsset.filterInstalledOn ? new Date(selectedAsset.filterInstalledOn) : undefined}
                            onChange={(date) => setSelectedAsset({ ...selectedAsset, filterInstalledOn: date?.toISOString() })}
                            disabled={!isEditing}
                            className="[&>div>button]:w-full [&>div>button]:bg-white [&>div>button]:h-10 [&>div>button]:my-2"
                          />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='FilterExpireDate' className='text-[#071487]'>Filter Expiry Date</Label>
                        <Input
                            id='FilterExpireDate'
                            value={selectedAsset.filterExpiryDate || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, filterExpiryDate: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='assetType'>Asset Type</Label>
                        <Input
                            id='assetType'
                            value={selectedAsset.assetType || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, assetType: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='roomName'>Room Name</Label>
                        <Input
                            id='roomName'
                            value={selectedAsset.roomName || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, roomName: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='primaryIdentifier'>Primary Identifier</Label>
                        <Input
                            id='primaryIdentifier'
                            value={selectedAsset.primaryId || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, primaryId: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='secondaryIdentifier'>Secondary Identifier</Label>
                        <Input
                            id='secondaryIdentifier'
                            value={selectedAsset.secondaryId || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, secondaryId: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='wingInShort'>Wing in Short</Label>
                        <Input
                            id='wingInShort'
                            value={selectedAsset.wingInShort || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, wingInShort: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='Floor'>Floor</Label>
                        <Input
                            id='Floor'
                            value={selectedAsset.floorInWords || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, floorInWords: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='room'>Room</Label>
                        <Input
                            id='room'
                            value={selectedAsset.room || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, room: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='roomNo'>Room No</Label>
                        <Input
                            id='roomNo'
                            value={selectedAsset.roomName || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, roomName: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='filterType'>Filter Type</Label>
                        <Input
                            id='filterType'
                            value={selectedAsset.filterNeeded || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, filterNeeded: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='patientStaffArea'>Patient / Staff Area</Label>
                        <Input
                            id='patientStaffArea'
                            value={selectedAsset.notes || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, notes: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='augmentedCare'>Augmented Care</Label>
                        <Input
                            id='augmentedCare'
                            value={selectedAsset.augmentedCare || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, augmentedCare: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='filterMake'>Filter Make</Label>
                        <Input
                            id='filterMake'
                            value={selectedAsset.filterNeeded || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, filterNeeded: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='attachments'>Attachments</Label>
                        <Input
                            id='attachments'
                            type='file'
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='riskAssessment' className='text-[#071487]'>Risk Assessment WO</Label>
                        <Accordion type='single' collapsible className="bg-white h-9 rounded-sm border border-gray-200 shadow-xs my-2 text-sm w-sm">
                            <AccordionItem value='table'>
                                <AccordionTrigger className='p-2'>Click to view the Logs</AccordionTrigger>
                                <AccordionContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Invoice</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Method</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {invoices.map((invoice) => (
                                                <TableRow key={invoice.invoice}>
                                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow>
                                                <TableCell colSpan={3}>Total</TableCell>
                                                <TableCell className="text-right">$2,500.00</TableCell>
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className='py-2'>
                        <Label htmlFor='notes'>Notes</Label>
                        <Textarea
                            id='notes'
                            value={selectedAsset.notes || ''}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, notes: e.target.value })}
                            className='bg-white my-2 w-sm'
                            readOnly={!isEditing}
                        />
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
};

export default AssetsRight2;
