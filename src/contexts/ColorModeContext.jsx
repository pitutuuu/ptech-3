import { createContext, useState, useMemo, useContext } from 'react'

const defaultValues = {
    colorMode: 'light',
    toggleColorMode: () => {},
}

export const ColorModeContext = createContext(defaultValues)

export const ColorModeProvider = (props) => {
    const [colorMode, setColorMode] = useState('light')

    const toggleColorMode = () => {
        if (colorMode === 'light') {
            setColorMode('dark')
        } else {
            setColorMode('light')
        }
    }

const value = useMemo(() => ({colorMode, toggleColorMode}), [colorMode])

    return (
        <ColorModeContext.Provider value={value}>
        {props.children}
        </ColorModeContext.Provider>
    )
}

export const useColorMode = () => {
    const context = useContext(ColorModeContext)
    return context
}