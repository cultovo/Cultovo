import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock, Send, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { ScheduledCall } from "@/api/entities";
import { SendEmail } from "@/api/integrations";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ScheduleCallModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        preferred_date: null,
        preferred_time: "",
        notes: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleClose = () => {
        onClose();
        // Reset state after a short delay to allow closing animation
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", company: "", preferred_date: null, preferred_time: "", notes: "" });
            setError("");
        }, 300);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.preferred_date || !formData.preferred_time) {
            setError("Please select a preferred date and time.");
            return;
        }
        setIsSubmitting(true);
        setError("");

        try {
            const submissionData = {
                ...formData,
                preferred_date: format(formData.preferred_date, 'yyyy-MM-dd'),
            };
            await ScheduledCall.create(submissionData);

            const emailBody = `
New Call Schedule Request from Cultovo Website

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Preferred Date: ${format(formData.preferred_date, 'PPP')}
Preferred Time: ${formData.preferred_time}

Notes:
${formData.notes || 'No notes provided.'}

---
Submitted from: Cultovo Website "Schedule a Call" Form
            `;

            await SendEmail({
                to: "info@cuzo.io",
                subject: `New Call Request: ${formData.name}`,
                body: emailBody,
                from_name: "Cultovo Website"
            });
            
            setIsSubmitted(true);
        } catch (err) {
            setError("There was an error submitting your request. Please try again.");
            console.error(err);
        }

        setIsSubmitting(false);
    };
    
    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <DialogContent className="sm:max-w-[480px] bg-white rounded-2xl">
                {!isSubmitted ? (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-gray-900">Schedule a Discovery Call</DialogTitle>
                            <DialogDescription className="text-gray-600">
                                Choose a time that works for you, and we'll call you back to discuss your project.
                            </DialogDescription>
                        </DialogHeader>
                        {error && <Alert variant="destructive" className="mb-4"><AlertDescription>{error}</AlertDescription></Alert>}
                        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                            <Input placeholder="Full Name *" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required className="rounded-lg"/>
                            <Input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required className="rounded-lg"/>
                            <Input placeholder="Company Name (Optional)" value={formData.company} onChange={(e) => handleChange('company', e.target.value)} className="rounded-lg"/>
                            <div className="grid grid-cols-2 gap-4">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="justify-start font-normal rounded-lg">
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {formData.preferred_date ? format(formData.preferred_date, 'PPP') : 'Pick a date'}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar mode="single" selected={formData.preferred_date} onSelect={(date) => handleChange('preferred_date', date)} initialFocus />
                                    </PopoverContent>
                                </Popover>
                                <Input type="time" value={formData.preferred_time} onChange={(e) => handleChange('preferred_time', e.target.value)} required className="rounded-lg"/>
                            </div>
                            <Textarea placeholder="Any specific questions or notes? (Optional)" value={formData.notes} onChange={(e) => handleChange('notes', e.target.value)} className="rounded-lg"/>
                            <Button type="submit" disabled={isSubmitting} className="w-full bg-indigo-700 text-white hover:bg-indigo-800 rounded-lg py-3 text-base">
                                {isSubmitting ? "Submitting..." : <><Send className="mr-2 h-4 w-4" /> Request Call Back</>}
                            </Button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8">
                         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h2>
                        <p className="text-gray-600 mb-6">Thank you! We've received your request and will confirm your call time via email shortly.</p>
                        <Button onClick={handleClose} className="w-full bg-indigo-700 text-white hover:bg-indigo-800 rounded-lg">Done</Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}