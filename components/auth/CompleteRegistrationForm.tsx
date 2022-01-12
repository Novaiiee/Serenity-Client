import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from 'react';
import { useForm } from "react-hook-form";
import { userProfileSchema } from "./schemas";

interface CompleteRegistrationFormProps {
  
}

export const CompleteRegistrationForm: FC<CompleteRegistrationFormProps> = ({}) => {
	const userProfileStepForm = useForm<UserProfileStepValues>({
		defaultValues: {
			bio: "",
			firstPronoun: "",
			avatar: "",
			secondPronoun: "",
			username: "",
		},
		resolver: yupResolver(userProfileSchema),
  });
  
  return (
    <div>
      
    </div>
  )
}