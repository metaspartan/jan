'use client'
import UserInput from './UserInput'

const Search: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-background p-6">
      <UserInput isOriginExtanded={false} />
    </div>
  )
}

export default Search
