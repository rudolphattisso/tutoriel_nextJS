import Link from "next/link";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>URL : /</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Link
          href="/admin/citations/1"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          Citation
        </Link>
        <Link
          href="/admin/citations/2"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
        Citation 2
        </Link>
                <Link
          href="/admin/citations/3"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
        Citation 3
        </Link>
      </CardContent>
    </Card>
  );
}
