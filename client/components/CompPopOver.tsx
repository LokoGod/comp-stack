import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Badge } from "@/components/ui/badge";

interface CompPopOverProps {
  content: {
    Field: string;
    Field2: string;
    Field3: string;
    Field4: string;
    Tech: string;
    Tech2: string;
    Tech3: string;
    Tech4: string;
  };
  children: React.ReactNode;
}

export function CompPopOver({ content, children }: CompPopOverProps) {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        {content ? (
          <h3 className="text-center">
            <Badge variant="default">{content.Tech}</Badge>&nbsp;
            <Badge variant="secondary">{content.Tech2}</Badge>&nbsp;
            <Badge variant="third">{content.Tech3}</Badge>&nbsp;
            <Badge variant="fourth">{content.Tech4}</Badge>&nbsp;
          </h3>
        ) : (
          <p>No data available</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
