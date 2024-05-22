import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Color } from "@/App"
import { useState } from "react"

type InputBoxProps = {
  setColors: (colors: Color[] | ((prevColors: Color[]) => Color[])) => void;
}

export default function InputBox({setColors}: InputBoxProps) {
  const [inputValue, setInputValue] = useState<string>("")
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputValue.trim().toLowerCase();
    if (inputValue) {
      const newColor = { label: inputValue, value: inputValue};
      setColors((prevColors: Color[]) => [...prevColors, newColor]);
      setInputValue(''); // Clear the input after submission
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <Label htmlFor="message" className="sr-only">
       Type our input here
      </Label>
      <Textarea
        id="message"
        placeholder="Type your message here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-1/2 min-h-12 resize-none rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
      />
      <Button
        type="submit"
        className="mx-auto text-center w-1/3">
            Submit
      </Button>
    </form>
  )
}