
const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }

  return (
      <div className="py-4 border-b-2 text-center">
          <p>All Copy Right Resvered{getYear()}</p>
    </div>
  )
}

export default Footer