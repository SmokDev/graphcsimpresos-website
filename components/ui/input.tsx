import React from "react";

type InputProps =
	| ({ label: string; isTextarea?: false } & React.InputHTMLAttributes<HTMLInputElement>)
	| ({ label: string; isTextarea: true } & React.TextareaHTMLAttributes<HTMLTextAreaElement>);

export function Input(props: InputProps) {
	const { label, isTextarea, id, placeholder = " ", ...rest } = props as InputProps & { id?: string; placeholder?: string };
	const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
	return (
		<div className="group relative flex-grow w-full">
			{isTextarea ? (
				<textarea
					id={inputId}
					placeholder={placeholder}
					className="peer w-full bg-transparent border-b border-lightgrey/15 px-0 pb-3 pt-7 text-sm text-lightgrey placeholder-transparent outline-none transition-colors duration-200 focus:border-mint hover:border-lightgrey/30 resize-none min-h-[96px]"
					{...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
				/>
			) : (
				<input
					id={inputId}
					placeholder={placeholder}
					className="peer w-full bg-transparent border-b border-lightgrey/15 px-0 pb-3 pt-7 text-sm text-lightgrey placeholder-transparent outline-none transition-colors duration-200 focus:border-mint hover:border-lightgrey/30"
					{...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
				/>
			)}
			<label
				htmlFor={inputId}
				className="absolute left-0 top-2 text-[11px] tracking-[0.16em] uppercase text-lightgrey/40 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[12px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:tracking-[0.16em] peer-focus:uppercase peer-focus:text-mint"
			>
				{label}
			</label>
		</div>
	);
}

export default Input;
