"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  //CommandGroup,
  CommandList,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Color } from "@/App"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

type ComboBoxProps = { colors: Color[] }

export default function ComboBox({ colors }: ComboBoxProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[390px] justify-between"
        >
          {value
            ? colors.find((color) => color.value === value)?.label
            : "Select color..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search color..." className="h-9" />
          <CommandEmpty>No color found.</CommandEmpty>
          <CommandList className="h-40">
            {colors.map((color) => (
              <CommandItem
                key={color.value}
                value={color.value}
                onSelect={() => {
                  setValue(color.value)
                  setOpen(false)
                }}
              >
                {color.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === color.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
