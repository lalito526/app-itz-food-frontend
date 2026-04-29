import { Loader2 } from "lucide-react";
import { Button } from "@base-ui/react";

export default function LoadingButton(){
    return(
        <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
            cargando...
        </Button>
    )
}