import React from 'react'

const HomeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8" {...props}>
        <path fill="currentColor" d="M4 0L0 3h1v4h2V5h2v2h2V2.97L8 3L4 0z"></path>
    </svg>
)

const Dollar = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8" {...props}>
        <path fill="currentColor" d="M3 0v1h-.75C1.57 1 1 1.57 1 2.25v.5c0 .68.44 1.24 1.09 1.41l2.56.66c.14.04.34.29.34.44v.5c0 .14-.11.25-.25.25h-2.5a.56.56 0 0 1-.25-.06v-.94h-1v1c0 .34.2.63.44.78c.23.16.52.22.81.22h.75v1h1v-1h.75c.69 0 1.25-.56 1.25-1.25v-.5c0-.68-.44-1.24-1.09-1.41l-2.56-.66C2.2 3.15 2 2.9 2 2.75v-.5c0-.14.11-.25.25-.25h2.5c.11 0 .21.04.25.06V3h1V2c0-.34-.2-.63-.44-.78c-.23-.16-.52-.22-.81-.22H4V0H3z"></path>
    </svg>
)

const Menu = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8" {...props}>
        <path fill="currentColor" d="M0 1v1h8V1H0zm0 2.97v1h8v-1H0zm0 3v1h8v-1H0z"></path>
    </svg>
)

const Book = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8" {...props}>
        <path fill="currentColor" d="M1 0C.93 0 .87.01.81.03C.42.11.11.42.03.81C0 .87 0 .93 0 1v5.5C0 7.33.67 8 1.5 8H7V7H1.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H7V.5c0-.28-.22-.5-.5-.5H6v3L5 2L4 3V0H1z"></path>
    </svg>
)

const Chat = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8" {...props}>
        <path fill="currentColor" d="M0 0v5l1-1h1V1h3V0H0zm3 2v4h4l1 1V2H3z"></path>
    </svg>
)

const Crown = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-2 -4 24 24" {...props}>
        <path fill="currentColor" d="M2.776 5.106L3.648 11h12.736l.867-5.98l-3.493 3.02l-3.755-4.827l-3.909 4.811l-3.318-2.918zm10.038-1.537l-.078.067l.141.014l1.167 1.499l1.437-1.242l.14.014l-.062-.082l2.413-2.086a1 1 0 0 1 1.643.9L18.115 13H1.922L.399 2.7a1 1 0 0 1 1.65-.898L4.35 3.827l-.05.06l.109-.008l1.444 1.27l1.212-1.493l.109-.009l-.06-.052L9.245.976a1 1 0 0 1 1.565.017l2.005 2.576zM2 14h16v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"></path>
    </svg>
)

const MagnifyingGlass = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8" {...props}>
        <path fill="currentColor" d="M3.5 0C1.57 0 0 1.57 0 3.5S1.57 7 3.5 7c.59 0 1.17-.14 1.66-.41a1 1 0 0 0 .13.13l1 1a1.02 1.02 0 1 0 1.44-1.44l-1-1a1 1 0 0 0-.16-.13c.27-.49.44-1.06.44-1.66c0-1.93-1.57-3.5-3.5-3.5zm0 1C4.89 1 6 2.11 6 3.5c0 .66-.24 1.27-.66 1.72l-.03.03a1 1 0 0 0-.13.13c-.44.4-1.04.63-1.69.63c-1.39 0-2.5-1.11-2.5-2.5s1.11-2.5 2.5-2.5z"></path>
    </svg>
)
export { HomeIcon, Dollar, Menu, Book, Chat, Crown, MagnifyingGlass };