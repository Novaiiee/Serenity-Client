import * as yup from "yup";

export const userProfileSchema = yup.object({
	username: yup.string().required(),
	bio: yup.string().required(),
	firstPronoun: yup.string().required(),
	secondPronoun: yup.string().required(),
});
