import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Button } from "./ui/button";

type CustomButtonProps = {
  label: string;
  href?: string;
  icon?: React.ElementType;
  variant?: "default" | "outline";
  onClick?: () => void;
};

export default function CustomButton({
  label,
  href,
  icon: Icon,
  variant = "default",
  onClick,
}: CustomButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      className={clsx(
        "cursor-pointer transition-all text-xs px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]",
        variant === "default"
          ? "bg-primary text-primary-foreground border-secondary-foreground"
          : "bg-primary-foreground text-secondary-foreground border-secondary-foreground hover:bg-primary-foreground/90"
      )}
      onClick={handleClick}
    >
      {Icon && <Icon className="mr-2 size-4" />}
      {label}
    </Button>
  );
}
