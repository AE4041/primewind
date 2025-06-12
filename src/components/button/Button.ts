import {classNames} from "../../util/twMerge"

export const ButtonPT = {
    root: ({props, context}: any) => ({
        className: classNames(
            'cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 h-10 border px-4 py-2 inline-flex items-center gap-1 whitespace-nowrap text-center text-sm',
            'transition-all duration-300',
            'focus:outline-none focus:outline-offset-0',
            {
                'bg-white hover:enabled:bg-gray-50 active:enabled:bg-gray-100 hover:enabled:border-gray-300 dark:hover:enabled:border-gray-600 border-gray-200 dark:border-[#334155] text-gray-800 dark:text-[#f1f5f9] dark:bg-[#1e293b] dark:hover:enabled:bg-gray-700 dark:active:enabled:bg-gray-800':
                    !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                'text-[var(--primary-text-color)] bg-transparent border-transparent': props.link
            },
            {
                'text-white bg-blue-500 hover:bg-blue-600 active:enabled:bg-blue-700': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                'text-white bg-green-500 hover:bg-green-600 active:enabled:bg-green-700': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                'text-white bg-sky-500 hover:bg-sky-600 active:enabled:bg-sky-700': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                'text-white bg-orange-500 hover:bg-orange-600 active:enabled:bg-orange-700': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                'text-white bg-indigo-500 hover:bg-indigo-600 active:enabled:bg-indigo-700': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                'text-white bg-red-500 hover:bg-red-600 active:enabled:bg-red-700': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
            },
            {'shadow-lg': props.raised},
            {'rounded-md': !props.rounded, 'rounded-full': props.rounded},
            {
                'bg-transparent border-transparent': props.text && !props.plain,
                'text-blue-500 dark:text-blue-400 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
                'text-gray-500 dark:text-gray-400 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
                'text-green-500 dark:text-green-400 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                'text-orange-500 dark:text-orange-400 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                'text-indigo-500 dark:text-indigo-400 hover:bg-indigo-300/20': props.text && props.severity === 'help' && !props.plain,
                'text-red-500 dark:text-red-400 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
            },
            {'shadow-lg': props.raised && props.text},
            {
                'text-gray-500 hover:bg-gray-300/20': props.plain && props.text,
                'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain && props.outlined,
                'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain && !props.outlined && !props.text
            },
            {
                'bg-transparent border': props.outlined && !props.plain,
                'text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-300/20': props.outlined && (props.severity === null || props.severity === 'info') && !props.plain,
                'text-gray-500 dark:text-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                'text-green-500 dark:text-green-400 border border-green-500 dark:border-green-400 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                'text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                'text-indigo-500 dark:text-indigo-400 border border-indigo-500 dark:border-indigo-400 hover:bg-indigo-300/20': props.outlined && props.severity === 'help' && !props.plain,
                'text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
            },
            {
                'px-4 py-3 text-base': props.size === null,
                'text-xs py-2 px-3': props.size === 'small',
                'text-xl py-3 px-4': props.size === 'large'
            },
            {'flex-column': props.iconPos == 'top' || props.iconPos == 'bottom'},
            {'opacity-60 pointer-events-none cursor-default': context.disabled}
        )
    }),
    label: ({props}: any) => ({
        className: classNames(
            'flex-1',
            'duration-200',
            'font-bold',
            {
                'hover:underline': props.link
            },
            {'invisible w-0': props.label == null}
        )
    }),
    icon: ({props}: any) => ({
        className: classNames('mx-0', {
            'mr-2': props.iconPos == 'left' && props.label != null,
            'ml-2 order-1': props.iconPos == 'right' && props.label != null,
            'mb-2': props.iconPos == 'top' && props.label != null,
            'mt-2 order-2': props.iconPos == 'bottom' && props.label != null
        })
    }),
    loadingIcon: ({props}: any) => ({
        className: classNames('mx-0', {
            'mr-2': props.loading && props.iconPos == 'left' && props.label != null,
            'ml-2 order-1': props.loading && props.iconPos == 'right' && props.label != null,
            'mb-2': props.loading && props.iconPos == 'top' && props.label != null,
            'mt-2 order-2': props.loading && props.iconPos == 'bottom' && props.label != null
        })
    }),
    badge: ({props}: any) => ({
        className: classNames({'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge})
    })
}
