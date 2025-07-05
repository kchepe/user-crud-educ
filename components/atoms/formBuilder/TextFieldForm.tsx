import {TextField, TextFieldProps} from "@mui/material";
import {get, useController, useFormContext} from "react-hook-form";


interface TextFieldFormProps extends Omit<TextFieldProps, "name" | "error" | "helperText"> {
    name: string
}

const TextFieldForm = ({name, ...rest}: TextFieldFormProps) => {

    const {control, formState: {errors}} = useFormContext()

    const {field} = useController({name, control})

    const errorField = get(errors, name)

    return <TextField error={!!errorField} helperText={errorField?.message.toString()} {...field} {...rest}/>
}

export default TextFieldForm