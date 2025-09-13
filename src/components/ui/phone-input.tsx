"use client";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const PhoneInput = React.forwardRef(
  //@ts-ignore
  ({ className, onChange, ...props }, ref) => {
    return (
      <RPNInput.default
        //@ts-ignore
        ref={ref}
        className={cn("flex", className)}
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        onChange={(value) => onChange?.(value || "")}
        {...props}
      />
    );
  }
);
PhoneInput.displayName = "PhoneInput";

//@ts-ignore
const InputComponent = React.forwardRef(
  // @ts-ignore
  ({ className, bgColor, ...props }, ref) => (
    <Input
      className={cn(
        "focus-visible:ring-1  focus-visible:ring-offset-0 py-5 rounded-r-md rounded-l-none outline-0 bg-transparent border",
        className,
        bgColor && `bg-[${bgColor}]`
      )}
      {...props}
      //@ts-ignore
      ref={ref}
    />
  )
);
InputComponent.displayName = "InputComponent";

//@ts-ignore
const CountrySelect = ({ disabled = false, value, onChange, options, bgColor }) => {
  const handleSelect = React.useCallback(
    //@ts-ignore
    (country) => {
      onChange(country);
    },
    [onChange]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={"outline"}
          className={cn(
            "flex gap-1 rounded-r-none rounded-l-sm px-3   py-5 bg-transparent  border", bgColor && `bg-[${bgColor}]`
          )}
          disabled={disabled}
        >
          <FlagComponent country={value} countryName={value} />
          <ChevronsUpDown
            className={cn(
              "-mr-2 h-6 w-6 opacity-50",
              disabled ? "hidden" : "opacity-100"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandList>
            <ScrollArea className="h-72">
              <CommandInput placeholder="Search country..." />
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {options
                  //@ts-ignore
                  .filter((x) => x.value)
                  //@ts-ignore
                  .map((option) => (
                    <CommandItem
                      className="gap-2"
                      key={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <FlagComponent
                        country={option.value}
                        countryName={option.label}
                      />
                      <span className="flex-1 text-sm">{option.label}</span>
                      {option.value && (
                        <span className="text-sm text-foreground/50">
                          {`+${RPNInput.getCountryCallingCode(option.value)}`}
                        </span>
                      )}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          option.value === value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

// @ts-ignore
const FlagComponent = ({ country, countryName }) => {
  // @ts-ignore
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-4 overflow-hidden rounded-sm">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};
FlagComponent.displayName = "FlagComponent";

export { PhoneInput };
