import {Box} from "@mui/system";
import {FormProvider, useForm, SubmitHandler, DefaultValues} from "react-hook-form";
import {ReactNode} from "react";
import {z, ZodTypeAny} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";

interface FormProps<S extends ZodTypeAny> {
    children: ReactNode
    schema: S;
    defaultValues: DefaultValues<z.infer<S>>;
    resetFields?: boolean
    onSubmit?: (values: z.infer<S>) => void | Promise<void>;
}

const Form = <S extends ZodTypeAny>({children, resetFields, schema, defaultValues, onSubmit}: FormProps<S>) => {


    type FormDataType = z.infer<S>;

    const ctx = useForm<FormDataType>({
        mode: 'onTouched',
        resolver: zodResolver(schema),
        defaultValues,
    });


    const handleValid: SubmitHandler<FormDataType> = async (values) => {
        await onSubmit?.(values);
        if (resetFields) {
            ctx.reset(defaultValues);
        }
    };

    return <FormProvider {...ctx}>
        <Box component="form" onSubmit={ctx.handleSubmit(handleValid)}>
            {children}
        </Box>
    </FormProvider>
}
export default Form