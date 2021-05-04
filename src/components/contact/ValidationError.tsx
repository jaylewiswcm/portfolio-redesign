import React from 'react'

interface ComponentProps { 
  error: string 
}

const ValidationError = ({error}: ComponentProps) => {
  return (
    <p className="error-message">{error}</p>
  )
}

export default ValidationError;