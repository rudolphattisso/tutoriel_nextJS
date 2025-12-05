"use client"; // Error components must be Client Components

import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

//permet d'afficher une page de chargement pendant le rendu des pages admin
export default function Loading() {



    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    ⚠️ Error ⚠️
                </CardTitle>
            </CardHeader>
        </Card>
    );
}