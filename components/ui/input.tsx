import React from "react";

type InputProps =
	| ({
			label: string;
			isTextarea?: false;
	  } & React.InputHTMLAttributes<HTMLInputElement>)
	| ({
			label: string;
			isTextarea: true;
	  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>);

export function Input(props: InputProps) {
	const { label, isTextarea, ...rest } = props;
	return (
		<div className="relative mt-4 flex-grow w-full">
			{isTextarea ? (
				<textarea
					className="peer bg-base w-full border-b-2 border-foreground px-2 pb-3 pt-7 text-foreground placeholder-transparent outline-none transition-colors duration-200 focus:border-accent hover:border-assent resize-none"
					id={label}
					{...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
				/>
			) : (
				<input
					className="peer bg-base w-full border-b-2 border-foreground px-2 pb-3 pt-7 text-foreground placeholder-transparent outline-none transition-colors duration-200 focus:border-accent hover:border-assent"
					id={label}
					{...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
				/>
			)}
			<label
				htmlFor={label}
				className="absolute left-2 top-2 text-foreground text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm"
			>
				{label}
			</label>
		</div>
	);
}

export default Input;

// Usage example:
// <Input label="Nombre" placeholder=" " />
