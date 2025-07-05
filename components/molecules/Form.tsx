import {Box} from "@mui/system";
import {FormProvider, useForm} from "react-hook-form";


interface FormProps {
    children: ReactNode
    schema: any
    defaultValues: any
    resetFields?: boolean
}

const Form = ({children, schema, defaultValues}: FormProps) => {

    const ctx = useForm({resolver: schema, defaultValues, mode: "onTouched"})


    const handleValid: SubmitHandler<FieldValues> = async (values) => {
        await onSubmit?.(values);
        if (resetFields) {
            ctx.reset(initialValues);
        }
    };

    return <FormProvider {...ctx}>
        <Box component="form" onSubmit={ctx.handleSubmit(handleValid)} >
            {children}
        </Box>
    </FormProvider>
}
export default Form