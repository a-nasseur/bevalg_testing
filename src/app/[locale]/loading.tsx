import { Skeleton, Typography } from "@mui/material";

export default function Loading () {
    return (
        <>
            <Skeleton 
                variant="rectangular"  
                width={300} 
                height={20}
                sx={{ backgroundColor: 'grey.900'}}
            />
            <Skeleton 
                variant="rectangular"  
                width={300} 
                height={20}
                sx={{ backgroundColor: 'grey.900'}}
            />
            <Skeleton 
                variant="rectangular"  
                width={300} 
                height={20}
                sx={{ backgroundColor: 'grey.900'}}
            />
            <Skeleton 
                variant="rectangular"  
                width={300} 
                height={20}
                sx={{ backgroundColor: 'grey.900'}}
            />
            
        </>
    )
}