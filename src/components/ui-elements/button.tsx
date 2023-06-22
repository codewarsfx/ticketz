import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from "react";

const ButtonVariants = cva(
	"active:scale-95 inline-flex items-center justify-center rounded-[50px] text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
	{
		variants: {
			buttonType: {
				default: "bg-indigo-600 text-white hover:bg-indigo-500",
				secondary: "bg-transparent border border-indigo-600 hover:text-indigo-500 hover:border-indigo-500 text-indigo-600",
				ghost: "border-none bg-transparent hover:bg-indigo-50  text-indigo-600",
			},
			size: {
				default: "h-9 py-[.5em] px-8",
				sm: "h-7 px-2 text-xs px-6",
				lg: "h-11 px-8 text-lg",
			},
		},
		defaultVariants: {
			buttonType: "default",
			size: "default",
		},
	}
);

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof ButtonVariants> {
	isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
	isLoading,
	children,
	className,
	buttonType,
	size,
	...otherProps
}) => {
	return (
		<button
			className={cn(ButtonVariants({ buttonType, size, className }))}
			{...otherProps}
		>
			{isLoading ? <Loader2 className='animate-spin h-4 w-4 mr-2'  /> : null}
			{children}
		</button>
	);
};

export default Button;
