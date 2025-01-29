import React from 'react'
import { FiAlertCircle } from "react-icons/fi";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const Alert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline"><FiAlertCircle className='text-[#007AFF]' /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto border-2 border-gray-300">
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription>
          Role-specific refinement customizes the job ad by aligning it with:
Job function and industry nuances.
Reporting structure, team size, and leadership level.
This ensures the description reflects the specific needs of the role, making it more targeted and effective.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
