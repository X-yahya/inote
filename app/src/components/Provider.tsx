"use client"
import React from 'react'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"

type Props = {
    children : React.ReactNode
}

const queryclient = new QueryClient()

const Provider = ({children}: Props) => {
  return (
    <QueryClientProvider client={queryclient}>
        {children}
    </QueryClientProvider>
  )
}

export default Provider ;