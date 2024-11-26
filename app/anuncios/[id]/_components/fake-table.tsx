import { ReactNode } from "react";

interface TableProps {
  label: string;
  content: string | number;
}
const Table = ({ label, content }: TableProps) => {
  return (
    <div className="flex ">
      <p className="flex-1 dark:text-muted-foreground">{label}</p>
      <div className="flex-1 flex items-center gap-2">
        <p className="flex-1 text-primary dark:text-muted-foreground line-clamp-1">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Table;
