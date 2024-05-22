import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function InputBox() {
  return (
    <form
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
    >
      <Label htmlFor="message" className="sr-only">
       Type our input here
      </Label>
      <Textarea
        id="message"
        placeholder="Type your message here..."
        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
      />
      <Button
        type="submit"
        className="absolute top-0 right-0 mt-3 mr-3">
            Submit
        </Button>
    </form>
  )
}