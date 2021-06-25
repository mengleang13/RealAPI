

import { TextField  } from '@material-ui/core'
import { FC,Fragment } from 'react'

export interface CustomTextFieldProps {
    label: string
}

export const CustomTextField:FC<CustomTextFieldProps> = (props) => {
    return <div style={{ padding: 5}}>
        <TextField 
        size= "small" 
        id="outlined-basic" 
        label={props.label} 
        variant="outlined" 
        style={{width: "100%" }} 
        />
    </div>
}
