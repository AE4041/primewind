import { classNames } from "../../util/twMerge"


export const CheckboxPT = {
    root: {
        className: classNames('shrink-0 relative flex h-5 w-5 items-center justify-center border-gray-300 overflow-hidden border-2 bg-gray-100 transition-shadow duration-300  rounded-md')
    },
    input: {
        className: classNames('peer absolute start-0 top-0 z-[3] h-full w-full cursor-pointer appearance-none ')
    },
    box: ({ props, context }: any) => ({
        className: classNames(
            'absolute top-0 start-0 z-[1] block h-full w-full scale-0 transition-transform duration-300 peer-checked:scale-[1.1] bg-muted-300 dark:bg-muted-700 rounded-md',
            {
                'border-gray-300 bg-white dark:border-gray-900/40 dark:bg-gray-900': !context.checked,
                'border-gray-500 bg-gray-300 dark:border-gray-400 dark:bg-[#334155]/50': context.checked
            },
            {
                'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                'cursor-default opacity-60': props.disabled
            }
        )
    }),
    icon: 'w-4 h-4 relative start-0 z-[2] transition-all duration-200 text-gray-900 text-base dark:text-gray-900'
}
