import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Link from "next/link";

export default async function Page(){

    return(
        <Card>
            <CardHeader>
                <CardTitle>URL : /admin</CardTitle>
            </CardHeader>
            <CardContent >
                <Link 
                    href= "/admin/citations/1" 
                    className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                    Citation 1
                </Link>
            </CardContent>
        </Card>
    );
} 