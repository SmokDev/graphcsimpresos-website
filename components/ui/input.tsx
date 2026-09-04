import React from "react";
import { cn } from "@/utils/cn";

type Base = {
	label: string;
	error?: string;
	isTextarea?: boolean;
	hint?: string;
};

type InputProps =
	| (Base & { isTextarea?: false } & React.InputHTMLAttributes<HTMLInputElement>)
	| (Base & { isTextarea: true } & React.TextareaHTMLAttributes<HTMLTextAreaElement>);

/** Premium underline field — midnight panel, mint focus, inline errors. */
export function Input(props: InputProps) {
	const { label, isTextarea, error, hint, ...rest } = props;
	const id = (rest.id as string) || label.toLowerCase().replace(/[^a-z0-9]+/gi, "-");
	const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

	const fieldClass = cn(
		"peer w-full border-b bg-transparent px-1 pb-3 pt-7 text-[15px] text-midnight placeholder-transparent outline-none transition-colors duration-200",
		error
			? "border-red-700 focus:border-red-800"
			: "border-midnight/25 hover:border-midnight/50 focus:border-midnight"
	);

	return (
		<div className="relative mt-2 w-full flex-grow">
			{isTextarea ? (
				<textarea
					rows={5}
					aria-invalid={!!error}
					aria-describedby={describedBy}
					className={cn(fieldClass, "min-h-32 resize-y")}
					id={id}
					placeholder=" "
					{...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
				/>
			) : (
				<input
					aria-invalid={!!error}
					aria-describedby={describedBy}
					className={fieldClass}
					id={id}
					placeholder=" "
					{...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
				/>
			)}
			<label
				htmlFor={id}
				className={cn(
					"pointer-events-none absolute left-1 top-1 text-xs uppercase tracking-[0.18em] transition-all duration-200",
					"peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-midnight/50",
					"peer-focus:top-1 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-midnight",
					error ? "text-red-800" : "text-midnight/60"
				)}
			>
				{label}
				{rest.required && <span aria-hidden className="text-midnight"> *</span>}
			</label>
			{error ? (
				<p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-800">
					{error}
				</p>
			) : hint ? (
				<p id={`${id}-hint`} className="mt-2 text-xs text-midnight/60">
					{hint}
				</p>
			) : null}
		</div>
	);
}

export default Input;
