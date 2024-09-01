const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <div className='bg-green-300 p-4'>
        <div>AdminLayout</div>
        {children}
      </div>
    </>
  )
}

export default AdminLayout
