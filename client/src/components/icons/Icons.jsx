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

export { HomeIcon, Dollar, Menu, Book, Chat };