type PageLayoutProps = {
    children: React.ReactNode
    className?: string
    fullWidth?: boolean
  }
  
  export function PageLayout({ 
    children, 
    className = "", 
    fullWidth = false 
  }: PageLayoutProps) {
    return (
      <div className={`min-h-screen pt-16 ${className}`}>
        {fullWidth ? (
          children
        ) : (
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        )}
      </div>
    )
  }