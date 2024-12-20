import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import React from "react";
// Supports weights 100-900
import '@fontsource-variable/inter';
import type { } from '@mui/material/themeCssVarsAugmentation';
const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class",
    },
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: '#e6007e',
                },
                background: {
                    default: '#3f3f46',
                },
                grey: {
                    50: "#fdf2f8",
                    100: "#fce7f3",
                    200: "#fbcfe8",
                    300: "#f9a8d4",
                    400: "#f472b6",
                    500: "#ec4899",
                    600: "#db2777",
                    700: "#be185d",
                    800: "#9d174d",
                    900: "#831843",
                }
            },
        },
        light: {
            palette: {
                primary: {
                    main: '#e6007e',
                },
                background: {
                    default: '#f0f0f0',
                },
                grey: {
                    50: "#fdf2f8",
                    100: "#fce7f3",
                    200: "#fbcfe8",
                    300: "#f9a8d4",
                    400: "#f472b6",
                    500: "#ec4899",
                    600: "#db2777",
                    700: "#be185d",
                    800: "#9d174d",
                    900: "#831843",
                }
            },
        }
    },

    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    textTransform: 'none',
                    variants: [
                        {
                            props: { variant: 'contained', color: 'primary' },
                            style: {
                                border: `1px solid ${theme.vars.palette.primary.main}`,
                                boxShadow: `inset -0.75px -0.75px -0.75px #000, inset 0.75px 0.75px 0.75px rgb(255 255 255 / 50%)`,
                                backgroundImage: `linear-gradient(to bottom, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.light} 100%)`,
                                backgroundColor: theme.vars.palette.primary.light,
                            },
                            "&:hover": {
                                backgroundColor: theme.vars.palette.primary.main,
                                backgroundImage: `linear-gradient(to bottom, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 100%)`,
                            },
                            "&:active": {
                                boxShadow: "none",
                            }
                        },
                        {
                            props: { variant: 'outline', color: 'primary' },
                            style: {
                                borderColor: `${theme.vars.palette.grey[300]}`,
                                "&:hover": {
                                    borderColor: `${theme.vars.palette.grey[900]}`,
                                },
                            },
                        }
                    ],
                }),
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "& fieldset": {
                        borderColor: theme.vars.palette.grey[300],
                        backgroundColor: theme.vars.palette.grey[100],
                    },
                    "& .MuiOutlinedInput-root:not(.Mui-focused):hover fieldset": {
                        borderColor: theme.vars.palette.grey[500],
                    },
                    ...theme.applyStyles("dark", {
                        "& fieldset": {
                            borderColor: theme.vars.palette.grey[700],
                            backgroundColor: theme.vars.palette.grey[800],

                        },
                        "& .MuiOutlinedInput-root:not(.Mui-focused):hover fieldset": {
                            borderColor: theme.vars.palette.grey[900],
                        }

                    }
                    )
                }),
            },
        },
        MuiCheckbox: {
            defaultProps: {
                icon: (
                    <Box
                        sx={(theme) => ({
                            borderRadius: "8px",
                            width: '1.5rem',
                            height: '1.5rem',
                            border: `2px solid ${theme.vars.palette.grey[300]}`,
                            boxShadow: `inset -0.75px -0.75px -0.75px ${theme.vars.palette.grey[300]}, inset 0.75px 0.75px 0.75px ${theme.vars.palette.grey[100]}`,
                        })}
                    >
                    </Box>
                )
            },
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "initial",

                    },
                    ".MuiFormControlLabel-root &": {
                        marginLeft: "-9px",
                    }
                },
            }
        },
    },
});
export default function AppTheme({ children }: React.PropsWithChildren) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}