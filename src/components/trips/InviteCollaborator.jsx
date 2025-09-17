import React from 'react'
import { DollarSign, MailPlus, Plus } from 'lucide-react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import api from "@/api/axios"
import { toast } from "sonner"
import { useNavigate, useSearchParams } from "react-router-dom"

const inviteSchema = z.object({
    email: z.string().min(5, "Email must be atleast 5 characters"),
})


const InviteCollaborator = ({ tripId }) => {

    const form = useForm({
        resolver: zodResolver(inviteSchema),
        defaultValues: {
            email: "",
        },
    })

    const onSubmit = async (data) => {
        try {
            const newData = {
                email: [data.email]
            }
            const response = await api.post(`/trips/${tripId}/invite`, newData);
           toast.info("Invitation link sent");
           form.reset();
        } catch (error) {
            console.error('Error adding expense:', error);
            toast.error("An error occurred while adding expense");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                            <MailPlus className="mr-2 h-5 w-5 text-green-600" />
                            Invite Collaborator
                        </CardTitle>
                        <CardDescription>Add family or friends to this trip</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="abc@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            <Plus className="mr-2 h-4 w-4" />
                           Invite
                        </Button>
                    </CardContent>
                </Card>
            </form>
        </Form>
    )
}

export default InviteCollaborator