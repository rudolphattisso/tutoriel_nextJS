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
      <CardContent>

        <Link
          href="/admin"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          /admin
        </Link>

        <Button>Bonjour</Button>
        <Input placeholder="tapez votre texte ici" />
      </CardContent>
    </Card>
  );
}
