import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Color } from "@/App"

type CardListProps = {
    colors: Color[];
}
export default function CardList({colors}: CardListProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Color List</CardTitle>
                <CardDescription>Color added so far</CardDescription>
            </CardHeader>
            <CardContent>
            <ul>
                {colors.map((color: Color) => (
                    <li key={color.value}>{color.label}</li>
                ))}
            </ul>
            </CardContent>
            <CardFooter className="hidden">
                <p>This is hidden</p>
            </CardFooter>
        </Card>
    )
}