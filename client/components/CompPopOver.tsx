import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "./ui/table";

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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Field</TableHead>
                <TableHead>Tech</TableHead>
                {/* Add more table headings for additional fields here */}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{content.Field}</TableCell>
                <TableCell>
                  <Badge variant="default">{content.Tech}</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{content.Field2}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{content.Tech2}</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{content.Field3}</TableCell>
                <TableCell>
                  <Badge variant="third">{content.Tech3}</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{content.Field4}</TableCell>
                <TableCell>
                  <Badge variant="fourth">{content.Tech4}</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <p>No data available</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
