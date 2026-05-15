import { cn } from "@/lib/cn";

// eslint-disable-next-line no-unused-vars
export const Container = ({ as: Tag = "div", className, children, ...props }) => (
  <Tag className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)} {...props}>
    {children}
  </Tag>
);
